import React, { Component } from "react";
import Counter from "./counter";
import CounterFC from "./CounterFC";
// if a component is expecting any kind of props from parent, that pros must have been defined in interface for class base component
// if you want any props as options then put "?" in front of that key of interface
interface AppProps {
	color: string;
}

export class app extends Component<AppProps> {
	render() {
		return (
			<>
				<div>Hello from app {this.props.color}</div>
				<Counter />
				<CounterFC color="blue" />
			</>
		);
	}
}

export default app;
