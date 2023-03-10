import { User } from '../../user/models/user';

export type ProtoGames = {
    title?: string;
    images: string;
    description?: string;
    gameUrl?: string;
    creator?: string;
    genre?: string;
    userFav: string;
    //owner?: string;
};

export type Games = {
    id: string;
    title: string;
    images: string;
    description: string;
    gameUrl: string;
    creator: string;
    genre: string;
    userFav: string;
    // owner: string;
};
