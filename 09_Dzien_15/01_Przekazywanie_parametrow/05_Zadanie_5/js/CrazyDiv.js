import React, {useState} from "react";

function CrazyDiv() {
    const [style, setStyle] = useState({
        backgroundColor: 'red',
        height: 100,
        width: 100,
        position: 'absolute'
    })

    const handleHover = (min, max) => {
        setStyle(prevState => {
            return {
                ...prevState,
                left: Math.floor(Math.random() * max) + min,
                top: Math.floor(Math.random() * max) + min
            }
        })
    }

    return <div onMouseEnter={() => handleHover(0, 500)} style={style}/>
}

export default CrazyDiv
