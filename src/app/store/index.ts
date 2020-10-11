import rootReducer from "./reducers/rootReducer";
import { configureStore, Action } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";

const store = configureStore({
	reducer: rootReducer,
	devTools: process.env.NODE_ENV !== "production",
	// middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
});

export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, AppState, null, Action<string>>;
export default store;
