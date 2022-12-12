import React, {useState} from "react"

function MyButton() {
    const [flag, setFlag] = useState(false);

    const clickHandle = () => {
        setFlag(!flag)
    }

    return (
        <>
            <button onClick={clickHandle}>{flag ? 'TAK' : 'NIE'}</button>
        </>
    )
}

export default MyButton
