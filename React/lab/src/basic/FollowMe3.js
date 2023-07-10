
import { useState } from "react"

function FollowMe3() {

    const [message, setMessage] = useState("")

    return (

        <div>
            <input value={message} onChange={(event) => setMessage(event.target.value)}/>
            <button onClick={() => setMessage("")}>Clear</button>
            <div>{message}</div>

            { message.length >= 5 ?

            <div>
                The text contains five or more characters!
            </div>

            : <></>
            }
        </div> 

    )

}

export default FollowMe3