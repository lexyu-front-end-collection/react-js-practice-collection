import React, { useState, useReducer } from 'react'


function BeforeReducerDemo() {
    const [counter, setCounter] = useState(0);


    return (
        <>
            <h1>BeforeReducerDemo</h1>
            <div>
                <p>Count: {counter}</p>
                <button onClick={() => setCounter(prev => prev + 1)}>
                    +
                </button>
                <button onClick={() => setCounter(prev => prev - 1)}>
                    -
                </button>
                <button onClick={() => setCounter(prev => prev * 2)}>
                    *
                </button>
            </div>
        </>
    )
}

export default BeforeReducerDemo