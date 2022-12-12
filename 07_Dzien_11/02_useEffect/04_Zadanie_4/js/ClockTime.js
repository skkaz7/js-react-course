import React, {useEffect, useState} from "react"

function ClockTime(props) {
    return <h1>{props.date.toLocaleTimeString()}</h1>
}

export default ClockTime
