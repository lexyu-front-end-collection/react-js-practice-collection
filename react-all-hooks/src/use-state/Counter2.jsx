import './UseState.css';
import React, { useState } from 'react'

// Updater Function

function Counter2(props) {
    const [count, setCount] = useState(0);

    const incr = () => {
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    };

    const decr = () => {
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <div className='counter-container'>
            <p className='count-display'>{count}</p>
            <button className="counter-button" onClick={incr}>Increment</button>
            <button className="counter-button" onClick={decr}>Decrement</button>
            <button className="counter-button" onClick={reset}>Reset</button>
        </div>
    );
}

export default Counter2;