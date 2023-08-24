import React from "react";

const Todo = ({ task, removeTodo }) => {
  const handleRemove = () => {
    removeTodo(task);
  };

  return (
    <div>
      {task}
      <button onClick={handleRemove}>X</button>
    </div>
  );
};

export default Todo;
