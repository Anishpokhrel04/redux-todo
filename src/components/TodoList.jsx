import React from "react";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const firstTodo = todos[0];

  return <ul>{firstTodo && <li key={firstTodo.id}>{firstTodo.text}</li>}</ul>;
};

export default TodoList;
