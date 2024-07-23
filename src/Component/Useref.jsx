import React, { useRef } from 'react';

const Userefexample = () => {
const countRef = useRef(0);

const increment = () => {
  countRef.current += 1;
  console.log('Current count:', countRef.current);

};

return (
  <div>
    <hr/>
    <h1>Useref component</h1>
    <p >Count: {countRef.current}</p>
    <button onClick={increment}>Increment</button>
    <hr/>
  </div>
);
};

export default Userefexample;
