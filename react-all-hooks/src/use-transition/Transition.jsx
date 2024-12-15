import React, { useState, useTransition } from 'react';

function TransitionExample(props) {
    const [query, setQuery] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);
    const [isPending, startTranstion] = useTransition();

    const items = Array.from({ length: 100000 }, (_, index) => `Item ${index + 1}`);

    const handleFilter = (event) => {
        const value = event.target.value;
        setQuery(value);

        startTranstion(() => {
            const filtered = items.filter((item) => {
                return item.toLowerCase().includes(value.toLowerCase())
            });
            setFilteredItems(filtered);
        })

    }

    return (
        <div>
            <h1>TransitionExample</h1>
            <input type="text"
                value={query}
                onChange={handleFilter}
                placeholder='Search items...' />

            {isPending && <h3>Loading...</h3>}

            {!isPending && (
                <ul>
                    {filteredItems.map((item, index) => (
                        <li key={index} style={{ textAlign: 'left' }}>{item}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default TransitionExample