import { useDispatch, useSelector } from "react-redux";
// import ReactHook01 from "../React_Hook02/ReactHook01";

const Counter = () => {
    // const count = useSelector( (state) => state.count);
    const count = useSelector((state) => state.counter.count); 

    const dispatch  = useDispatch();

    return (
        <div>
            <h2>Count in counter Component : { count }</h2>
             <button onClick={() => dispatch({ type: "INCREMENT" })}> + </button>
            <button onClick={() => dispatch({  type:  "DECREMENT" })}> - </button>

        </div>
        
);

}

export default  Counter;
