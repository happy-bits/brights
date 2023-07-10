import { useState } from 'react'

function Email() {

    const [input, setInput] = useState('')
    const [inputAgain, setInputAgain] = useState('')
    
    const [message, setMessage] = useState('')
    const [messageState, setMessageState] = useState('hidden') // hidden, error, success

    const inputChange = (event) => {
        // input = event.target.value
        setInput(event.target.value)
    }

    const inputAgainChange = (event) => {
        // input = event.target.value
        setInputAgain(event.target.value)
    }

    const changeEmailAddress = (event) => {
        // input = "klas@katt.nu"
        setInput('klas@katt.nu')
    }

    const sendForm = () => {

        if (input === "") {
            setMessage("Empty email address")
            setMessageState("error")
            return
        }

        if (!isValidEmailAddress(input)) {
            setMessage("Invalid email address")
            setMessageState("error")
            return
        }

        if (input !== inputAgain) {
            setMessage("Not the same")
            setMessageState("error")
            return
        }
        
        setMessage("Success!")
        setMessageState("success")
    }

    return (

        <article className="box">

            <h2>Sign up</h2>

            <div className="mb-3">
                <label htmlFor="emailInput" className="form-label">Email address</label>
                <input type="email" value={input} onChange={inputChange} className="form-control" id="emailInput" placeholder="name@example.com" />
            </div>

            <div className="mb-3">
                <label htmlFor="emailInputAgain" className="form-label">Enter again</label>
                <input type="email" value={inputAgain} onChange={inputAgainChange} className="form-control" id="emailInputAgain" placeholder="name@example.com" />
            </div>

            <button onClick={sendForm} type="button" className="btn btn-primary btn-lg me-1">Ok</button>

            <div>

                <div>Message: {message}</div>
                <div>State: {messageState}</div>

            </div>


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