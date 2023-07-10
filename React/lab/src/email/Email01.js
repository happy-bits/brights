/*
A static HTML page

Change "className" to "class"
Change "for" to "htmlFor"

Note that React is more senitive about the HTML-code (it has to be lowercase and you must close all tags)
*/

function Email() {

    return (


        <article className="box">

            <h2>Sign up</h2>

            <div className="mb-3">
                <label htmlFor="emailInput" className="form-label">Email address</label>
                <input type="email" className="form-control" id="emailInput" placeholder="name@example.com" />
            </div>

            <div className="mb-3">
                <label htmlFor="emailAgainInput" className="form-label">Enter again</label>
                <input type="email" className="form-control" id="emailAgainInput" placeholder="name@example.com" />
            </div>

            <button type="button" className="btn btn-primary btn-lg">Ok</button>

        </article>


    )

}

export default Email