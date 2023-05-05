import React, { useState, useEffect } from "react"
import './Home.css'

function Home() {

    let [userDate, setUserData] = useState([])

    // console.log(userDate)

    useEffect(() => { getUserData() }, [])

    const getUserData = async () => {

        let result = await fetch(`https://frequent-research-project.vercel.app/fetch`)

        result = await result.json()

        if (result.status === false) {
            alert(result.message)
        } else {
            console.log(result.data)
            setUserData(result.data)
        }
    }



    return (
        <div className="outerDiv">

            {userDate.length > 0 ?

                userDate.map((val, key) => {
                    return (
                        <div className="innerDiv">
                            <div className="inner">
                                <p>Name: {val.firstName} {val.lastName}</p>
                                <p>Age: {val.age}</p>
                                <p>Email ID.: {val.email}</p>
                                <p>Address: {val.city}, {val.state}, {val.country}</p>
                            </div>

                        </div>
                    )
                }) : <h3 className="h3">No User Found !</h3>
            }

            <br />
        </div>
    )
}

export default Home