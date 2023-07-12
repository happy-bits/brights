import {useState} from 'react'

const products = new Map([

    ['p1', { name: 'Cheese', price: 45}],
    ['p2', { name: 'Tomato', price: 14}],
    ['p3', { name: 'Garlic', price: 4}],

])

const maxNrOfProducts = 5

function getProduct(id) {
    return products.get(id)
}

function CartItem(props) {

    const product = getProduct(props.id)

    return (
        <div className="row my-2 align-items-center">
            <div className="col-3">
                {product.name}
            </div>
            <div className="col-3 text-end">
                {product.price} kr/st
            </div>
            <div className="col-3 d-flex justify-content-between">
                <button onClick={() => props.adjustProduct(props.id, -1) } disabled={props.amount === 0} className="btn btn-primary btn-sm">-</button>
                <div className="px-2 align-self-center">{props.amount}</div>
                <button onClick={() => props.adjustProduct(props.id, +1) } disabled={props.amount === maxNrOfProducts} className="btn btn-primary btn-sm">+</button>
            </div>
            <div className="col-3 text-end">
                {props.amount * product.price} kr
            </div>

        </div>
    )
}

function Cart() {

    const [cart, setCart] = useState([
        {id:"p1", amount: 3},
        {id:"p2", amount: 5},
        {id:"p3", amount: 2},

    ])

    const adjustProduct = (id, change) => {
        console.log(`Adjust product with id ${id} with: ${change}`)
    }

    const totalAmount = () => {
        // todo: försök lösa denna
        return 1234567
    }

    return (
        <article className="box" style={{ userSelect: "none" }}>
            <h1 className="display-5 mb-4">Cart</h1>

            {cart.map(item => <CartItem adjustProduct={adjustProduct} key={item.id} id={item.id} amount={item.amount}/>)}

            <div className="row mt-4">
                <div className="col-9">
                    Total
                </div>
                <div className="col-3 text-end">
                    {totalAmount()} kr
                </div>
            </div>
        </article>
    )

}



export default Cart