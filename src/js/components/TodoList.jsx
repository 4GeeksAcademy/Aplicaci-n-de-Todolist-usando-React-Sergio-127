import React from "react";

const TodoList = ({ listOfTodos, deleteTask }) => {
    return (
        <ul className="list-group">
            
                {listOfTodos.map((task, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between task-item">
                        {task}
                        <span
                            className="delete-icon"
                            onClick={() => deleteTask(index)}
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