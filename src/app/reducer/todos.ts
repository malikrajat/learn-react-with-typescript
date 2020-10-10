import { FetchTodoAction, TODO } from "../actions";
import { ActionTypes } from "../actions/types";

export const todoReducer = (state: TODO[] = [], action: FetchTodoAction) => {
	switch (action.type) {
		case ActionTypes.fetchTodo:
			return action.payload;
			break;

		default:
			return state;
			break;
	}
};
