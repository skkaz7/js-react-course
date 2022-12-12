import React, {useState} from "react";

function ColorfulBoxes() {
    const [colors, setColor] = useState([])

    const handleButton = () => {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        setColor(prevState => [...prevState, randomColor])
    }

    return (
        <>
            <button onClick={handleButton}>Dodaj boxa!</button>
            {colors.map((color, index) => <div key={index} style={{height: 200, width: 200, backgroundColor: color}}/>)}

        </>
    )
}

export default ColorfulBoxes
