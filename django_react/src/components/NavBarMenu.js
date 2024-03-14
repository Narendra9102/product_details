import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const NavBarMenu = () => {
  return (
    <div>
        <Navbar>
            <Navbar.Brand href='' >Products</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Nav>
                <NavLink className="show-products-nav" to='/' >Products</NavLink>
                <NavLink className="add-product-nav" to='/addProduct' >Add Product</NavLink>
            </Nav>
        </Navbar>
    </div>
  )
}
