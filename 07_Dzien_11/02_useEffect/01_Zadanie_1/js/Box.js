import React, {useEffect, useState} from "react"

function Box() {
    const [color, setColor] = useState('cornflowerblue')

    useEffect(() => {
        const myTimer = setTimeout(() => {
            setColor('tomato')
        }, 2000)

        return () => {
            clearTimeout(myTimer)
        }
    }, [])

    return <div style={{height: 100, width: 100, backgroundColor: color}}/>
}

export default Box
