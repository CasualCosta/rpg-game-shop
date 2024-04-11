import React, {createContext} from "react";
import { initialState, reducerState } from "./reducer";


export const AppContext = createContext<{state: reducerState, dispatch: React.Dispatch<any>}>({state: initialState, dispatch: () => null})