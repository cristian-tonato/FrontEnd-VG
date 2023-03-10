import { render, screen } from '@testing-library/react';

import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../../store/store';
import { AccountPage } from './account';

describe('Given Account component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(
                <>
                    <Provider store={appStore}>
                        <Router>
                            <AccountPage></AccountPage>
                        </Router>
                    </Provider>
                </>
            );
        });
        test('Then it should display the login form', () => {
            const element = screen.getByText(/Sign in/i);
            expect(element).toBeInTheDocument();
        });
    });
});
