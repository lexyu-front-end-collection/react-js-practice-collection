import React, { useState, useReducer } from 'react'

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'multiply':
            return { count: state.count * 2 };
        default:
            console.log("No Action Type");
            return state;
    }
}

function ReducerDemo() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <>
            <h1>ReducerDemo</h1>
            <div>
                <p>Count: {state.count}</p>
                <button onClick={() => dispatch({ type: 'increment' })}>
                    +
                </button>
                <button onClick={() => dispatch({ type: 'decrement' })}>
                    -
                </button>
                <button onClick={() => dispatch({ type: 'multiply' })}>
                    *
                </button>
            </div>
        </>
    )
}

export default ReducerDemo