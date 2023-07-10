/*
    Keep track on what the user writes in the textbox (this is saved in "state")
   
    The GUI is automatically updated when the state is changed
*/
import { useState } from 'react'

function Email() {

    const [input, setInput] = useState("")

    const changeEmailAddress = () => {

        // input = "klas@katt.nu"

        setInput("klas@katt.nu")

    }

    /*
    When you want to change a state, don't write

        input = "aaa"
        
    ...instead write

        setInput("aaa")

    */

    const inputChange = (event) => {
        /*
           event.target =>       that's "input"
           event.target.value => that's the entered value in the box

           Let's change "input" to the value in the box       

           Think
           input = event.target.value

           but write
           setInput(event.target.value)

        */
        setInput(event.target.value)

        /*
            React will now automagically update the component!
        */
    }

    return (


        <article className="box">

            <h1>Sign up</h1>

            <div className="mb-3">
                <label htmlFor="emailInput" className="form-label">Email address</label>
                <input type="email" value={input} onChange={inputChange} className="form-control" id="emailInput" placeholder="name@example.com" />
            </div>

            <div className="alert alert-primary" role="alert">
                {input}
            </div>


            <div className="mb-3">
                <label htmlFor="emailAgainInput" className="form-label">Enter again</label>
                <input type="email" className="form-control" id="emailAgainInput" placeholder="name@example.com" />
            </div>

            <button onClick={changeEmailAddress} className="btn btn-primary btn-lg">Change email address</button>

        </article>



    )
}

export default Email