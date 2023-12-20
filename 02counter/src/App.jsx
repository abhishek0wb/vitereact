import { useState, useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);

  function increment() {
    setCounter((p) => {
      return p < 20 ? p + 1 : p;
    });
  }
  function decrement() {
    setCounter((p) => {
      return p > 0 ? p - 1 : p;
    });
  }

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}

export default App;