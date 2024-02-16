import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs';
import { DestroyedComponent } from '../destroyed.component';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent extends DestroyedComponent implements OnInit {

  @Input()
  isLoading:boolean = false;

  constructor(
    private readonly _store: Store<{ loadingState: boolean }>
  ) { super(); }

  ngOnInit(): void {
    this._store.select(state => state.loadingState).pipe(
      takeUntil(this.destroyed$)
    ).subscribe(isLoading => this.isLoading = isLoading);
  }

}
