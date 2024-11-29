import React, { useState } from 'react'
import productService from '../service/product.service';

const AddProduct = () => {

  const [product, setProduct] = useState({
    productName: "",
    description: "",
    price: "",
    status: "Select"
  });

  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  }

  const addNewProduct = (e) => {
    e.preventDefault();
    productService.saveProduct(product)
      .then((res) => {
        setMessage("Product Saved successfully");
        setSuccess(true);
      })
      .catch((error) => {
        setMessage("Unable to save the product");
        setSuccess(false);
      })

    setTimeout(() => {
      setMessage(null);
      setSuccess(null);
      setProduct({
        productName: "",
        description: "",
        price: "",
        status: "Select"
      })
    }, 2000);

  }
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header fs-3 text-center">
                Add Product
              </div>
              {message && (
                <div className={`alert alert-${success ? 'success' : 'danger'}`} role="alert">
                  {message}
                </div>
              )}
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="">Name</label>
                    <input type="text" name="productName" className="form-control" onChange={(e) => handleChange(e)} value={product.productName} placeholder='Enter product name' />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="">Description</label>
                    <input type="text" name="description" className="form-control" onChange={(e) => handleChange(e)} value={product.description} placeholder='Enter product description' />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="">Price</label>
                    <input type="text" name="price" className="form-control" onChange={(e) => handleChange(e)} value={product.price} placeholder='Enter product price' />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="">Status</label>
                    <select className="form-select" name="status" value={product.status} aria-label="Default select example" onChange={(e) => handleChange(e)}>
                      <option selected>Select</option>
                      <option value="Available">Available</option>
                      <option value="Out of stock">Out of stock</option>
                    </select>
                  </div>
                  <button className="btn btn-danger col-md-12" onClick={addNewProduct}>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddProduct