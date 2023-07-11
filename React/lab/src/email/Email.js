import { useState } from 'react'

function Email(props) {


    const background = props.background ?? "white"
    const successMessage = props.successmessage ?? "Success!"
    const borderthickness = props.borderthickness ?? 0


    console.log(successMessage)
//    console.log(background)

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

    // const changeEmailAddress = (event) => {
    //     // input = "klas@katt.nu"
    //     setInput('klas@katt.nu')
    // }

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

        setMessage(successMessage)
        setMessageState("success")
    }

    const displayMessage = () => {


        if (messageState === "hidden")
            return

        const alertType = messageState === "success" ? "alert-success" : "alert-danger"

        return (

            <div className={`alert ${alertType} mt-3`}>
                {message}
            </div>

        )
    }

    // const displayMessage_easier = () => {

    //     if (messageState === "success") {

    //         return (

    //             <div className="alert alert-success mt-3">
    //                 {message}
    //             </div>

    //         )

    //     }

    //     if (messageState === "error") {
    //         return (

    //             <div className="alert alert-danger mt-3">
    //                 {message}
    //             </div>

    //         )
    //     }
    // }

    const mystyle = {
        backgroundColor: background,
        border: `solid ${borderthickness}px`,
        }

    return (


        <article className="box" style={mystyle}>

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

            {displayMessage()}

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