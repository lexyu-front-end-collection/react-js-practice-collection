import React, { useState, createContext } from 'react';
import ContextDemoB from "./ContextDemoB.jsx"
import './context.css'


export const UserContext = createContext();

function ContextDemoA() {

    const [propUser, setUser] = useState("John Doe");


    return (
        <div className='box'>
            <h1>ComponentA</h1>
            <h2>{`Hi ${propUser}`}</h2>
            <UserContext.Provider value={propUser}>
                <ContextDemoB />
            </UserContext.Provider>
            {/* <ContextDemoB user={propUser} /> */}
        </div>
    )
    
}

export default ContextDemoA