import { RoleEnum } from "../enums/role.enum";

export interface TokenModel {
    token: string;
    id: string;
    username: string;
    role: RoleEnum;
}