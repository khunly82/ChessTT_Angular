import { AfterViewChecked, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ConfirmationService, MessageService, PrimeIcons } from 'primeng/api';
import { Paginator } from 'primeng/paginator';
import { takeUntil, switchMap, mergeMap, catchError, Observable } from 'rxjs';
import { RoleEnum } from 'src/app/core/enums/role.enum';
import { loadingStart, loadingStop } from 'src/app/core/states/loading.reducer';
import { SessionState } from 'src/app/core/states/session.reducer';
import { DestroyedComponent } from 'src/app/shared/components/destroyed.component';
import { CategoryEnum } from '../../enums/category.enum';
import { StatusEnum } from '../../enums/status.enum';
import { tournamentSearchForm } from '../../forms/tournament-search.form';
import { TournamentSearchModel } from '../../models/tournament-search.model';
import { TournamentModel } from '../../models/tournament.model';
import { InscriptionService } from '../../services/inscription.service';
import { TournamentService } from '../../services/tournament.service';
import { changeCriteria, changePage, TournamentState } from '../../states/tournament.reducers';

@Component({
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent extends DestroyedComponent implements OnInit, AfterViewChecked {

  @ViewChild('topPaginator') 
  topPaginator!: Paginator
  @ViewChild('bottomPaginator') 
  bottomPaginator!: Paginator

  total: number = 0;
  criteria: TournamentSearchModel = { offset: 0, name: null, category: null, statuses: [], womenOnly: false };
  tournaments: TournamentModel[] = [];
  StatusEnum = StatusEnum;
  CategoryEnum = CategoryEnum;

  isAdmin: boolean = false;
  fg!: FormGroup;

  constructor(
    private readonly _store: Store<{ tournamentFeature: { tournamentState: TournamentState },  sessionState: SessionState }>,
    private readonly _tournamentService: TournamentService,
    private readonly _inscriptionService: InscriptionService,
    private readonly _confirmationService: ConfirmationService,
    private readonly _messageService: MessageService,
    private readonly _fb: FormBuilder,
  ) { super(); }

  ngAfterViewChecked(): void {
    this.topPaginator.changePage((this.criteria.offset / 10));
    this.bottomPaginator.changePage((this.criteria.offset / 10));
  }

  ngOnInit(): void {
    this.fg = this._fb.group(tournamentSearchForm);
    
    this._store.select(state => state.sessionState.role).pipe(
      takeUntil(this.destroyed$)
      ).subscribe(role => this.isAdmin = role === RoleEnum.ADMIN);
      
    this._store.select(state => state.tournamentFeature.tournamentState.searchCriteria).pipe(
      takeUntil(this.destroyed$),
      switchMap((criteria) => {
        this.fg.patchValue(criteria);
        this._store.dispatch(loadingStart());
        return this._tournamentService.get(criteria);
      }),
    ).subscribe({
      next: response => this.reload(response),
    });
  }

  paginate($event: any) {
    if($event.page * 10 === this.criteria.offset) {
      return;
    }
    this._store.dispatch(changePage({ offset: ($event.page) * 10 }));
  }

  delete(tournament: TournamentModel) {
    this._confirmationService.confirm({
      message: 'Êtes vous sûr de vouloir suppimer cet élément ?',
      accept: () => {
        this.handleThenRefresh(
          this._tournamentService.delete(tournament.id),
          'Le tournoi a eté supprimé'
        );
      }
    })
  }

  register(tournament: TournamentModel) {
    this.handleThenRefresh(
      this._inscriptionService.register(tournament.id),
      'Vous êtes inscrit au tournoi'
    );
  }

  unregister(tournament: TournamentModel) {
    this.handleThenRefresh(
      this._inscriptionService.unregister(tournament.id),
      'Vous vous êtes désinscrit du tournoi'
    );
  }

  search() {
    this._store.dispatch(changeCriteria({ criteria: this.fg.value }));
  }

  private handleThenRefresh(observable: Observable<any>, successMessage: string) {
    this._store.dispatch(loadingStart());
    observable.pipe(
      mergeMap(() => {
        this._messageService.add({ severity: 'success', icon: PrimeIcons.CHECK_CIRCLE, detail: successMessage });
        return this._tournamentService.get(this.criteria);
      }),
      catchError(() => this._tournamentService.get(this.criteria)),
    ).subscribe({
      next: response => {
        this.reload(response);
      },
    });
  }

  private reload(response: any) {
    this.tournaments = response.tournaments;
    this.total = response.total;
    this.criteria = response.criteria;
    this._store.dispatch(loadingStop());
  }
}
