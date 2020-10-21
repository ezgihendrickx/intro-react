import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_KEY = "todoApp.todos";

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (setTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function HandleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
    });
    todoNameRef.current.value = null;
  }
  function HandleClearTodos() {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  }
  return (
    <>
      <div class="text-4xl pt-10 text-center text-blue-900 text-center font-bold  bg-gray-300  h-48 font-mono">
        <h1>
          <strong>My first Todo App</strong>
        </h1>
      </div>

      <div class="grid   xl:grid-cols-3 content-center  bg-gray-500  h-48 font-mono ">
        <input
          ref={todoNameRef}
          type="text"
          class=" mt-10 max-w-md mx-12  py-2 px-4  text-center  placeholder-gray-500"
          placeholder="Type a new todo"
        />

        <button
          class="font-mono mt-5 max-w-md mx-12 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          onClick={HandleAddTodo}
        >
          Add Todo
        </button>

        <button
          class="font-mono mt-5 max-w-md mx-12 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          onClick={HandleClearTodos}
        >
          Clear Completed Todos
        </button>

        <div class="font-mono font-semibold mt-6 text-white text-center font-bold mr-24 ">
          {todos.filter((todo) => !todo.complete).length} left to do{" "}
        </div>
      </div>
      <hr></hr>
      <div class=" font-mono px-20 py-5 text-blue   bg-gray-300  h-48">
        <h1 class="text-2xl text-blue-900 font-bold">
          <strong>Todos</strong>
        </h1>
        <TodoList todos={todos} toggleTodo={toggleTodo} />
      </div>
    </>
  );
}

export default App;
