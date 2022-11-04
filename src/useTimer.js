import { useEffect, useRef, useState } from 'react'

const useTimer = () => {
    const [timer, setTimer] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const ref = useRef()
    const date = new Date(0)

    useEffect(() => {
        date.setSeconds(timer)

        console.log(date.setSeconds(timer))
        setSeconds(date.getSeconds())
        setMinutes(date.getMinutes())

    }, [timer])

    const start = () => {
        ref.current = setTimeout(function runTimer() {
            setTimer((timer) => timer+1)

            ref.current = setTimeout(runTimer, 1000)
        }, 1000)
    }

    const stop = () => {
        clearTimeout(ref.current)
    }

    const reset = () => {
        stop()
        setTimer(0)
    }

    return {
        seconds,
        minutes,
        start,
        stop,
        reset,
    }
}

export default useTimer
