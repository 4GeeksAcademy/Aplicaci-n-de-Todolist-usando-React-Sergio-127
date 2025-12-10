import React, { useState } from "react";

import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

//create your first component
const Home = () => {

	const [inputValue, setInputValue] = useState('');
	const [todos, setTodos] = useState([]);


	const addTodo = (e) => {
		if (e.key === "Enter" && inputValue.trim() !== "") {
			setTodos([...todos, inputValue]);
			setInputValue("");
		}
	};

	return (
		<div className="container">
			<h1>todos</h1>
			<TodoInput
				value={inputValue}
				updateValue={setInputValue}
				handleKeyDown={addTodo}
			/>

			<TodoList listOfTodos={todos}/>
		</div>
	);
};

export default Home;