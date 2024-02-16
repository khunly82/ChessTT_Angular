import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private _isOpen$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isOpen$(): Observable<boolean> {
    return this._isOpen$.asObservable();
  }

  get isOpen(): boolean {
    return this._isOpen$.value;
  }

  constructor() { }

  open() {
    this._isOpen$.next(true);
  }

  close() {
    this._isOpen$.next(false);
  }

  toggle() {
    this._isOpen$.next(!this._isOpen$.value)
  }
}
