
import './App.css'
import  { use, useEffect, useState } from 'react';


function App4(){
    const [count, setCount] = useState(0);
    const [anotherValue, setAnotherValue] = useState(10);
    // useEffect(()=> {
    //             document.title = `Count: ${count }`;
    // },[count])
    // const incrementCounter = () => {
    //     setCount(count + 1 );    
    // }; 
    //++++++++++++++ step 2++++++++++++++++++++++++++++++++
    useEffect(() => {
        console.log(`useEffect Triggered by hussain`);
    },[count]);

    




    return (
        <div>
            <h1>useEffect Hook</h1>
            <button onClick={ () => setCount(count + 1 )  }> Increment </button>
            <button onClick={ () => setAnotherValue(anotherValue + 1 )  }> Another Increment </button>


        </div>
        // <div>
        //     <h1>useEffect Example</h1>
        //     <button onClick={incrementCounter}>Increment</button>
        // </div>
    );
}

export default App4;