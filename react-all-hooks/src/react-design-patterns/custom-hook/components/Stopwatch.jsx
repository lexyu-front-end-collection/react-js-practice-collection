import React from 'react'
import useTimer from '../hooks/useTimer';
import './clock.css'

/**
 * 
 */
const Stopwatch = () => {
    const {
        seconds,
        isActive,
        start,
        stop,
        reset
    } = useTimer();

    return (
        <div>
            <h1>Stopwatch</h1>
            <p className='digit'>{seconds}s</p>
            <button onClick={start} disabled={isActive}>Start</button>
            <button onClick={stop} disabled={!isActive}>Stop</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Stopwatch