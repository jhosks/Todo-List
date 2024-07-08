import React, { useState } from "react";
import Todo from "./Todo";
import  TodoForm  from "./TodoForm";

import { v4 as uuidv4 } from "uuid";

function TodoWrapper() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), tarefa: todo},
    ]);
  };

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  return (
    <div className="TodoWrapper">
      <h1>Lista de Tarefas</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          tarefa={todo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  )
}

export default TodoWrapper;