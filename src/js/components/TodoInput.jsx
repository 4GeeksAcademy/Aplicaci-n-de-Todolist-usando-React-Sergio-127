import React from "react";

const TodoInput = ({value, updateValue, handleKeyDown, placeholder}) => {
    return (
        <input
            type="text"
            className="form-control"
            placeholder={placeholder}
            value={value}
            onChange={(e) => updateValue(e.target.value)} 
            onKeyDown={handleKeyDown}
        />
    
    );
};

export default TodoInput;