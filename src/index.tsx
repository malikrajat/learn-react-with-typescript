import { count } from "console";
import React from "react";
import ReactDOM from "react-dom";
import App from "./app/app";
import Counter from "./app/counter";

const Root = () => {
	return (
		<>
			<App color="red" />
			<Counter />
		</>
	);
};
ReactDOM.render(<Root />, document.querySelector("#root"));
