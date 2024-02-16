import { CategoryEnum } from "../enums/category.enum";

export interface TournamentFormModel {
    name: string;
    location: string;
    minPlayers: number;
    maxPlayers: number;
    eloMin:	number|null;
    eloMax: number|null
    categories: CategoryEnum[];
    womenOnly: boolean
    endOfRegistrationDate: Date;
}