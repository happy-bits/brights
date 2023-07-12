// Styling

function CartItem() {

    // todo:
    // Om man klickar på plus: skriv ut "add one" i console'n
    // Om man klickar på minus: skriv ut "subtract one" i console'n

    // 9:30 fortsätter vi

    return (
        <div className="row my-2 align-items-center">
            <div className="col-3">
                ...
            </div>
            <div className="col-3 text-end">
                ... kr/st
            </div>
            <div className="col-3 d-flex justify-content-between">
                <button className="btn btn-primary btn-sm">-</button>
                <div className="px-2 align-self-center">...</div>
                <button className="btn btn-primary btn-sm">+</button>
            </div>
            <div className="col-3 text-end">
                ... kr
            </div>

        </div>
    )
}

function Cart() {

    return (
        <article className="box" style={{ userSelect: "none" }}>
            <h1 className="display-5 mb-4">Cart</h1>
            <CartItem />

            <div className="row mt-4">
                <div className="col-9">
                    Total
                </div>
                <div className="col-3 text-end">
                    ... kr
                </div>
            </div>
        </article>
    )

}



export default Cart