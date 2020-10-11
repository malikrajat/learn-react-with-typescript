import { combineReducers } from "redux";
import { StoreState } from "../interfaces/todoInterface";
import todoReducer from "../slices/todoSlice";

const rootReducer = combineReducers<StoreState>({
	todo: todoReducer,
});

export default rootReducer;
