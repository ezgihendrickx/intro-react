import React from "react";
// import { Text, StyleSheet, View } from "react-native";
import Todo from "./Todo";

export default function TodoList({ todos, toggleTodo }) {
  return todos.map((todo) => {
    return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />;
  });
}

// const styles = StyleSheet.create({});
