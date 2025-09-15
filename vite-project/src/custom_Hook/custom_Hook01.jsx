import { StrictMode } from 'react';
import { useRef } from 'react';
import useCounter from "./useCounter"; 


function CustomHook01() {

// const [count, setCount] = useState(0);
// const  increment = () => setCount(count + 1);
// const  decrement = () => setCount(count - 1);

//Step 2----------
const {count,increment,decrement,reset} = useCounter(0);


  return (
    <div>
      <h1>Hello Vite!</h1>
      <h2>Count:{count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      
    </div>
    //Step 2----------

   
  );
}

export default CustomHook01;

