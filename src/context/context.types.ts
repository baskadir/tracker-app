import { IPath } from "../types/path";
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

export enum PathActionType {
    FETCH_PATHS = "FETCH_PATHS"
}

export interface IPathAction {
    type: string;
    payload: Array<IPath>
}

export type IPathState = Array<IPath>;

export interface IPathContextState {
    paths: IPathState;
    fetchPaths: () => void;
    createPath: (path: IPath) => void;
}