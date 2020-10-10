import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

const url = "https://jsonplaceholder.typicode.com/todos";

export interface TODO {
	id: number;
	title: string;
	completed: boolean;
}

//featch
export interface FetchTodoAction {
	type: ActionTypes.fetchTodo;
	payload: TODO[];
}

export const fetchTodos = () => {
	return async (dispatch: Dispatch) => {
		const response = await axios.get<TODO[]>(url);
		dispatch<FetchTodoAction>({
			type: ActionTypes.fetchTodo,
			payload: response.data,
		});
	};
};

//delete
export interface DeleteTodoActionInterface {
	type: ActionTypes.deleteTodo;
	payload: number;
}

export const deleteTodoAction = (id: number): DeleteTodoActionInterface => {
	return {
		type: ActionTypes.deleteTodo,
		payload: id,
	};
};
