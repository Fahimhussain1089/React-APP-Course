import { StrictMode } from "react";
import { useEffect, useState } from "react";
import { useRef } from "react";

function UseRefWithHtml() {
    const inputRef = useRef(null);
    const inputRefNext = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "yellow";
    };
    const focusInputNext = () => {
        inputRefNext.current.focus(); 
        inputRefNext.current.style.backgroundColor = "red";
    };
    

    const resetFocus = () =>{
        inputRef.current.style.backgroundColor = "white";
        inputRefNext.current.style.backgroundColor = "white";

    };



    return (
        <div>
            <h1> UseRef with Html</h1>
            <input ref={inputRef} type="text" placeholder='Focus me '/>
            <button onClick={focusInput}>Focus</button>

            <input ref={inputRefNext} type="text" placeholder='Focus me '/>

            <button onClick={focusInputNext}>Focus 2</button>
            <button onClick={resetFocus}>reset</button>



        </div>
    );
}
export default UseRefWithHtml;
