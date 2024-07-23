import React, { useState, useCallback } from 'react';

const Usecallback = () => {
  const [count, setCount] = useState(0);

  // useCallback to memoize the increment function
  const increment = useCallback(() => {
    console.log('Incrementing count...');
    setCount(count + 1);
  }, [count]); // Dependency array: count is the dependency
  console.log('ExampleComponent rendered.');
  return (
    <div>
        <h1>Usecallback component</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <hr/>
    </div>
  );
};

export default Usecallback;
