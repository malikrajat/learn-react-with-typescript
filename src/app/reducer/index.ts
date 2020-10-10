import { combineReducers } from "redux";
import { TODO } from "../actions";
import { todoReducer } from "./todos";

export interface StoreState {
	todo: TODO[];
}

export const reducers = combineReducers<StoreState>({
	todo: todoReducer,
});
