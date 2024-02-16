import { CategoryEnum } from "../enums/category.enum";
import { StatusEnum } from "../enums/status.enum";

export interface TournamentModel {
    id:	string;
    name: string;
    location: string;
    minPlayers: number;
    maxPlayers: number;
    eloMin: number|null;
    eloMax: number|null;
    categories: CategoryEnum[];
    womenOnly: boolean;
    endOfRegistrationDate: string;
    count:	number;
    currentRound: number;
    status: StatusEnum;
    canRegister: boolean;
    isRegistered: boolean;
}