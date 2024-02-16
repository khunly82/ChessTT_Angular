import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MessageService, PrimeIcons } from 'primeng/api';
import { takeUntil } from 'rxjs';
import { SessionState, sessionStop } from 'src/app/core/states/session.reducer';
import { DestroyedComponent } from 'src/app/shared/components/destroyed.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent extends DestroyedComponent implements OnInit {

  isLogged!: boolean;

  constructor(
    private readonly _store: Store<{sessionState: SessionState}>,
    private readonly _router: Router,
    private readonly _cd: ChangeDetectorRef,
    private readonly _messageService: MessageService,
  ) { super(); }

  ngOnInit(): void {
    this._store.select(state => state.sessionState.isLogged)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(isLogged => {
        this.isLogged = isLogged;
        this._cd.detectChanges();
      });
  }

  logout() {
    this._store.dispatch(sessionStop());
    this._router.navigate(['auth']);
    this._messageService.add({ severity: 'info', icon: PrimeIcons.INFO_CIRCLE, detail: 'A bientôt' });
  }
}
