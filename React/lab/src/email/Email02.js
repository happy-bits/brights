/*
    Write stuff in console when user clicks button
*/

function Email() {

    // function buttonclicked(event){
    //     console.log("testy!")
    //     console.log("event", event) // meta information like: which button, altkey, clientX, clientY
    //     console.log("event.target", event.target) // the clicked button
    // }

    // Same as above, but just in a different form
    // The parameter "event" is automatically sent from the button

    const buttonclicked = (event) => {
        //console.log("buttonclicked!")

        // Show information about the event: which button, if alt-key is pressed, clientX, clientY
        //console.log("event", event)
        console.log("ctrl key pressed: "+ event.ctrlKey) 

        // Most of the time we're only interested in the "target"
        // Show info about the target (the OK-button in this case)
        console.log("innerText: ", event.target.innerText)
    }


    return (

        <div className="center">

            <article className="box">

                <h1>Sign up</h1>


                <div className="mb-3">
                    <label htmlFor="emailInput" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="emailInput" placeholder="name@example.com" />
                </div>

                <div className="mb-3">
                    <label htmlFor="emailAgainInput" className="form-label">Enter again</label>
                    <input type="email" className="form-control" id="emailAgainInput" placeholder="name@example.com" />
                </div>

                {/* "onClick" is case sensitive */}
                {/* Inline function */}
                <button onClick={() => { console.log('hello') }} className="btn btn-primary btn-lg me-1">Ok1</button>

                {/* Inline function and pickup the event */}
                <button onClick={(event) => { console.log(event) }} className="btn btn-primary btn-lg me-1">Ok2</button>

                {/* Connect the click event with my own function. Note: it's not a function call like buttonclicked() */}
                <button onClick={buttonclicked} className="btn btn-primary btn-lg me-1">Ok3</button>

                {/* Note: the following code i a common mistake and is incorrect 

                <button onClick={buttonclicked()} className="btn btn-primary btn-lg me-1">Ok3</button> 

                */}

            </article>

        </div>

    )
}

export default Email