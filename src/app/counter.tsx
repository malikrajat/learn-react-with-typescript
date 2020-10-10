import React, { Component } from "react";

interface CounterState {
	count: number;
}

interface CounterProps {}
class Counter extends Component<CounterProps, CounterState> {
	// if you defined component approach and use construction path then define interface with state and props pass to component
	constructor(props: CounterState) {
		super(props);
		this.state = {
			count: 0,
		};
	}
	onIncrement = (): void => {
		this.setState({ count: this.state.count + 1 });
	};
	onDecrement = (): void => {
		this.setState({ count: this.state.count - 1 });
	};
	render() {
		return (
			<div>
				<div>{this.state.count}</div>
				<button onClick={this.onIncrement}>Increment</button>
				<button onClick={this.onDecrement}>Decrement</button>
			</div>
		);
	}
}

export default Counter;
