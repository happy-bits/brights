
export default function Mama2() {
    return (
        <>
            <Product id={100} name="Kaffe mellanrost" price={44.5} />
            <Product id={101} name="Avokado 3-pack" price={32} />
            <Product id={102} name="Chips Sourcream & Onion" price={27.5} />
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