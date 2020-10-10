import { ActionTypes, Action } from "../actions/types";
import { TODO } from "../actions/index";

export const todoReducer = (state: TODO[] = [], action: Action) => {
	switch (action.type) {
		case ActionTypes.fetchTodo:
			return action.payload;

		case ActionTypes.deleteTodo:
			return state.filter((todo: TODO) => todo.id !== action.payload);

		default:
			return state;
	}
};
