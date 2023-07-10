/*
    If the user clicks ok => validate the form (write in the console)
*/

import { useState } from 'react'

function Email() {

    const [input, setInput] = useState("")
    const [inputAgain, setInputAgain] = useState("")

    const inputChange = (event) => {
        setInput(event.target.value)
    }

    const inputAgainChange = (event) => {
        setInputAgain(event.target.value)
    }

    const sendForm = () => {

        if (input === "") {
            console.log("Empty email address")
            return
        }

        if (!isValidEmailAddress(input)) {
            console.log("Invalid email address")
            return
        }

        if (input !== inputAgain) {
            console.log("Not the same")
            return
        }

        console.log("Success!")
    }

    return (

        <article className="box">

            <h1>Sign up</h1>
            <div className="mb-3">
                <label htmlFor="emailInput" className="form-label">Email address</label>
                <input type="email" value={input} onChange={inputChange} className="form-control" id="emailInput" placeholder="name@example.com" />
            </div>


            <div className="mb-3">
                <label htmlFor="emailAgainInput" className="form-label">Enter again</label>
                <input type="email" value={inputAgain} onChange={inputAgainChange} className="form-control" id="emailAgainInput" placeholder="name@example.com" />
            </div>

            <button  onClick={sendForm} className="btn btn-primary btn-lg">Ok</button>


        </article>

    )
}

function isValidEmailAddress(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) != null;
}


export default Email