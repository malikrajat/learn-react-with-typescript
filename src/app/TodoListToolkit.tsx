import React, { Component } from "react";
import { loadTodo, deleteTodo } from "./store/slices/todoSlice";
import { TODO, StoreState } from "./store/interfaces/todoInterface";
import { connect } from "react-redux";

interface TodoProps {
	todo: TODO[];
	loadTodo: Function;
	deleteTodo: Function;
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
	componentDidUpdate(prevProps: TodoProps): void {
		if (!prevProps.todo.length && this.props.todo.length) {
			this.setState({
				loading: false,
			});
		}
	}
	onBtnClick = (): void => {
		this.props.loadTodo();
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
				<button onClick={this.onBtnClick}>Fetch (ToolKit)</button>
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
export default connect(mapStateToProps, { loadTodo, deleteTodo })(TodoList);
