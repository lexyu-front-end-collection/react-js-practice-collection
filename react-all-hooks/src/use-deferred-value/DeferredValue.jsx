import React, { useState, useDeferredValue } from 'react';

function DeferredValueExample(props) {
    const [query, setQuery] = useState('');

    const items = Array.from({ length: 50000 }, (_, index) => `Item ${index + 1}`);

    const deferredQuery = useDeferredValue(query);

    const filteredItems = items.filter((item) =>
        item.toLowerCase().includes(deferredQuery.toLowerCase())
    )

    return (
        <div>
            <h1>DeferredValueExample</h1>
            <input type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder='Search items...' />

            {query !== deferredQuery && <h3>Loading</h3>}

            {
                query === deferredQuery &&
                <ul>
                    {filteredItems.map((item, index) => (
                        <li key={index} style={{ textAlign: 'left' }}>
                            {item}
                        </li>
                    ))}
                </ul>
            }

        </div>
    )
}

export default DeferredValueExample