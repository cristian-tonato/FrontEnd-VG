import { render, screen } from '@testing-library/react';

import { MemoryRouter as Router } from 'react-router-dom';

import { User } from '../../../user/models/user';

import '@testing-library/jest-dom';
import { GamesList } from './games.list';

describe('Given the GamesList component', () => {
    describe('When we render the component', () => {
        test('then it should display the Games list', () => {
            const mockGame = [
                {
                    id: '6389bb90ed3e6a5b94faa5a9',
                    title: 'SuperMario',
                    description: 'xxxxxxxx',
                    gameUrl: '',
                    images: '',
                    creator: 'Pepe',
                    userFav: "{ id: '1236547896644' } as User",
                    genre: 'Action',
                },
            ];
            render(
                <>
                    <Router>
                        <GamesList item={mockGame}></GamesList>
                    </Router>
                </>
            );
            const element = screen.getByText(/SuperMario/i);
            expect(element).toBeInTheDocument();
        });
    });
});
