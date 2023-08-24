import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos((prevtodos) => [...prevtodos, newTodo]);
  };

  const removeTodo = (task) => {
    setTodos((prevtodos) => prevtodos.filter((todo) => todo !== task));
  };

  return (
    <div>
      <NewTodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        <Todo key={index} task={todo} removeTodo={removeTodo} />
      ))}
    </div>
  );
};

export default TodoList;
