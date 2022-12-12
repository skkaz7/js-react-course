import React, {useState} from "react"

function NumberRandomInfo() {
    const [random, setRandom] = useState(0)
    setInterval(() => {
        const number = Math.ceil(Math.random() * 5)
        setRandom(number)
    }, 1000)

    // if (random >= 3) {
    //     return <h1>{`${random}: większa lub równa 3`}</h1>
    // } else {
    //     return <h1>{`${random}: mniejsza od 3`}</h1>
    // }

    return (
        <>
            {random >= 3 ? `${random}: większa lub równa 3` : `${random}: mniejsza od 3`}
        </>
    )
}

export default NumberRandomInfo
