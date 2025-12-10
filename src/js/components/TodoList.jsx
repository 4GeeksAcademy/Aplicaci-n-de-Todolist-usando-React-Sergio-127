import React from "react";

const TodoList = ({listOfTodos}) => {
    return (
        <ul className="list-group">
            {listOfTodos.map((task, index) => (
                <li key={index} className="list-group-item">
                    {task}
                </li>
            )
        )}
        </ul>
    );
};

export default TodoList;