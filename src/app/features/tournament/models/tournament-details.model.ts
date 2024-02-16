import { CategoryEnum } from "../enums/category.enum";
import { StatusEnum } from "../enums/status.enum";
import { MatchModel } from "./match.model";

export interface TournamentDetailsModel {
    id:	string;
    name: string;
    location: string;
    minPlayers: number;
    maxPlayers: number;
    eloMin: number|null;
    eloMax: number|null;
    categories: CategoryEnum[];
    womenOnly:boolean;
    endOfRegistrationDate: string;
    count:	number;
    currentRound: number;
    status: StatusEnum;
    canRegister: boolean;
    isRegistered: boolean;
    canStart: boolean;
    canValidateRound: boolean;
    players: PlayerScoreModel[];
    matches: MatchModel[];
}

export interface PlayerScoreModel {
    id: string;
    username: string;
    position?: number;
    matchPlayed?: number;
    wins?: number;
    defeats?: number;
    draws?: number;
    score?: number;
}