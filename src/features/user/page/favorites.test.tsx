import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore, rootState } from '../../../infrastructure/store/store';
import { Games } from '../../game/models/games';
import { User } from '../models/user';
import { userReducer } from '../reducer/user.reducer';
import { FavoritesGames } from './favorites';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Given Favorites component', () => {
    describe('When we render the component', () => {
        const mockGame: Games = {
            id: '6389bb90ed3e6a5b94faa5a9',
            title: 'SuperMario',
            description: 'xxxxxxxx',
            gameUrl: '',
            images: '',
            creator: 'Pepe',
            genre: 'Action',
            userFav: '',
        };

        const mockUser: User = {
            id: '121515a1a515',
            name: 'Pepe',
            lastName: 'perez',
            nickname: '',
            email: 'pepeBot@gmil.com',
            password: '123456',
            favorites: [mockGame],
        };

        const preloadState = {
            user: {
                isLogged: true,
                isLogging: false,
                user: mockUser,
                token: '',
                favorites: [mockGame],
            },
        };

        const mockAppStore = configureStore({
            reducer: {
                user: userReducer,
            },
            preloadedState: preloadState,
        });

        test('Then it should display the favorites list', () => {
            render(
                <>
                    <Provider store={mockAppStore}>
                        <Router>
                            <FavoritesGames></FavoritesGames>
                        </Router>
                    </Provider>
                </>
            );
            const element = screen.getByText(/Favorites Games/i);
            expect(element).toBeInTheDocument();
        });

        test('Then it should not display the favorites list', () => {
            render(
                <>
                    <Provider store={mockAppStore}>
                        <Router>
                            <FavoritesGames></FavoritesGames>
                        </Router>
                    </Provider>
                </>
            );
            const element = screen.getByText(/Favorites Games/i);
            expect(element).toBeInTheDocument();
        });

        test('Then if the use clicks on the DeletFav button, it should delete the item of the favoritesList', async () => {
            render(
                <>
                    <Provider store={mockAppStore}>
                        <Router>
                            <FavoritesGames></FavoritesGames>
                        </Router>
                    </Provider>
                </>
            );
            fireEvent.click(screen.getByRole('button'));
            userEvent.click(await screen.findByText(/DeleteFav/i));
        });
        test('Then if the user clicks on the DeleteFav button, it should delete the item of the favoritesList', async () => {
            render(
                <>
                    <Provider store={mockAppStore}>
                        <Router>
                            <FavoritesGames></FavoritesGames>
                        </Router>
                    </Provider>
                </>
            );
            const element = screen.getByText(/DeleteFav/i);
            expect(element).toBeInTheDocument();
        });
    });
});
