
import { useState } from "react"

function PowButton() {

    const [message, setMessage] = useState("Duck")
    const [message2, setMessage2] = useState("Rabbit")

    const handleClick = () => {
        setMessage("POW!")
    }

    const handleClick2 = () => {
        setMessage2("POW!")
    }

    return (

        <div>
            <button onClick={handleClick}>Press me</button>
            <button onClick={handleClick2}>Press me</button>
            <div>{message}</div>
            <div>{message2}</div>

        </div> 

    )

}

export default PowButton