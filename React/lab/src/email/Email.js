import { useState } from 'react'

function Email() {

    const [input, setInput] = useState('oo@happybits.se')
    const [inputAgain, setInputAgain] = useState('oo@happybits.se')

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

    const compareText = () => {
        if (input === inputAgain) {
            return "Same"
        } else {
            return "Not the same"
        }
    }

    const compareText_shorter = () => {
        return input === inputAgain ? "Same" : "Not the same"
    }

    const compareText_even_shorter = () => input === inputAgain ? "Same" : "Not the same"


return (

    <article className="box">

        <h2>Sign up</h2>

        <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">Email address</label>
            <input type="email" value={input} onChange={inputChange} className="form-control" id="emailInput" placeholder="name@example.com" />
        </div>

        <div className='alert alert-primary'>
            {input}
        </div>

        <div className="mb-3">
            <label htmlFor="emailInputAgain" className="form-label">Enter again</label>
            <input type="email" value={inputAgain} onChange={inputAgainChange} className="form-control" id="emailInputAgain" placeholder="name@example.com" />
        </div>


        <div className='alert alert-primary'>
            {inputAgain}
        </div>

        <button onClick={changeEmailAddress} type="button" className="btn btn-primary btn-lg me-1">Change email address</button>

        <div className='alert alert-primary mt-3'>
            <div>
                {compareText()}
            </div>

            <div>
                {input === inputAgain ? "Same" : "Not the same"}
            </div>

        </div>

    </article>
)
}

export default Email