import React, { Component } from "react";
import { TODO, fetchTodos, deleteTodo } from "./actions";
import { StoreState } from "./reducer";
import { connect } from "react-redux";

interface TodoProps {
	todo: TODO[];
	fetchTodos: Function;
	deleteTodo: typeof deleteTodo;
}
interface AppState {
	loading: boolean;
}
class TodoList extends Component<TodoProps, AppState> {
	constructor(props: TodoProps) {
		super(props);
		this.state = {
			loading: false,
		};
	}
	componentDidMount() {}
	componentDidUpdate(prevProps: TodoProps): void {
		if (!prevProps.todo.length && this.props.todo.length) {
			this.setState({
				loading: false,
			});
		}
	}
	onBtnClick = (): void => {
		this.props.fetchTodos();
		this.setState({
			loading: true,
		});
	};
	removeTodo = (id: number): void => {
		this.props.deleteTodo(id);
	};

	renderList(): JSX.Element[] {
		return this.props.todo.map((todo: TODO) => {
			return (
				<div key={todo.id} onClick={() => this.removeTodo(todo.id)}>
					{todo.title}
				</div>
			);
		});
	}

	render() {
		return (
			<div>
				<button onClick={this.onBtnClick}>Fetch</button>
				{this.state.loading ? "Loading" : null}
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
export default connect(mapStateToProps, { fetchTodos, deleteTodo })(TodoList);
