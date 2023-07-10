import {useState} from 'react'

function Email() {

    const [input, setInput] = useState('oo@happybits.se')

    const inputChange = (event) => {
        // input = event.target.value
        setInput(event.target.value)
    }

    const changeEmailAddress = (event) => {
        // input = "klas@katt.nu"
        setInput('klas@katt.nu')
    }
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
                <input type="email" className="form-control" id="emailInputAgain" placeholder="name@example.com" />
            </div>

            <button onClick={changeEmailAddress} type="button" className="btn btn-primary btn-lg me-1">Change email address</button>

        </article>
    )

}

export default Email