import React, { useState, createContext } from 'react';
import './ContextExample.css';

function ContextExample() {
    const [isToggle, setIsToggle] = useState(false);

    return (
        <div>
            <h1>Parent BeforeContextExample</h1>
            <ChildToggle setIsToggle={setIsToggle} />
            <ChildDisplay isToggle={isToggle} />
        </div>
    );
}


const ChildToggle = ({ setIsToggle }) => {

    return (
        <div className='ct'>
            <h3>ChildToggle</h3>
            <button onClick={() => setIsToggle(prevState => !prevState)}>Toggle State</button>
        </div>
    )
}


const ChildDisplay = ({ isToggle }) => {

    return (
        <div className='cd'>
            <h3>ChildDisplay</h3>
            <p>Current State: {isToggle ? "Yes" : "No"}</p>
        </div>
    )
}

export default ContextExample