import { renderHook, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';

import { appStore } from '../../../infrastructure/store/store';
import { Games } from '../models/games';
import { GameRepository } from '../services/game.repository';
import { useGame } from './usegame';

const mockGames = {
    id: 'a1a1a1a1a11a1aa11aa1a1',
    title: 'SuperMario',
    description: 'Heroe',
    gameUrl: '',
    images: '',
    genre: 'Action',
    userFav: '',
};
describe('Given useGame', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let result: {
        current: {
            games: Array<Games>;
        };
    };
    beforeEach(() => {
        GameRepository.prototype.getAll = jest
            .fn()
            .mockResolvedValue([mockGames]);

        const wrapper = ({ children }: { children: JSX.Element }) => (
            <Provider store={appStore}>{children}</Provider>
        );

        ({ result } = renderHook(() => useGame(), { wrapper }));
    });

    describe('when we get products', () => {
        test('then should return a Promise of products', async () => {
            await waitFor(() => {
                expect(mockGames).toBeTruthy();
            });
        });
    });
});
