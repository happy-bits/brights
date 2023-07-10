
import { useState } from "react"

function YesNoToggle() {

    const [message, setMessage] = useState("Yes")

    const toggleMessage = () =>{

        if (message === "Yes"){
            setMessage("No")
        } else {
            setMessage("Yes")
        }

    }

    return (

        <div>
            <button onClick={toggleMessage}>Toggle Yes/No</button>
            <div>{message}</div>
        </div> 

    )

}

export default YesNoToggle