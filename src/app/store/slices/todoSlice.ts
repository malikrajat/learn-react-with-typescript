import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, AppThunk, AppState } from "../";
import { fetchTodo } from "../apis/todoApi";
import { TODO, EditToDo } from "../interfaces/todoInterface";

const initialState: TODO[] = [];
const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		getTodoList: (state, action: PayloadAction<TODO[]>) => {
			return action.payload;
		},
		addTodo: (state, action: PayloadAction<TODO>) => {
			state.push(action.payload);
		},
		deleteTodo: (state, { payload }) => {
			console.log(payload);

			return state.filter((todo: TODO) => todo.id !== payload);
		},
	},
});
// you need this code to be export if you are calling it from html directoly
export const { deleteTodo } = todoSlice.actions;

export const loadTodo = (): AppThunk => async (
	dispatch: AppDispatch,
	getState: () => AppState
) => {
	const todoResponse = await fetchTodo();
	dispatch(todoSlice.actions.getTodoList(todoResponse));
};

export default todoSlice.reducer;
