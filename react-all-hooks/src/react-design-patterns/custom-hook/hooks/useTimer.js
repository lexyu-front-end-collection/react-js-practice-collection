// Custom Hook
// State, Logic, Effects

import React, { useState, useRef, useEffect } from 'react'

const useTimer = (initSeconds = 0, isCountdown = false) => {
    const [seconds, setSeconds] = useState(initSeconds);
    const [isActive, setIsActive] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (isActive) {
            intervalRef.current = setInterval(() => {
                setSeconds(prevSeconds => {
                    // Countdwon
                    if (isCountdown) {
                        const nextSec = prevSeconds - 1
                        if (nextSec <= 0) {
                            clearInterval(intervalRef.current);
                            setIsActive(false)
                            return 0;
                        }
                        return nextSec;
                    }
                    // Stopwatch
                    return prevSeconds + 1;
                })
            }, 1000)
        } else if (!isActive && intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        return () => clearInterval(intervalRef.current);
    }, [isActive, isCountdown])

    const start = () => {
        setIsActive(true);
    }

    const stop = () => {
        setIsActive(false);
    }

    const reset = () => {
        setIsActive(false);
        setSeconds(initSeconds);
    }

    return {
        seconds,
        isActive,
        start,
        stop,
        reset
    }
}

export default useTimer