
import { useState } from "react"

function YesNo() {

    const [message, setMessage] = useState("")

    return (

        <div>
            <button onClick={() => setMessage("Yes")}>Change to Yes</button>
            <button onClick={() => setMessage("No")}>Change to No</button>
            <div>{message}</div>
        </div> 

    )

}

export default YesNo