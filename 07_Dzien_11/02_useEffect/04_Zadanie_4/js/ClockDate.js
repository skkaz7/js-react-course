import React, {useEffect, useState} from "react"

function ClockDate(props) {
    return <h1>{props.date.toLocaleDateString()}</h1>
}

export default ClockDate
