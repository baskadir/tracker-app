import React, { createContext, useContext, useReducer } from "react";
import {
  IPathAction,
  IPathContextState,
  IPathState,
  PathActionType,
} from "./context.types";
import pathsApi from "../api/pathsApi";
import { IPath } from "../types/path";
import { AxiosResponse } from "axios";

const initialValues: IPathState = [];

const PathContext = createContext<IPathContextState>({
    path: initialValues,
    createPath: () => {},
    fetchPaths: () => {}
});

const pathReducer = (state: IPathState, action: IPathAction) => {
  switch (action.type) {
    case PathActionType.FETCH_PATHS:
        return action.payload;
    default:
      return state;
  }
};

export const usePath = () => useContext(PathContext);

export const PathProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(pathReducer, initialValues);

  const fetchPaths = async () => {
    const response: AxiosResponse<IPath[]> = await pathsApi.get("/paths");
    dispatch({ type: PathActionType.FETCH_PATHS, payload: response.data });
  };

  const createPath = async (newPath: IPath) => {
    try {
        await pathsApi.post("/paths", newPath);        
    } catch (error) {
        console.log(error);        
    }
  };

  return (
    <PathContext.Provider value={{ path: state, fetchPaths, createPath }}>
      {children}
    </PathContext.Provider>
  );
};
