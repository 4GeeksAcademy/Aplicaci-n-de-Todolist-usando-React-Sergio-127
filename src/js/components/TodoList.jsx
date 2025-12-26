import React from "react";

const TodoList = ({ listOfTodos, deleteTask }) => {
    return (
        <ul className="list-group">
            
                {listOfTodos.map((task, index) => (
                    <li key={task.id} className="list-group-item d-flex justify-content-between task-item">
                        {task.label}
                        <span
                            className="delete-icon"
                            onClick={() => deleteTask(task.id)}
                            style={{ cursor: "pointer" }}

                        >
                            <i className="fas fa-trash-alt"></i>
                        </span>
                    </li>
                ))}
                
        </ul>
    );
};

export default TodoList;