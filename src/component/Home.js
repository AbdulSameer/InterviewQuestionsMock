    import React, { useState } from "react";
    import { useEffect } from "react";
    

    function Home() {
    const [count, setCount] = useState(0);
    const[name, setName] = useState('')
    function person(e){
        setName(e.target.value)
    }
    function increment() {
        setCount(count + 1);
    }
    function decrement() {
        if (count == 0) {
        setCount(count);
        } else {
        setCount(count - 1);
        }
    }
    useEffect(() => {
        console.log('component mounted')
        document.title = "this is useEffect";
    },[name]);

    return (
        <>
        <h1>This is home page</h1>
        <input onChange={person} value={name}/>
        <h3>counter value is : {count}</h3>
        <button onClick={increment}>counter</button>
        <button onClick={decrement}>count decrement</button>
        </>
    );
    }
    export default Home;
