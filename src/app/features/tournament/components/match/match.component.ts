import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { ResultEnum } from '../../enums/result.enum';
import { MatchModel } from '../../models/match.model';
import { changeResult, TournamentState } from '../../states/tournament.reducers';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {

  private _match!: MatchModel;

  @Input()
  set match(v: MatchModel) {
    this._match = {...v};
  }

  get match(): MatchModel {
    return this._match;
  }

  @Input()
  disabled!: boolean;

  ResultEnum = ResultEnum;

  constructor(
    private readonly _store: Store<{ tournamentFeature: { tournamentState: TournamentState } }>,
  ) {}

  ngOnInit(): void {
    
  }

  updateResult(match: MatchModel) {
    this._store.dispatch(changeResult({ match }));
  }

}
