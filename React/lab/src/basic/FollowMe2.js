
import { useState } from "react"

function FollowMe2() {

    const [message, setMessage] = useState("")

    return (

        <div>
            <input value={message} onChange={(event) => setMessage(event.target.value)}/>
            <button onClick={() => setMessage("")}>Clear</button>
            <div>{message}</div>
        </div> 

    )

}

export default FollowMe2