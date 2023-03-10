import { Provider } from 'react-redux';
import { appStore } from '../../../infrastructure/store/store';

import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { DetailsGames } from './details.game';

describe('Given DetailsPage component', () => {
    describe('When we render the component', () => {
        test('Then it should display the details of the game', () => {
            render(
                <>
                    <Provider store={appStore}>
                        <Router>
                            <DetailsGames></DetailsGames>
                        </Router>
                    </Provider>
                </>
            );
            const element = screen.getByText(/AddFav/i);
            expect(element).toBeInTheDocument();
        });

        test('Then if the user clicks on the ADDFAV button, it should delete the item of the favorites list', async () => {
            render(
                <>
                    <Provider store={appStore}>
                        <Router>
                            <DetailsGames></DetailsGames>
                        </Router>
                    </Provider>
                </>
            );
            fireEvent.click(screen.getByRole('button'));
            userEvent.click(await screen.findByText(/AddFav/i));
        });
    });
});
