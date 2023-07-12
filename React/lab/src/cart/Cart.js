
function CartItem() {
    return(
        <div>
            I'm a cart item
        </div>
    )
}


function Cart() {

    return(
       <article className="box">
            <h1>Cart</h1>

            <CartItem/>
            
            <div>
                Total
            </div>
       </article>
    )
}

export default Cart