import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../../store/store';
import { HomePage } from './home.page';

describe('Given Home component', () => {
    describe('When we render the component', () => {
        test('Then it should display the title', () => {
            render(
                <>
                    <Provider store={appStore}>
                        <Router>
                            <HomePage />
                        </Router>
                    </Provider>
                </>
            );

            const element = screen.getByText(/Games/);
            expect(element).toBeInTheDocument();
        });
    });
});
