import React, { useState, useMemo } from 'react'
import { fakeData } from './fake.js'


function BeforeMemo() {
    const [count, setCount] = useState(0)
    const [items] = useState(fakeData)
    const selected = items.find(item => item.isSelected);

    return (
        <div>
            <h1>BeforeMemoDemo</h1>
            <h3>Count: {count}</h3>
            <h3>Selected Item: {selected ? selected.id : 'None'}</h3>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}


export default BeforeMemo