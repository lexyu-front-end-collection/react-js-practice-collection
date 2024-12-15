import React, { useRef, useImperativeHandle, forwardRef } from 'react'


function ImperativeHandle(props) {
    const inputRef = useRef(null);

    return (
        <div>
            <h1>ImperativeHandle</h1>
            <CustomInput ref={inputRef} />
            <button onClick={() => inputRef.current.focus()}>Focus Input</button>
            <button onClick={() => inputRef.current.clear()}>Clear Input</button>
        </div>
    )
}

const CustomInput = forwardRef((props, ref) => {
    const inputRef = useRef(null);
    // Expose methods or properties to the parent using useImperativeHandle
    useImperativeHandle(ref, () => ({
        focus: () => inputRef.current.focus(),
        clear: () => inputRef.current.value = '',
    }));
    return <input ref={inputRef} type='text' placeholder='Enter Text' />
})


export default ImperativeHandle