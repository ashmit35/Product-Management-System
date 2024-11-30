import React, { useEffect } from 'react'
import { useState } from 'react';
import productService from '../service/product.service';
import { Link } from 'react-router-dom';

const Home = () => {

  const [productList, setProductList] = useState([]);
  const [productDeleted, setProductDeleted] = useState("");
  const [message, setMessage] = useState("");


  const init = () => {
    productService.getAllProducts()
      .then((res) => {
        setProductList(res.data)
        // console.log(res.data)
      })
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    init();
  }, []);

  const deleteProduct = (id) => {
    productService.deleteProductById(id)
      .then((res) => {
        setProductDeleted(true);
        setMessage("Product deleted");
        init();
      })
      .catch((error) => {
        console.log(error)
        setProductDeleted(false);
        setMessage("Unable to delete product");
      });

    setTimeout(() => {
      setMessage(null);
      setProductDeleted(null);
    }, 2000);
  }
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-14">
          <div className="card">
            <div className="card-header fs-3 text-center">
              All Product Details
            </div>
            {message && (
              <div className={`alert alert-${productDeleted ? 'success' : 'danger'}`} role="alert">
                {message}
              </div>
            )}
            <div className="card-body">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Name</th>
                      <th scope="col">Price</th>
                      <th scope="col">Description</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productList.map((item, idx) => (
                      <tr key={idx}>
                        <th>{item.id}</th>
                        <td>{item.productName}</td>
                        <td>{item.price}</td>
                        <td>{item.description}</td>
                        <td className={`${item.status.toLowerCase() === "out of stock" ? 'text-danger fw-bold' : 'text-success'}`}>{item.status.toUpperCase()}</td>
                        <td>
                          <div className="d-flex">
                            <Link to={`/edit/${item.id}`} className='btn btn-sm btn-primary'>Edit</Link>
                            <button className='btn btn-sm btn-danger ms-2' onClick={() => deleteProduct(item.id)}>Delete</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home