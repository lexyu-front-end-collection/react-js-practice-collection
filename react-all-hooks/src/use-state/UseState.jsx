import React, { useState } from 'react'

function UseState(props) {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);

    const updateName = () => {
        // Error
        // name = ("Tester");
        // console.log(name);

        setName("Tester");
    };


    const incrAge = () => {
        setAge(age + 1);
    };


    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
            <p>Age: {age}</p>
            <button onClick={incrAge}>Incr Age</button>
        </div>
    );
}

export default UseState;