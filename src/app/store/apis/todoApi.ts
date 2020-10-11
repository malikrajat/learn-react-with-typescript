import axios from "axios";
import { TODO } from "../interfaces/todoInterface";

const baseUrl = "https://jsonplaceholder.typicode.com/todos";

export async function fetchTodo(): Promise<TODO[]> {
	const response = await axios.get<TODO[]>(baseUrl, {
		headers: {
			"Access-Control-Allow-Origin": "*",
		},
	});
	return response.data;
}
