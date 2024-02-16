import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { createAction, createReducer, on, props, Store } from "@ngrx/store";
import { catchError, EMPTY, endWith, map, startWith, switchMap } from "rxjs";
import { loadingStart, loadingStop } from "src/app/core/states/loading.reducer";
import { ResultEnum } from "../enums/result.enum";
import { MatchModel } from "../models/match.model";
import { TournamentDetailsModel } from "../models/tournament-details.model";
import { TournamentSearchModel } from "../models/tournament-search.model";
import { MatchService } from "../services/match.service";
import { TournamentService } from "../services/tournament.service";

export interface TournamentState {
    searchCriteria: TournamentSearchModel,
    selectedTournament: TournamentDetailsModel,
    selectedTab: number;
}

export const changeCriteria = createAction('[tournament] change criteria', props<{criteria: TournamentSearchModel}>());
export const changePage = createAction('[tournament] change page', props<{offset: number}>());


export const selectTournament = createAction('[tournament] select tournament', props<{id: string}>());
export const startTournament = createAction('[tournament] start', props<{id: string}>());
export const changeResult = createAction('[tournament] change result', props<{match: MatchModel}>());
export const validateRoundResults = createAction('[tournament] validateRoundResults', props<{id: string}>());

export const loadSelectedTournament = createAction('[tournament] load selected', props<{tournament: TournamentDetailsModel}>());
export const changeTab = createAction('[tournament] change tab', props<{tab: number}>());

const initialState = <TournamentState>{ 
    searchCriteria: { offset: 0, name: null },
    selectedTournament: {},
    selectedTab: -1,
};

export const TournamentReducer = createReducer(
    initialState,
    on(changeCriteria, (state, {criteria}) => ({ 
        ...state,
        searchCriteria: { ...state.searchCriteria, ...criteria },
    })),
    on(changePage, (state, {offset}) => ({ 
        ...state,
        searchCriteria: { ...state.searchCriteria, offset: offset },
    })),
    on(loadSelectedTournament, (state, {tournament}) => ({
        ...state,
        selectedTab: tournament.currentRound - 1,
        selectedTournament:  calculateTournamentScore(tournament.currentRound, tournament)
    })),
    on(changeTab, (state, {tab}) => ({
        ...state,
        selectedTab: tab,
        selectedTournament:  calculateTournamentScore(tab + 1, state.selectedTournament)
    })),
);

@Injectable()
export class TournamentEffects {

    selectTournament = createEffect(() => this._actions$.pipe(
        ofType(selectTournament),
        switchMap(({id}) => this._tournamentService.getDetails(id).pipe(
            map(tournament => loadSelectedTournament({tournament})),
            catchError(() => EMPTY),
            startWith(loadingStart()),
            endWith(loadingStop()),
        )),
    ));

    startTournament$ = createEffect(() => this._actions$.pipe(
        ofType(startTournament),
        switchMap(({id}) => this._tournamentService.start(id).pipe(
            map(() => selectTournament({id}))
        )),
    ));

    validateRoudResult$ = createEffect(() => this._actions$.pipe(
        ofType(validateRoundResults),
        switchMap(({id}) => this._tournamentService.nextRound(id).pipe(
            map(() => selectTournament({id}))
        )),
    ));

    changeResult$ = createEffect(() => this._actions$.pipe(
        ofType(changeResult),
        switchMap(({match}) => this._matchService.updateMatch(match.id, match.result).pipe(
            map(() => selectTournament({id: match.tournamentId}))
        )),
    ));

    constructor(
        private readonly _actions$: Actions,
        private readonly _tournamentService: TournamentService,
        private readonly _matchService: MatchService,
    ) {}
}


const calculateTournamentScore = (round: number, tournament: TournamentDetailsModel) => ({ 
    ...tournament,
    canValidateRound: tournament.matches.filter(m => m.round === round).every(m => m.result !== ResultEnum.NOT_PLAYED),
    players :([ ...tournament?.players.map(p => ({
        ...p,
        matchPlayed: tournament?.matches
            .filter(m => m.round <= round && m.result !== ResultEnum.NOT_PLAYED && (m.blackId === p.id || m.whiteId === p.id))
            .reduce((prev, current) => prev + 1, 0),
        wins: tournament?.matches
            .filter(m => m.round <= round && m.result !== ResultEnum.NOT_PLAYED && (m.blackId === p.id || m.whiteId === p.id))
            .filter(m => (m.blackId === p.id && m.result === ResultEnum.BLACK_WIN) || (m.whiteId === p.id && m.result === ResultEnum.WHITE_WIN))
            .reduce((prev, current) => prev + 1, 0),
        defeats: tournament?.matches
            .filter(m => m.round <= round && m.result !== ResultEnum.NOT_PLAYED && (m.blackId === p.id || m.whiteId === p.id))
            .filter(m => (m.blackId === p.id && m.result === ResultEnum.WHITE_WIN) || (m.whiteId === p.id && m.result === ResultEnum.BLACK_WIN))
            .reduce((prev, current) => prev + 1, 0),
        draws: tournament?.matches
            .filter(m => m.round <= round && m.result !== ResultEnum.NOT_PLAYED && (m.blackId === p.id || m.whiteId === p.id))
            .filter(m => m.result === ResultEnum.DRAW)
            .reduce((prev, current) => prev + 1, 0)
    })) ]
    .sort((p1, p2) => (p2.wins + p2.draws * 0.5) - (p1.wins + p1.draws * 0.5))
    .reduce((prev: any[], current, index) => {
        current.score = current.wins + current.draws * 0.5;
        current.position = prev[prev.length-1]?.score === current.score ? prev[prev.length-1]?.position : (index + 1);
        return [...prev, current];
    }, [])
)});