# Mama1

Create a component **Child**  that return a paragraph:

    <p>I'm a child component</p>

Create a component **Mama** that displays three childs: (hard coded)

![](images/mama1.png)

# Mama2

Create a component **Product** that can be used like this:

    <Product id={100} name="Kaffe mellanrost" price={44.5} />

Create a component **Mama** that displays three products:

![](images/mama2.png)

# Mama3

Add a constant that looks something like this:

    const products = [
        {id:100, name:"Kaffe mellanrost", price:44.5}
    ]

In the **Mama** component, use the function **.map** to display four products:

![](images/mama3.png)

# Mama4

Add a button to the products

When a button is clicked show *You clicked a product with id: ...*, here the user has pressed the product with id 102


![](images/mama4.png)