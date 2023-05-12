import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (input) {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  return (
    <div>
      <h1>To-Do List</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Add a to-do"
      />

      <button onClick={handleAddTodo}>Add</button>

      {todos.map((todo, index) => (
        <div key={index}>
          {todo}
        </div>
      ))}
    </div>
  );
}
