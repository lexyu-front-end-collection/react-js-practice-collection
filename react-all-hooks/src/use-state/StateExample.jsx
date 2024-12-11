import React, { useState } from 'react';
import './StateExample.css';

function StateExample() {
    const [count, setCount] = useState(0);

    function incr() {
        setCount(c => c + 1);
        setCount(c => c + 1);
        console.log(count);
    }
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={incr}>Increment Counter</button>
        </div>
    );
}

export default StateExample