import React, { useState } from 'react';


const ProductForm = () => {

    // ----- state variable to store info collected from each form inputed state -----
    let [name, setName] = useState("");
    let [price, setPrice] = useState("");
    let [description, setDescription] = useState("");
    let [image, setImage] = useState("");


    // -------- state variable to store all the products --------
    let [productList, setProductList] = useState([])  // ----- start as an empty array -----


    const submitHandler = (e) => {
        e.preventDefault(); // -------- prevent the from from resloading the whole page --------
        console.log({name, price, description, image})
        let newProductObj = {name, price, description, image}  // ----- create a new product object -----

        // -------- clear the state variables inputs --------
        setName("")
        setPrice("")
        setDescription("")
        setImage("")

        // -------- add the product object to the productList array
        setProductList([...productList, newProductObj]) // set the productList variable using the setter to contain a copy of current(...) list

    }


    return (
        <>
            <form onSubmit={submitHandler}>
                <h1>Add a New Product</h1>
                <div className="form-group">
                    <label htmlFor="">Product Name:</label>              {/* ----- value={} clears out the form after submission ----- */}
                    <input type="text" name="" id="" className="form-control" onChange={(e)=>{setName(e.target.value)}} value={name} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Price:</label>
                    <input type="text" name="" id="" className="form-control" onChange={(e)=>{setPrice(e.target.value)}} value={price} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Description:</label>
                    <input type="text" name="" id="" className="form-control" onChange={(e)=>{setDescription(e.target.value)}} value={description} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Image:</label>
                    <input type="text" name="" id="" className="form-control" onChange={(e)=>{setImage(e.target.value)}} value={image} />
                </div>
                <input type="submit" value="Add Product" className="btn btn-success mt-2" />
            </form>

            {
                // -------- show each product on the form using .map --------
                productList.map(product => {
                    return <div>
                        <h1>{product.name}</h1>
                        <h4>Price:  {product.price}</h4>
                        <h4>Description:  {product.description}</h4>
                        <h4><img src={product.image} alt="Rice Cooker Image" height="200px" width="200px"></img></h4>
                        <hr /> {/* ----- horizontal line break in between products ----- */}
                    </div>
                })
            }

        </>
    )
}



export default ProductForm;

// misc comment for testing github