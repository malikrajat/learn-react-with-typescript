import React from "react";
import ReactDOM from "react-dom";
import App from "./app/app";
import { Provider } from "react-redux";
import store from "./app/store";
const Root = () => {
	return (
		<Provider store={store}>
			<App color="red" />
		</Provider>
	);
};
ReactDOM.render(<Root />, document.querySelector("#root"));
