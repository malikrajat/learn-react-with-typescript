import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTodo } from "../apis/todoApi";
import { TODO } from "../interfaces/todoInterface";

export const getTodoLists = createAsyncThunk(
	"todo/getTodoLists",
	async (endpoint, { getState }) => {
		const response = await fetchTodo();
		return response;
	}
);

const initialState: TODO[] = [];
const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		// getTodoList: (state, action: PayloadAction<TODO[]>) => {
		// 	return action.payload;
		// },
		addTodo: (state, action: PayloadAction<TODO>) => {
			state.push(action.payload);
		},
		deleteTodo: (state, { payload }) => {
			return state.filter((todo: TODO) => todo.id !== payload);
		},
	},
	extraReducers: {
		[getTodoLists.fulfilled.toString()]: (
			state,
			action: PayloadAction<TODO[]>
		) => {
			return action.payload;
		},
		[getTodoLists.rejected.toString()]: (
			state,
			action: PayloadAction<string>
		) => {},
		[getTodoLists.pending.toString()]: (
			state,
			action: PayloadAction<string>
		) => {},
	},
});

// you need this code to be export if you are calling it from html directoly
export const { deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
