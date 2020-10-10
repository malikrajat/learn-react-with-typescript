import React from "react";
import ReactDOM from "react-dom";
import App from "./app/app";
import Counter from "./app/counter";
import CounterFC from "./app/CounterFC";

const Root = () => {
	return (
		<>
			<App color="red" />
			<Counter />
			<CounterFC color="blue" />
		</>
	);
};
ReactDOM.render(<Root />, document.querySelector("#root"));
