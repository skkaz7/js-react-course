import React, {useState, useEffect} from "react"

function Stopwatch() {
    let myInterval
    const [time, setTime] = useState(0)
    const [laps, setLaps] = useState([])
    const [isRunning, setIsRunning] = useState(true)

    useEffect(() => {
        if (isRunning) {
            myInterval = setInterval(() => {
                setTime(prevState => prevState + 1)
            }, 1000)
        } else {
            clearInterval(myInterval)
        }

        return () => clearInterval(myInterval)

    }, [isRunning])

    const lapHandle = () => {
        setLaps([...laps, time])
    }

    const restartHandle = () => {
        setTime(0)
        setLaps([])
    }

    return (
        <>
            <h1>{`Time: ${time}s`}</h1>
            <button onClick={lapHandle}>Lap</button>
            <button onClick={() => setIsRunning(false)}>Stop</button>
            <button onClick={restartHandle}>Restart</button>
            <button onClick={() => setIsRunning(true)}>Start</button>
            <h1>Laps:</h1>
            <ul>
                {laps.map((lap, index) => <li key={index}>{lap}</li>)}
            </ul>
        </>
    )
}

export default Stopwatch
