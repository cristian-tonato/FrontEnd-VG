import { Games } from "../../game/models/games";

export type ProtoUser = {
    name?: string;
    lastName?: string;
    nickName?: string;
    email?: string;
    password?: string;
    favotites?: Array<Games>;
    //owner: string;
};

export type User = {
    id: string;
    name: string;
    lastName: string;
    nickname: string;
    email: string;
    password: string;
    favorites: Array<Games>;
    //owner: string;
};
