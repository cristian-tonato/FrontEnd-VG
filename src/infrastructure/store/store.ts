import { gameReducer } from "./../../features/game/reducer/reducer";
import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../../features/user/reducer/user.reducer";

export const appStore = configureStore({
    reducer: {
        games: gameReducer,
        user: userReducer,
    },
});

//export type rootStore = typeof appStore;
export type rootStore = typeof appStore.dispatch;
export type rootState = ReturnType<typeof appStore.getState>;
