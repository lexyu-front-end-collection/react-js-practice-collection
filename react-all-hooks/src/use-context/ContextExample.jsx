import React, { useState, createContext, useContext } from 'react';
import './ContextExample.css';

export const GlobalContext = createContext();

function ContextExample() {
    const [isToggle, setIsToggle] = useState(false);

    return (
        <GlobalContext.Provider value={{ isToggle, setIsToggle }}>
            <div>
                <h1>Parent ContextExample</h1>
                <ChildToggle />
                <ChildDisplay />
            </div>
        </GlobalContext.Provider>
    );
}


const ChildToggle = () => {
    const { setIsToggle } = useContext(GlobalContext);
    return (
        <div className='ct'>
            <h3>ChildToggle</h3>
            <button onClick={() => setIsToggle(prevState => !prevState)}>Toggle State</button>
        </div>
    )
}


const ChildDisplay = () => {
    const { isToggle } = useContext(GlobalContext);
    return (
        <div className='cd'>
            <h3>ChildDisplay</h3>
            <p>Current State: {isToggle ? "Yes" : "No"}</p>
        </div>
    )
}

export default ContextExample