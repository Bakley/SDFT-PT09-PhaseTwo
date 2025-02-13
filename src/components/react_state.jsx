import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0)

    // function increment(){
    //     setCount(count => count + 1)
    //     setCount(count => count + 1)

    // }
    function decrement(){
        setCount(count - 1)
    }

    return(
        <>
        <p>The Counter is at {count}</p>
        <div>
            <button onClick={() => setCount(count + 1)}>{count}</button>
        </div>

        <div>
            <button onClick={decrement}>{count}</button>
        </div>
        </>
    )

}

export default Counter
