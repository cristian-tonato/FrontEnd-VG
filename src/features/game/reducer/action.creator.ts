import { createAction } from "@reduxjs/toolkit";
import { Games } from "../models/games";
import { actionTypes } from "./action.types";

export const loadActionCreator = createAction<Array<Games>>(actionTypes.load);
export const addActionCreator = createAction<Games>(actionTypes.add);
export const updateActionCreator = createAction<Games>(actionTypes.update);
export const deleteActionCretaor = createAction<Games>(actionTypes.delete);
