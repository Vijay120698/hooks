import React, { useState, useMemo } from 'react';

function UseMemo() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  const expensiveComputation = (num) => {
    console.log('Computing...');
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += num;
    }
    return result;
  };

  const computedValue = useMemo(() => expensiveComputation(count), [count]);

  return (
    <div>
      <h1>Expensive Computation Example</h1>
      <p>Count: {count}</p>
      <p>Computed Value: {computedValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <br />
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something..."
      />
      <p>Input: {input}</p>
    </div>
  );
}

export default UseMemo;
