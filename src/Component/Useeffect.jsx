import React, { useState, useEffect } from 'react';

function ConsoleEffectExample() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // Effect without dependency array (runs after every render)
  useEffect(() => {
    console.log('Effect without dependency array: Runs after every render');
  });

  // Effect with an empty dependency array (runs once after initial render)
  useEffect(() => {
    console.log('Effect with empty dependency array: Runs once after initial render');
  }, []);

  // Effect with 'count' in dependency array (runs when 'count' changes)
  useEffect(() => {
    console.log(`Effect with 'count' in dependency array: Runs when 'count' changes to ${count}`);
  }, [count]);

  return (
    <div>
      <h1>Console Effect Example</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <br /><br />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p>Text: {text}</p>
    </div>
  );
}

export default ConsoleEffectExample;
