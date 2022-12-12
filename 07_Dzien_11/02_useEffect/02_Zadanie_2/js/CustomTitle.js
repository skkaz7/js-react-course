import React, {useState, useEffect} from "react"

function CustomTitle() {
    const [n, setN] = useState(1)
    useEffect(() => {
        document.title = n
    }, [n])

    const clickHandler = () => {
        setN(prevState => prevState + 1)
    }

    return <p onClick={clickHandler} style={{fontSize: `${n * 1.1}rem`}}>Kliknięto mnie już: {n} razy</p>
}

export default CustomTitle
