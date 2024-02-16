import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TournamentsRoutingModule } from './tournament-routing.module';
import { TournamentComponent } from './tournament.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { IndexComponent } from './pages/index/index.component';
import { AddComponent } from './pages/add/add.component';
import { EditComponent } from './pages/edit/edit.component';
import { StoreModule } from '@ngrx/store';
import { TournamentEffects, TournamentReducer } from './states/tournament.reducers';
import { StatusToStringPipe } from './pipes/status-to-string.pipe';
import { DetailsComponent } from './pages/details/details.component';
import { MatchComponent } from './components/match/match.component';
import { RoundFilterPipe } from './pipes/round-filter.pipe';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [
    TournamentComponent,
    IndexComponent,
    AddComponent,
    EditComponent,
    StatusToStringPipe,
    DetailsComponent,
    MatchComponent,
    RoundFilterPipe,
  ],
  imports: [
    CommonModule,
    TournamentsRoutingModule,
    SharedModule,
    StoreModule.forFeature('tournamentFeature', { tournamentState: TournamentReducer }),
    EffectsModule.forFeature([TournamentEffects]),
  ]
})
export class TournamentModule { }
