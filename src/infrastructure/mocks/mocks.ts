import { AnyAction, configureStore } from '@reduxjs/toolkit';
import { Games } from '../../features/game/models/games';
import { gameReducer } from '../../features/game/reducer/reducer';
import { User } from '../../features/user/models/user';
import { userReducer } from '../../features/user/reducer/user.reducer';
import { rootState } from '../store/store';

export const mockGame: Games = {
    id: 'a1a1a1a1a11a1aa11aa1a1',
    title: 'SuperMario',
    description: 'Heroe',
    gameUrl: '',
    images: '',
    genre: 'Action',
    userFav: '',
    creator: 'Pepe',
};

export const mockGames2: Games = {
    id: '12255555555',
    title: 'SuperMario2',
    description: 'Heroe-Arcade',
    gameUrl: '',
    images: '',
    genre: 'Action',
    userFav: '',
    creator: 'Pepe',
};

export const mockUser: User = {
    id: '111111111111111111',
    name: 'Pepe',
    lastName: 'Perez',
    nickname: 'pepebot',
    email: 'pepebot@gmail.com',
    password: '123456',
    favorites: [],
};

export const mockUser2: User = {
    id: '15555551216464',
    name: 'Ramiro',
    lastName: 'Perez',
    nickname: 'ramirobot',
    email: 'ramirobot@gmail.com',
    password: '123456',
    favorites: [],
};

export const mockUser3 = {
    id: '1777777771111111111',
    name: 'Juan',
    lastName: 'Juanito',
    nickname: 'juanbot',
    email: 'juanbot@gmail.com',
    password: '123456',
    favorites: [],
};

export const preloadState: Partial<rootState> = {
    user: {
        isLogged: true,
        isLogging: false,
        user: mockUser,
        token: 'token',
    },
};

export const preloadState2: Partial<rootState> = {
    user: {
        isLogged: true,
        isLogging: false,
        user: mockUser2,
        token: 'token',
    },
};

export const mockAppStore = configureStore({
    reducer: {
        user: userReducer,
        game: gameReducer,
    },
    preloadedState: preloadState,
});

export const mockAppStore2 = configureStore({
    reducer: {
        user: userReducer,
        game: gameReducer,
    },
    preloadedState: preloadState,
});

export const mockAppStore3 = configureStore({
    reducer: {
        user: userReducer,
        game: gameReducer,
    },
    preloadedState: preloadState,
});
// function gamesReducer(state: unknown, action: AnyAction): unknown {
//     throw new Error('Function not implemented.');
// }
