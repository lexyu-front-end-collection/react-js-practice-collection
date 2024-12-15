import React, { useState, useEffect, useRef } from 'react';



function RefExample() {

    const onClick = () => {
        inputRef.current.focus()
        inputRef.current.value = "Hello World"
        // console.log(inputRef.current.value);
    };

    const inputRef = useRef(null);

    useEffect(() => {
        console.log("test");
    });

    // -------------------------------------------

    const [count, setCount] = useState(0);
    const previousCount = useRef(0);
    useEffect(() => {
        previousCount.current = count;
    })

    return (
        <>
            <div>
                <h1>RefExample</h1>
                <input type="text" ref={inputRef} />
                <br />
                <br />
                <button onClick={onClick}>Log</button>
            </div>
            <div>
                <h3>Count: {count}</h3>
                <h3>Previous Count: {previousCount.current}</h3>
                <button onClick={() => setCount(prev => prev + 1)}>Increment Counter</button>
            </div>
        </>
    )
}

export default RefExample