import React, {useEffect, useState} from "react"

import ClockDate from "./ClockDate";
import ClockTime from "./ClockTime";

function Clock() {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const myInterval = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => clearInterval(myInterval)
    }, [])

    return (
        <>
            <ClockTime date={date}/>
            <ClockDate date={date}/>
        </>
    )
}

export default Clock
