// We're importing React and a hook called useState from the 'react' package.
// React is the library we're using to build our app. useState is a "hook" that
// allows us to add state to our functional components.
import React, { useState } from 'react';

// Here we're importing the CSS for our app.
import './style.css';

// This is the component for our entire app.
export default function App() {
  // We're creating two pieces of state: 'todos' and 'input'.
  // 'todos' is an array that will store each to-do item.
  // 'input' is a string that will store the current value of the to-do input field.
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // This function will be called when the Add button is clicked.
  // It will add the current value of 'input' to the 'todos' array,
  // then clear 'input'.
  const handleAddTodo = () => {
    if (input) {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  // This is the JSX that our component will render.
  return (
    <div>
      <h1>To-Do List</h1>

      {/* This is an input field. Its value is tied to the 'input' state, 
      and every time its value changes (i.e., every time the user types something),
      it will update the 'input' state. */}
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Add a to-do"
      />

      {/* This is a button that, when clicked, will call 'handleAddTodo'. */}
      <button onClick={handleAddTodo}>Add</button>

      {/* This will map over the 'todos' array and create a new <div> for each item.
      Each <div> will contain the text of the to-do. */}
      {todos.map((todo, index) => (
        <div key={index}>
          {todo}
        </div>
      ))}
    </div>
  );
}
