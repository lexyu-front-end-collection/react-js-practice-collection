import React, { useState, useEffect, useRef } from 'react'


function RefDemo(props) {

    const [count, setCount] = useState(0);
    const countRef = useRef(0);
    const inputRef = useRef(null);

    function stateCounter() {
        setCount(count + 1);
    }

    function refCounter() {
        countRef.current++;
        console.log(countRef.current);

    }

    function handleRefClick() {
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "yellow";
    }

    useEffect(() => {
        console.log("Component Rendered");
    });

    useEffect(() => {
        console.log(inputRef);
    }, [])

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={stateCounter}>State Click</button>
            <h2>Count: {countRef.current}</h2>
            <button onClick={() => {
                refCounter();
                handleRefClick();
            }}>Ref Click</button><br />
            <input ref={inputRef} />
        </div>
    )
}

export default RefDemo