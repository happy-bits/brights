
import { useState } from "react"

function FollowMe() {

    const [message, setMessage] = useState("")

    return (

        <div>
            <input value={message}  onChange={(event) => setMessage(event.target.value)}/>
            <div>{message}</div>
        </div> 

    )

}

export default FollowMe