import { CategoryEnum } from "../enums/category.enum";
import { StatusEnum } from "../enums/status.enum";

export interface TournamentSearchModel {
    offset: number;
    name: string|null;
    category: CategoryEnum|null;
    statuses: StatusEnum[];
    womenOnly: boolean;
}