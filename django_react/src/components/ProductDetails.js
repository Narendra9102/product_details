import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export const ProductDetails = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();
  const history = useNavigate();

  useEffect(() => {
    const getSingleProduct = async () => {
      try {
        const { data } = await axios.get(`http://127.0.0.1:8000/api/${id}/`);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    getSingleProduct();
  }, [id]);

  const deleteProduct = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/api/${id}/`)
    history('/')
  } 

  return (
    <div>
      <h1>Product Details</h1>
      <div className='single-product-info'>
        <img src={product.image} alt={product.name} style={{ maxHeight: '400px', maxWidth: '100%',}} />
        <p>Name: {product.name}</p>
        <p className='product-price-info'>Price: {product.price}</p>
        <p>Description: {product.description}</p>
        <p className='product-category-info'>Category: {product.category}</p>

        <Link className='btn btn-primary m-2' to={`/${product.id}/update`}> Update </Link>
        <Link className='btn btn-danger m-2'onClick={() => deleteProduct(product.id)}> Delete </Link>
      </div>
    </div>
  );
};
