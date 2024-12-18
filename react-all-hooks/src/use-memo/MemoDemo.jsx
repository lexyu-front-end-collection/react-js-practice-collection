import React, { useState, useMemo } from 'react'
import { fakeData } from './fake.js'


function MemoDemo() {
    const [count, setCount] = useState(0)
    const [items] = useState(fakeData)

    const selected = useMemo(() => {
        return items.find(item => item.isSelected);
    }, [])


    const selectedCountItem = useMemo(() => {
        return items.find(item => item.id == count);
    }, [count, items])

    return (
        <div>
            <h1>MemoDemo</h1>
            <h3>Count: {count}</h3>
            <h3>Selected Count: {selectedCountItem ? selectedCountItem.id : 'None'}</h3>
            <h3>Selected Item: {selected ? selected.id : 'None'}</h3>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}


export default MemoDemo