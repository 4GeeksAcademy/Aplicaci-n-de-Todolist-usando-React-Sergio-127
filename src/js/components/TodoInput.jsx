import React from "react";

const TodoInput = ({value, updateValue, handleKeyDown}) => {
    return (
        <input
            type="text"
            className="form-control"
            value={value}
            onChange={(e) => updateValue(e.target.value)} 
            onKeyDown={handleKeyDown}
        />
    
    );
};

export default TodoInput;