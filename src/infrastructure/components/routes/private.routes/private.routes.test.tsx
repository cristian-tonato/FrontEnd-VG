import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router, Navigate } from 'react-router-dom';
import { DetailsGames } from '../../../../features/game/page/details.game';
import { FavoritesGames } from '../../../../features/user/page/favorites';
import { appStore } from '../../../store/store';
import { HomePage } from '../../pages/home/home.page';
import { PrivateRouter } from './private.routes';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    Navigate: jest.fn(),
}));

describe('Given the route', () => {
    test('If the user is logged should go FavoriteGames', async () => {
        render(
            <>
                <Router initialEntries={['/favorites']} initialIndex={1}>
                    <Provider store={appStore}>
                        <PrivateRouter>
                            <FavoritesGames></FavoritesGames>
                        </PrivateRouter>
                    </Provider>
                </Router>
            </>
        );
        const element = screen.getByText(/FAVORITES GAMES/i);
        expect(element).toBeInTheDocument();
    });
    test('If the user is not logged should go to home', async () => {
        render(
            <>
                <Router initialEntries={['/home']} initialIndex={1}>
                    <Provider store={appStore}>
                        <PrivateRouter>
                            <HomePage></HomePage>
                        </PrivateRouter>
                    </Provider>
                </Router>
            </>
        );
        const element = screen.queryByText(/Games/i);
        expect(element).toBe(null);
        expect(Navigate).toHaveBeenCalled();
    });
});
