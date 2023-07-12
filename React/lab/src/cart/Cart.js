import {useState} from 'react'

function CartItem() {

    const name = "Banan"
    
    const [amount, setAmount] = useState(7)  

    const adjustProduct = (change) => {
        console.log('Du vill ändra antalet med ' + change)

        //setAmount(amount + change)

        //setAmount(prev => prev + change)

        setAmount(prev => {
            return prev + change
        })

    }

    return (
        <div className="row my-2 align-items-center">
            <div className="col-3">
                {name}
            </div>
            <div className="col-3 text-end">
                ... kr/st
            </div>
            <div className="col-3 d-flex justify-content-between">
                <button onClick={() => adjustProduct(-1)} className="btn btn-primary btn-sm">-</button>
                <div className="px-2 align-self-center">{amount}</div>
                <button onClick={() => adjustProduct(+1)}className="btn btn-primary btn-sm">+</button>
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