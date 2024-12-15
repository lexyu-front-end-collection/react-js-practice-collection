import React, { useId } from 'react';

function UseIdExample(props) {
    const id = useId();
    const id2 = useId();
    return (
        <div>
            <h1>UseIdExample</h1>
            <div>
                <label htmlFor={id}>Enter Text</label>
                <input id={id} type="text" />
                <br />
                <label htmlFor={id2}>Enter Text 2</label>
                <input id={id2} type="text" />
            </div>
        </div>
    )
}

export default UseIdExample