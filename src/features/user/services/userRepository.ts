import { Games } from './../../game/models/games';
import { User } from '../models/user';
import { UserRepo } from './respos';

export class UserRespository implements UserRepo<User> {
    url: string;
    constructor(url: '') {
        this.url = 'http://localhost:3000/users';
    }
    register(user: Partial<User>): Promise<User> {
        return fetch('http://localhost:3000/users/register', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((res) => res.json())
            .catch((error) => {
                return error;
            });
    }
    login(user: Partial<User>): Promise<{ user: User; token: string }> {
        return fetch('http://localhost:3000/users/login', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((res) => res.json())
            .catch((error) => {
                return error;
            });
    }
    get(id: string): Promise<User> {
        return fetch(`${this.url}/${id}`, {
            method: 'GET',
            headers: {
                'Context-type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
            .then((res) => {
                res.json();
            })
            .catch((error) => {
                return error;
            });
    }
    addFav(id: string): Promise<Games> {
        return fetch(`${this.url}/addfav/${id}`, {
            method: 'PATCH',
            body: '{"body": "algo"}',
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
            .then((res) => res.json())
            .catch((error) => {
                return error;
            });
    }
    deleteFav(id: string): Promise<User> {
        return fetch(`${this.url}/${id}`, {
            method: 'UPDATE',
            headers: {
                'Context-type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
            .then((res) => res.json())
            .catch((error) => {
                return error;
            });
    }
    delete(id: string): Promise<User> {
        return fetch(`${this.url}/users/${id}`, {
            method: 'DELETE',
            headers: {
                'Context-type': 'application/json',
            },
        })
            .then((res) => res.json())
            .catch((error) => {
                return error;
            });
    }
}
