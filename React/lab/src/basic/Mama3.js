
export default function Mama3() {

    const products = [
        {id:100, name:"Kaffe mellanrost", price:44.5},
        {id:101, name:"Avokado 3-pack", price:32},
        {id:102, name:"Chips Sourcream & Onion", price:27.5},
        {id:103, name:"Färskpotatis 1kg", price:22},
    ]

    return (
        <>
            {products.map(product => <Product key={product.id} id={product.id} name={product.name} price={product.price} />)}
        </>
    )
}

function Product(props) {
    return (
        <div>
            <b>Id: </b>{props.id} <b>Name:</b> {props.name} <b>Price:</b> {props.price}
        </div>
    )
}
