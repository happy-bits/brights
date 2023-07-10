function Email() {

    return (
    
        <article className="box">

            <h2>Sign up</h2>

            <div className="mb-3">
                <label htmlFor="emailInput" className="form-label">Email address</label>
                <input type="email" className="form-control" id="emailInput" placeholder="name@example.com" />
            </div>

            <div className="mb-3">
                <label htmlFor="emailInputAgain" className="form-label">Enter again</label>
                <input type="email" className="form-control" id="emailInputAgain" placeholder="name@example.com" />
            </div>            

            <button type="button" className="btn btn-primary btn-lg">Ok</button>

        </article>
    )

}

export default Email