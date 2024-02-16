import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs';
import { RoleEnum } from 'src/app/core/enums/role.enum';
import { SessionState } from 'src/app/core/states/session.reducer';
import { DestroyedComponent } from 'src/app/shared/components/destroyed.component';
import { StatusEnum } from '../../enums/status.enum';
import { TournamentDetailsModel } from '../../models/tournament-details.model';
import { changeTab, selectTournament, startTournament, TournamentState, validateRoundResults } from '../../states/tournament.reducers';

@Component({
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent extends DestroyedComponent implements OnInit {

  tournament: TournamentDetailsModel|null = null;
  selectedTab!: number;
  steps: { label: string }[] = [];
  isLoading: boolean = false;
  role?: RoleEnum;
  StatusEnum = StatusEnum;
  RoleEnum = RoleEnum;

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _store: Store<{ sessionState: SessionState, tournamentFeature: { tournamentState: TournamentState } }>,
  ) { super(); }

  ngOnInit(): void {
    const {id} = this._route.snapshot.params;

    this._store.dispatch(selectTournament({id}));

    this._store.select(state => state.sessionState.role)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(role => this.role = role);

    this._store.select(state => state.tournamentFeature.tournamentState.selectedTab)
      .pipe(takeUntil(this.destroyed$))
      .subscribe( selectedTab => {
        this.selectedTab = selectedTab;
      });

    this._store.select(state => state.tournamentFeature.tournamentState.selectedTournament)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(tournament => {
        this.tournament = tournament;
        if(tournament.count > 0) {
          const count = tournament.count % 2 == 0 ? (tournament.count - 1)  * 2 : tournament.count * 2;
          this.steps = [...Array(count).keys()].map(item => ({
            label: `Tour ${item+1}`
          }));
        }
      });
  }

  start() {
    if(!this.tournament)
      return;
    this._store.dispatch(startTournament({id: this.tournament.id}));
  }

  save() {
    if(!this.tournament)
      return;
    this._store.dispatch(validateRoundResults({id: this.tournament.id}));
  }

  onTabChange() {
    this._store.dispatch(changeTab({ tab: this.selectedTab }));
  }
}
