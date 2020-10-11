export interface TODO {
	id: number;
	title: string;
	completed: boolean;
}
export interface StoreState {
	todo: TODO[];
}
export interface EditToDo {
	id: number;
}
