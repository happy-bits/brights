
import { useState } from "react"

function YesNoToggle_Alternative() {

    const [isYes, setIsYes] = useState(true)

    return (

        <div>
            <button onClick={()=>{setIsYes( !isYes )}}>Toggle Yes/No</button>
            <div>{isYes ? "Yes" : "No"}</div>
        </div> 

    )

}

export default YesNoToggle_Alternative