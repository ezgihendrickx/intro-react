import React from "react";

export default function Todo({ todo, toggleTodo }) {
  function handleTodoClick() {
    toggleTodo(todo.id);
  }

  return (
    <div>
      <label>
        <input
          class="mr-1"
          type="checkbox"
          checked={todo.complete}
          onChange={handleTodoClick}
        ></input>
        {todo.name}
      </label>
    </div>
  );
}
