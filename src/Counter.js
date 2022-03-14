import { useState } from "react";
function CounterApp(){
    const [counter,setcounter]=useState(0)
    const increment=()=>{
        setcounter(counter+1)
    }
    const decrement=()=>{
        setcounter(counter-1)
    }
    return(
        <div>
            <h1 data-testid="counter">{counter}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>

        </div>
    )
}
export default CounterApp