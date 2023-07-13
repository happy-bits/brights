import { useState } from "react"

function Checkbox1() {

    const [likePizza, setLikePizza] = useState(false)
    const [likeCarrot, setLikeCarrot] = useState(false)

    const handlePizza = (e) => {
        setLikePizza(e.target.checked)
    }

    const handleCarrot = (e) => {
        setLikeCarrot(e.target.checked)
    }

    return (
        <>
            <div>
                <label>
                    Like pizza?
                    <input type="checkbox" onChange={handlePizza} value={likePizza} />
                </label>
            </div>

            <div>
                <label>
                    Like carrot?
                    <input type="checkbox" onChange={handleCarrot} value={likeCarrot} />
                </label> 
            </div>
            <div>
                You like pizza: {likePizza ? "Yes" : "No"}
            </div>
            <div>
                You like carrots: {likeCarrot ? "Yes" : "No"}
            </div>
            <div>
                {likeCarrot && likePizza ? "You are weird" : ""}
            </div>
            {/* <div>
                {likeCarrot && likePizza && "You are weird"}
            </div> */}
            
        </>
    )
}

export default Checkbox1