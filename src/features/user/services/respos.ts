import { Games } from '../../game/models/games';

export type id = string;

export interface UserRepo<User> {
    register: (user: Partial<User>) => Promise<User>;
    login: (user: Partial<User>) => Promise<{ user: User; token: string }>;
    get: (id: id) => Promise<User>;
    // post: (data: Partial<User>) => Promise<User>;
    // find: (data: Partial<User>) => Promise<User>;
    // patch: (id: id, data: Partial<User>) => Promise<User>;
    addFav: (id: id) => Promise<Games>;
    deleteFav: (id: id) => Promise<User>;
    delete: (id: id) => Promise<User>;
}
