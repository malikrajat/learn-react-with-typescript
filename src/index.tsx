import React from "react";
import ReactDOM from "react-dom";
import App from "./app/app";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { reducers } from "./app/reducer";
const store = createStore(reducers, applyMiddleware(thunk));
const Root = () => {
	return (
		<Provider store={store}>
			<App color="red" />
		</Provider>
	);
};
ReactDOM.render(<Root />, document.querySelector("#root"));
