import React, { Component } from "react";
import { TODO, fetchTodos } from "./actions";
import { StoreState } from "./reducer";
import { connect } from "react-redux";

interface TodoProps {
	todo: TODO[];
	fetchTodos(): any;
}
class TodoList extends Component<TodoProps> {
	componentDidMount() {}
	onBtnClick = (): void => {
		this.props.fetchTodos();
	};

	renderList(): JSX.Element[] {
		return this.props.todo.map((todo: TODO) => {
			return <div key={todo.id}>{todo.title}</div>;
		});
	}

	render() {
		return (
			<div>
				<button onClick={this.onBtnClick}>Fetch</button>
				{this.renderList()}
			</div>
		);
	}
}
const mapStateToProps = ({ todo }: StoreState): { todo: TODO[] } => {
	return {
		todo,
	};
};
export default connect(mapStateToProps, { fetchTodos })(TodoList);
