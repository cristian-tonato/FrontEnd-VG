import { Games } from "../models/games";

export type id = string;

export interface Repository {
    getAll: () => Promise<Array<Games>>;
    get: (id: id) => Promise<Games>;
}
