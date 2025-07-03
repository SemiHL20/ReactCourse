import { useState } from 'react';

// This is a simple counter component that allows incrementing and decrementing a count value.
// It uses React's useState hook to manage the count state.
// The component renders two buttons for incrementing and decrementing the count, and displays the current
// count value in a Box.
const Counter = () => {

  const [count, setCount] = useState(1);
  
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      <input type='text' value={count} size={2} style={{textAlign: 'center'}}></input>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Counter;