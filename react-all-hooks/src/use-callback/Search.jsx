import { memo } from 'react'

function Search({ onChange }) {
    console.log("Search Rendered");

    return (
        <input
            type="text"
            onChange={(e) => onChange(e.target.value)}
            placeholder='Search...' />
    )
}

export default memo(Search)