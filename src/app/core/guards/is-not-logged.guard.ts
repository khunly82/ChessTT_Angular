import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SessionState } from '../states/session.reducer';

@Injectable({
  providedIn: 'root'
})
export class IsNotLoggedGuard implements CanActivate {
  constructor(
    private readonly _store: Store<{sessionState: SessionState}>
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this._store.select(state => !state.sessionState.isLogged);
  }
  
}
