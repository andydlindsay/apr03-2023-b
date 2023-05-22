import {useEffect, useState} from 'react';

const Timers = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('updating the document title');
    document.title = `current count is ${counter}`;
  }, [counter]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('inside the interval, the counter is', counter);
    }, 1500);

    const cleanup = () => {
      console.log('cleaning up');
      clearInterval(intervalId);
    };

    return cleanup;
  }, [counter]);

  return (
    <div>
      <h2>Timers component</h2>
      <h2>Count: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Click me!</button>

    </div>
  );
};

export default Timers;