import React, { useState, useEffect } from 'react';

const UseEffectDemo2 = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);


    return (
        <>
        <p>Window Width: {width}</p>
        <p>Window Height: {height}</p>
        </>
    )
}

export default UseEffectDemo2