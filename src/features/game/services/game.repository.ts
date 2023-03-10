import { Games } from '../models/games';
import { Repository } from './repository';

export class GameRepository implements Repository {
    url: string;
    constructor(url = '') {
        this.url = 'http://localhost:3000/games';
    }
    getAll(): Promise<Array<Games>> {
        return fetch('http://localhost:3000/games')
            .then((res) => {
                console.log('game json', res);
                return res.json();
            })
            .then((data) => {
                console.log('game DATA', data);
                return data.games;
            })
            .catch((error) => {
                return error;
            });

        // return fetch(this.url)
        //     .then((res) => {
        //         if (res.ok) return res.json();
        //         throw this.createError(res);
        //     })
        //     .then((data) => {
        //         return data.games;
        //     })
        //     .catch((error) => {
        //         return `${error}`;
        //     });
    }
    get(id: string): Promise<Games> {
        return fetch(`${this.url}/${id}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
            .then((res) => res.json())
            .then((res) => res.games)
            .catch((error) => {
                return error;
            });
    }
}
