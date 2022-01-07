import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import Reducer, { ActionType, ReduxState } from "./reducer";


export const store = createStore( Reducer, applyMiddleware(thunk) )

