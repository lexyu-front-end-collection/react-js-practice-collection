import React from 'react'
import useTimer from '../hooks/useTimer';

const Countdown = ({ initSeconds }) => {
    const {
        seconds,
        isActive,
        start,
        stop,
        reset
    } = useTimer(initSeconds, true);
    return (
        <div>
            <h1>Countdown</h1>
            <p className='digit'>{seconds}s</p>
            <button onClick={start} disabled={isActive || seconds <= 0}>Start</button>
            <button onClick={stop} disabled={!isActive}>Stop</button>
            <button onClick={reset}>Reset</button>
        </div >
    )
}

export default Countdown