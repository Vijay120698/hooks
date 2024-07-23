import React, { useState, useRef } from 'react';

const Useref_state = () => {
  // Using useState to manage the count that triggers re-renders
  const [count, setCount] = useState(0);

  // Using useRef to store a mutable value that persists across renders
  const countRef = useRef(0);

  const increment = () => {
    countRef.current += 1;
    setCount(countRef.current); // Update state with the current ref value
    console.log('Current count:', countRef.current);
  };

  return (
    <div>
        <br/>
        <h1>useref with usestate</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <hr/>
    </div>
  );
};

export default Useref_state;
