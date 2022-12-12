import React, {useState} from "react"
import fakeAPI from "./data/fakeAPI"

function AccountData() {
    const [data, setData] = useState(false)
    fakeAPI.then(data => {
        // console.log(data)
        setData(data)
    })
    if (data === false) {
        return null
    } else {
        return (
            <ul>
                {data.map(item => {
                    return <li key={item.day}>{`Dzień: ${item.day} | saldo: ${item.balance} | zmiana: ${item.change}`}</li>
                })}
            </ul>
        )
    }
}

export default AccountData
