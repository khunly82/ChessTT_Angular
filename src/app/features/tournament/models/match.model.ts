import { ResultEnum } from "../enums/result.enum";

export interface MatchModel {
    id: number;
    tournamentId: string;
    whiteId: string
    blackId: string;
    whiteName: string;
    blackName: string;
    result: ResultEnum;
    round: number;
}