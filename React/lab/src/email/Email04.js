/*
    Keep track of the value of both textfields

    Write a text if the values are the same
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

    const compareTexts = () => {
        if (input === inputAgain) {
            return "Same"
        } else {
            return "Not the same"
        }
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
                <input type="email" value={inputAgain} onChange={inputAgainChange} className="form-control" id="emailAgainInput" placeholder="name@example.com" />
            </div>

            <div className="alert alert-primary" role="alert">
                {inputAgain}
            </div>

            <button className="btn btn-primary btn-lg">Ok</button>

            <div className="alert alert-primary mt-3" role="alert">
                <div>{compareTexts()}</div>
                <div>{input === inputAgain ? "Same" : "Not the same"}</div>
            </div>

        </article>


    )
}

export default Email