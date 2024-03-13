import React from 'react'
import { useState } from 'react'

function Counter(){
    const [count, setCount] = useState(0)
    function increment(){
        setCount(count+1)
    }
    function decrement(){
        if(count==0){
            setCount(count)
        }else{
            setCount(count-1)
        }
    }
    return(
        <div>
            <h1>The value is:{count}</h1>
            <button onClick={increment}>Increment</button><button onClick={decrement}>decrement</button>            
        </div>

    )
}

export default Counter