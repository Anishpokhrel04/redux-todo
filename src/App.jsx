import React from "react";
import { Provider } from "react-redux";
import store from "./redux/Store";
import TodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList"
const App = () => {
  return (
    <Provider store={store}>
      <TodoForm />
      <TodoList />
    </Provider>
  );
};

export default App;
