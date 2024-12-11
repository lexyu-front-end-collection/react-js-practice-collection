import React, { useState, useEffect } from 'react';

function EffectExample() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // https://jsonplaceholder.typicode.com/todos
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setData(json))
    }, [])

    // Occur Twice
    // useEffect(() => {
    //     console.log(`isLoading = ${isLoading}`);
    // })

    useEffect(() => {
        console.log(`isLoading = ${isLoading}`);
    }, [isLoading])

    return (
        <>
        <button onClick={() => setIsLoading(prevState =>!prevState)}>{isLoading ? "Stop" : "Start"}</button>
            <h1>EffectExample</h1>
            <div>
                <ol>
                    {data.map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ol>
            </div>
        </>
    )
}

export default EffectExample