import React, {useEffect, useState} from "react"

function UserInfo() {
    const [user, setUser] = useState({
        name: 'John',
        surname: 'Snow'
    })

    useEffect(() => {
        setUser({
            name: 'typwy',
            surname: 'SEBA'
        })
    }, [])

    return <p>{`${user.name} ${user.surname}`}</p>
}

export default UserInfo
