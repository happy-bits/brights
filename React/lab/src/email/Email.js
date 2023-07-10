function Email() {

    // function buttonClicked() {
    //     console.log("Du klickade på knappen!")
    // }

    const buttonClicked = (event) => {
        // console.log("Du klickade på knappen!!!!")

        console.log("ctrl key pressed: " + event.ctrlKey)

        console.log("Det som står inuti knappen: " +  event.target.innerText)

    }

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

            <button onClick={() => console.log('hej')} type="button" className="btn btn-primary btn-lg me-1">Ok1</button>

            <button onClick={(event) => console.log(event)} type="button" className="btn btn-primary btn-lg me-1">Ok2</button>

            <button onClick={buttonClicked} type="button" className="btn btn-primary btn-lg me-1">Ok3</button>            

        </article>
    )

}

export default Email