import { createReducer } from '@reduxjs/toolkit';
import { Games } from '../models/games';
import * as ac from './action.creator';

const initialState: Array<Games> = [];

export const gameReducer = createReducer(initialState, (builder) => {
    builder.addCase(ac.loadActionCreator, (_state, action) => action.payload);

    // builder.addCase(ac.addActionCreator, (state, action) => [
    //     ...state,
    //     action.payload,
    // ]);
    // builder.addCase(ac.updateActionCreator, (state, action) =>
    //     state.map((item) =>
    //         item.id === action.payload.id ? action.payload : item
    //     )
    // );
    // builder.addCase(ac.deleteActionCretaor, (state, action) =>
    //     state.filter((item) => item.id !== action.payload.id)
    // );
    builder.addDefaultCase((state) => state);
});
