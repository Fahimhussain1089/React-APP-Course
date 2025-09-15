import { StrictMode } from "react";
import { useEffect, useState } from "react";
import { useRef } from "react";

function UseRef() {
    // persist value across renders
    // does not cause 
    const [stateCount, setStateCount] = useState(0);
    const refCount = useRef(0);
    const incrementStateCount = () => {
        setStateCount(stateCount + 1);
        // refCount.current = refCount.current + 1;
    }
    useEffect(() => {
        console.log(`State count inside useEffect ${stateCount}`);
    }, [stateCount]);

    const incrementRefCount = () => {
        // setStateCount(stateCount + 1);
        refCount.current += 1;
        console.log(`Ref count inside function ${refCount.current}`);
    }



console.log(refCount);

    return (

        <div>

            <h1> State Count  {stateCount}</h1>
            <button onClick={incrementStateCount}>Increment State Count </button>

            <p>Ref count { refCount.current} </p>
            <button onClick={incrementRefCount}>Increment increment Ref  Count </button>


        </div>

    );
}


export default UseRef;