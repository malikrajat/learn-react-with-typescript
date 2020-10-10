import { DeleteTodoActionInterface, FetchTodoAction } from ".";

export enum ActionTypes {
	fetchTodo,
	deleteTodo,
}

export type Action = FetchTodoAction | DeleteTodoActionInterface;
