import { current } from '@reduxjs/toolkit';
import { renderHook, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import {
    mockAppStore,
    mockAppStore2,
    mockGame,
    mockGames2,
    mockUser,
    mockUser2,
} from '../../../infrastructure/mocks/mocks';
import { appStore } from '../../../infrastructure/store/store';
import { Games } from '../../game/models/games';
import { ProtoUser, User } from '../models/user';
import { UserRespository } from '../services/userRepository';
import { useUsers } from './useUser';

jest.mock('../services/userRepository');

describe('Given the hook useUsers()', () => {
    let result: {
        current: {
            users: {
                isLogged: boolean;
                isLogging: boolean;
                user: User | null;
                token: string | null;
            };
            handleLogin: (user: ProtoUser) => void;
            handleLogout: () => void;
            handleAddFav: (id: string) => void;
            handleDeleteFav: (games: Games) => void;
        };
    };

    describe('When we use the handleLogin(),', () => {
        beforeEach(() => {
            UserRespository.prototype.login = jest
                .fn()
                .mockResolvedValue(mockUser);
            UserRespository.prototype.addFav = jest
                .fn()
                .mockResolvedValue(mockGame);
            const wrapper = ({ children }: { children: JSX.Element }) => (
                <Provider store={appStore}>{children}</Provider>
            );
            ({ result } = renderHook(() => useUsers(), { wrapper }));
        });

        test('Then it should return mockUser and have been called', async () => {
            result.current.handleLogin({
                name: mockUser.name,
                password: mockUser.password,
            });
            expect(UserRespository.prototype.login).toHaveBeenCalled();
        });
    });

    describe('When we use the handleAddFav(),', () => {
        beforeEach(() => {
            UserRespository.prototype.login = jest
                .fn()
                .mockResolvedValue(mockUser);
            UserRespository.prototype.addFav = jest
                .fn()
                .mockResolvedValue(mockUser2);
            const wrapper = ({ children }: { children: JSX.Element }) => (
                <Provider store={mockAppStore}>{children}</Provider>
            );
            ({ result } = renderHook(() => useUsers(), { wrapper }));
        });
        test('Then it should return mockPlace and have been called', async () => {
            await result.current.handleAddFav(mockGames2.id);
            expect(UserRespository.prototype.addFav).toHaveBeenCalled();
            expect(mockAppStore.getState().user.user?.favorites[1]).toEqual(
                mockGames2
            );
        });
        test('Then if the game is already on favorites, it should throw an error', async () => {
            await UserRespository.prototype.addFav(mockGame.title);
            await expect(
                async () => await result.current.handleAddFav(mockGame.id)
            ).rejects.toThrow('Bad Request');
        });
    });

    describe('When we use the handleDeleteFav(),', () => {
        beforeEach(() => {
            UserRespository.prototype.login = jest
                .fn()
                .mockResolvedValue(mockUser);
            UserRespository.prototype.deleteFav = jest
                .fn()
                .mockResolvedValue(mockGames2);
            const wrapper = ({ children }: { children: JSX.Element }) => (
                <Provider store={mockAppStore2}>{children}</Provider>
            );
            ({ result } = renderHook(() => useUsers(), { wrapper }));
        });
        test('Then it should return mockPlace and have been called', async () => {
            await result.current.handleDeleteFav(mockGames2);
            expect(UserRespository.prototype.deleteFav).toHaveBeenCalled();
            expect(mockAppStore2.getState().user.user?.favorites).toEqual([
                mockGame,
            ]);
        });
    });

    describe('When we use the handleLogout(),', () => {
        let spyDispatch: jest.SpyInstance;

        beforeEach(() => {
            UserRespository.prototype.login = jest
                .fn()
                .mockResolvedValue(mockUser);
            const wrapper = ({ children }: { children: JSX.Element }) => (
                <Provider store={mockAppStore2}>{children}</Provider>
            );
            spyDispatch = jest.spyOn(mockAppStore2, 'dispatch');
            ({ result } = renderHook(() => useUsers(), { wrapper }));
        });

        test('Then it should return mockUser and have been called', async () => {
            await waitFor(() => {
                result.current.handleLogout();
            });
            expect(spyDispatch).toHaveBeenCalled();
        });
    });
});
