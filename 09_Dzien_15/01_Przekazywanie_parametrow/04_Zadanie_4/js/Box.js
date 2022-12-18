import React, {useState} from "react"

function Box() {
    const [style, setStyle] = useState({
        height: 200,
        width: 500,
        backgroundColor: 'green'
    })

    const divHandler = (height, width, backgroundColor) => {
        setStyle(prevState => {
            return {
                ...prevState,
                height: height,
                width: width,
                backgroundColor: backgroundColor
            }
        })
    }

    return (
        <>
            <div style={style}/>
            <button onClick={() => divHandler(200, 300, 'orange')}>Click 1</button>
            <button onClick={() => divHandler(100, 700, 'blue')}>Click 2</button>
            <button onClick={() => divHandler(200, 500, 'green')}>Click 3</button>
        </>
    )
}

export default Box
