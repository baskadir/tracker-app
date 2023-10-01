import pathsApi from "../api/pathsApi";
import React, { createContext, useContext, useReducer } from "react";
import type { IUser } from "../types/user";
import { useRouter } from "expo-router";
import {
  AuthActionType,
  IAuthAction,
  IAuthContextState,
  IAuthState,
} from "./context.types";
import { getFromStorage, removeFromStorage, saveToStorage } from "../helpers/storage";
import Constants from "../constants";
import { AxiosResponse } from "axios";

const initialValues: IAuthState = {
  token: null,
  errorMessage: "",
};

const AuthContext = createContext<IAuthContextState>({
  auth: initialValues,
  signUp: () => {},
  signIn: () => {},
  signOut: () => {},
  tryLocalSignIn: () => {},
  clearErrorMessage: () => {},
});

const authReducer = (state: IAuthState, action: IAuthAction) => {
  switch (action.type) {
    case AuthActionType.USER_AUTH:
      return { errorMessage: "", token: action.payload };
    case AuthActionType.ADD_ERROR:
      return { ...state, errorMessage: action.payload };
    case AuthActionType.SIGN_OUT:
      return { token: null, errorMessage: action.payload };
    case AuthActionType.CLEAR_ERROR_MESSAGE:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialValues);
  const router = useRouter();

  const signUp = async (userRequest: IUser) => {
    try {
      const response: AxiosResponse<{token: string}> = await pathsApi.post("/sign-up", userRequest);
      await saveToStorage(Constants.STORAGE_AUTH_KEY, response.data.token);
      dispatch({
        type: AuthActionType.USER_AUTH,
        payload: response.data.token,
      });
      router.push("/paths/list");
    } catch (error) {
      dispatch({
        type: AuthActionType.ADD_ERROR,
        payload: "Something went wrong with sign up",
      });
    }
  };

  const signIn = async (userRequest: IUser) => {
    try {
      const response: AxiosResponse<{token: string}> = await pathsApi.post("/sign-in", userRequest);
      await saveToStorage(Constants.STORAGE_AUTH_KEY, response.data.token);
      dispatch({
        type: AuthActionType.USER_AUTH,
        payload: response.data.token,
      });
      router.push("/paths/list");
    } catch (error) {
      dispatch({
        type: AuthActionType.ADD_ERROR,
        payload: "Something went wrong with sign in",
      });
    }
  };

  const signOut = async () => {
    await removeFromStorage(Constants.STORAGE_AUTH_KEY);
    dispatch({ type: AuthActionType.SIGN_OUT, payload: "" });
    router.push("/sign-up");
  };

  const tryLocalSignIn = async () => {
    const token = await getFromStorage(Constants.STORAGE_AUTH_KEY);
    if (token) {
      dispatch({ type: AuthActionType.USER_AUTH, payload: token });
      router.push("/paths/list");
    } else {
      router.push("/sign-up");
    }
  };

  const clearErrorMessage = () => {
    dispatch({ type: AuthActionType.CLEAR_ERROR_MESSAGE, payload: "" });
  };

  return (
    <AuthContext.Provider
      value={{
        auth: state,
        signUp,
        signIn,
        signOut,
        tryLocalSignIn,
        clearErrorMessage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
