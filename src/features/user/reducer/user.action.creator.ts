import { createAction } from "@reduxjs/toolkit";
import { Games } from "../../game/models/games";
import { User } from "../models/user";
import { actionTypes } from "./user.action.types";

export const startLoginActionCreator = createAction<void>(
    actionTypes.startLogin
);
export const loginActionCreator = createAction<{ user: User; token: string }>(
    actionTypes.login
);
export const logoutActionCreator = createAction<void>(actionTypes.logout);
export const addFavActionCreator = createAction<Games>(actionTypes.addFav);
export const deleteFavActionCreator = createAction<Games>(
    actionTypes.deleteFav
);
export const updateActionCreator = createAction<User>(actionTypes.update);
