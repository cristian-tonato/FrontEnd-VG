import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { App } from './app';
import { Provider } from 'react-redux';
import { appStore } from '../../store/store';

describe('Given App component', () => {
    beforeEach(() => {
        // eslint-disable-next-line testing-library/no-render-in-setup
        render(
            <Provider store={appStore}>
                <Router>
                    <App />
                </Router>
            </Provider>
        );
    });
    test('renders all-games', () => {
        const linkElement = screen.getByText(/Home/i);
        expect(linkElement).toBeInTheDocument();
    });
});
