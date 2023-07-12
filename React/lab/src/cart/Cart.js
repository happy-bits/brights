import {useState} from 'react'

function CartItem() {

    const name = "Banan"
    const price = 12
    const maxNrOfProducts = 5

    const [amount, setAmount] = useState(5)  

    const adjustProduct = (change) => {

        setAmount(prev => {

            prev += change

            prev = Math.min(maxNrOfProducts, prev)

            // if (prev>maxNrOfProducts){
            //     prev = maxNrOfProducts
            // }
            
            prev = Math.max(0, prev)

            // if (prev<0){
            //     prev = 0
            // }

            return prev
        })

    }

    // todo: 
    // - Bara tillåta värden mellan 0 och 5 (maxNrOfProducts)
    // - Disable'a knappen vid gränsvärdena
    // - Räkna ut delsumman

    return (
        <div className="row my-2 align-items-center">
            <div className="col-3">
                {name}
            </div>
            <div className="col-3 text-end">
                {price} kr/st
            </div>
            <div className="col-3 d-flex justify-content-between">
                <button disabled={amount === 0} onClick={() => adjustProduct(-1)} className="btn btn-primary btn-sm">-</button>
                <div className="px-2 align-self-center">{amount}</div>
                <button disabled={amount === maxNrOfProducts} onClick={() => adjustProduct(+1)}className="btn btn-primary btn-sm">+</button>
            </div>
            <div className="col-3 text-end">
                {amount * price} kr
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