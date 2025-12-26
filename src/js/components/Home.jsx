import React, { useEffect, useState } from "react";

import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const Home = () => {

	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);
	const usuario = "sergio";
	const urlBase = "https://playground.4geeks.com/todo";

	useEffect(() => {

		fetch(`${urlBase}/users/${usuario}`)
			.then(response => {
				if (response.ok) {
					return response.json();
				}
				if (response.status === 404) {
					console.log("El usuario no existe. Creando uno nuevo... 🏗️");


					fetch(`${urlBase}/users/${usuario}`, {
						method: "POST",
						headers: { "Content-Type": "application/json" }
					})
						.then(response => response.json())
						.then(data => console.log("Usuario creado:", data));
					// ---------------------
				}
			})
			.then(data => {
				if (data) {
					console.log("Usuario encontrado. Cargando tareas...", data);
					setTodos(data.todos); // Actualizamos el estado
				}
			})
			.catch(error => console.error("Error en la red o servidor:", error));

	}, []);

	const addTodo = (e) => {
		if (e.key === "Enter" && inputValue.trim() !== "") {


			const body = {
				label: inputValue,
				is_done: false
			};


			fetch(`${urlBase}/todos/${usuario}`, {
				method: "POST",
				body: JSON.stringify(body),
				headers: {
					"Content-Type": "application/json"
				}
			})
				.then(resp => {
					if (resp.ok) {
						return resp.json();
					}
				})
				.then(data => {

					console.log("Tarea guardada:", data);

					setTodos([...todos, data]);
					setInputValue("");
				})
				.catch(error => console.log("Error al agregar tarea:", error));
		}
	};


	const deleteTodo = (id) => {


		fetch(`${urlBase}/todos/${id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => {
				if (resp.ok) {
					console.log("Tarea eliminada del servidor");


					const newTodos = todos.filter(task => task.id !== id);
					setTodos(newTodos);
				}
			})
			.catch(error => console.log("Error al eliminar:", error));
	};

	const deleteAll = () => {
		todos.forEach(task => {
			fetch(`${urlBase}/todos/${task.id}`, {
				method: "DELETE",
				headers: { "Content-Type": "application/json" }
			})
				.then(resp => {
					if (resp.ok) {
						console.log(`Tarea ${task.id} eliminada`);
					}
				});
		});

		setTodos([]);
	};

	return (
		<div className="container">
			<h1>todos</h1>
			<TodoInput
				value={inputValue}
				updateValue={setInputValue}
				handleKeyDown={addTodo}

				placeholder={todos.length === 0 ? "No hay tareas, añadir tareas" : ""}
			/>




			<TodoList
				listOfTodos={todos}
				deleteTask={deleteTodo}
			/>

			<button
				className="btn btn-danger mt-3"
				onClick={deleteAll}
			>
				Limpiar todas las tareas
			</button>
		</div>
	);
};

export default Home;