import { User } from "../models/user";
import { actionTypes } from "./user.action.types";
import { userReducer } from "./user.reducer";

describe("Given the UserReduce()", () => {
    const mock = {
        id: "121515a1a515",
        name: "Pepe",
        lastName: "perez",
        nickName: "pepebot",
        email: "pepeBot@gmil.com",
        password: "123456",
        favorites: [],
    };

    let action: { type: string; payload: unknown };
    let state: {
        isLogged: boolean;
        isLogging: boolean;
        user: User | null;
        token: string | null;
    };

    describe("When the action is startLoginActionCreator", () => {
        test("the return status should include isLogging: true", () => {
            action = {
                type: actionTypes.startLogin,
                payload: {
                    isLogging: true,
                    isLogged: false,
                    user: null,
                    token: null,
                },
            };

            const result = userReducer(state, action);
            expect(result).toEqual(action.payload);
        });
    });

    describe("When the action isLogout", () => {
        test("the return status should be initialState", () => {
            action = {
                type: actionTypes.logout,
                payload: {
                    isLogging: false,
                    isLogged: false,
                    user: null,
                    token: null,
                },
            };
            state = {
                ...state,
            };
            const result = userReducer(state, action);
            expect(result).toEqual(action.payload);
        });
    });
    describe("When the action isLogin", () => {
        test("The state should be user and token", () => {
            action = {
                type: actionTypes.login,
                payload: {
                    isLogging: false,
                    isLogged: true,
                    token: "token",
                    user: mock,
                },
            };
            state = {
                ...state,
            };
            const result = userReducer(state, action);
            expect(result).toEqual(action.payload);
        });
    });
    describe("When the action is Favorite", () => {
        test("The state should to update the action payload", () => {
            action = {
                type: actionTypes.addFav,
                payload: {
                    user: { ...mock, favorites: ["favorites Games"] },
                },
            };
            state = {
                ...state,
            };
            const result = userReducer(state, action);
            expect(result).toEqual({ user: action.payload });
        });
    });
    describe("When the action is deleteFavoites", () => {
        test("The state should to update the action payload", () => {
            action = {
                type: actionTypes.deleteFav,
                payload: {
                    user: { ...mock, favGames: [] },
                },
            };
            state = {
                ...state,
            };
            const result = userReducer(state, action);
            expect(result).toEqual({ user: action.payload });
        });
    });
});
