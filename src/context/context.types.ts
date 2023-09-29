import { IUser } from "../types/user";

export enum AuthActionType {
    USER_AUTH = 'USER_AUTH',
    ADD_ERROR = 'ADD_ERROR',
    SIGN_OUT = "SIGN_OUT",
    CLEAR_ERROR_MESSAGE = "CLEAR_ERROR_MESSAGE"
}

export interface IAuthAction {
    type: AuthActionType,
    payload: string
}

export interface IAuthState {
    token: string | null;
    errorMessage: string;
};

export interface IAuthContextState {
    auth: IAuthState;
    signUp: (userReq: IUser) => void;
    signIn: (userReq: IUser) => void;
    signOut: () => void;
    tryLocalSignIn: () => void;
    clearErrorMessage: () => void;
}