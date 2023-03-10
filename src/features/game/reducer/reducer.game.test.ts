import { User } from '../../user/models/user';
import { actionTypes } from './action.types';
import { Games } from '../models/games';
import { gameReducer } from './reducer';

describe('Given the component gamesReducer', () => {
    const mockGame = {
        id: '',
        title: 'SuperMario',
        images: 'https://aaa12a1a212a12a1',
        description: 'who rescues the princess',
        gameUrl: 'http://www.mario.com',
        creator: 'Pepe',
        genre: 'Action',
        userFav: { id: '125445s5' } as User,
    };
    let action: { type: string; payload: unknown };
    let state: Array<Games>;

    describe('When the action is load', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.load,
                payload: [mockGame],
            };
        });
        test('Return state should be action payload', () => {
            const result = gameReducer(state, action);
            expect(result).toEqual(action.payload);
        });
    });
});
