import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-danger">
            <div className="container-fluid">
                <Link to={"/"} className="navbar-brand text-white">Product Management System</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={"/"} className="nav-link active text-white" aria-current="page" >Home</Link>
                        </li>


                    </ul>
                    <form className="d-flex">
                        <Link to={"/add"} className="nav-link active text-white" aria-current="page" >
                            <button className="btn btn-outline-light" type="submit" >Add Product</button>
                        </Link>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar