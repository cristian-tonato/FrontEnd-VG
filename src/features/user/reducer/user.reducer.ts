import { createReducer } from "@reduxjs/toolkit";
import { User } from "../models/user";
import * as ac from "./user.action.creator";

const initialState: {
    user: User | null;
    isLogged: boolean;
    isLogging: boolean;
    token: string | null;
} = {
    user: null,
    isLogged: false,
    isLogging: false,
    token: null,
};

export const userReducer = createReducer(initialState, (builder) => {
    builder.addCase(ac.startLoginActionCreator, (state, _action) => ({
        ...state,
        isLogged: false,
        isLogging: true,
        user: null,
        token: null,
    }));
    builder.addCase(ac.loginActionCreator, (state, action) => ({
        ...state,
        isLogged: true,
        user: action.payload.user,
        isLogging: false,
        token: action.payload.token,
    }));
    builder.addCase(ac.logoutActionCreator, (state, _action) => ({
        ...state,
        isLoggin: false,
        isLogged: false,
        user: null,
        token: null,
    }));
    builder.addCase(ac.addFavActionCreator, (state, action) => {
        return {
            ...state,
            user: {
                ...state.user,
                favorites: [...(state.user as User).favorites, action.payload],
            } as User,
        };
    });
    builder.addCase(ac.deleteFavActionCreator, (state, action) => ({
        ...state,
        user: {
            ...state.user,
            favorites: (state.user as User).favorites.filter(
                (games) => games.id !== action.payload.id
            ),
        } as User,
    }));

    builder.addDefaultCase((state) => state);
});
