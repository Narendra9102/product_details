import axios from 'axios'
import React,{ useState, useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const ShowProducts = () => {
    const [products, setProducts] = useState([])
    const getProducts = async () =>{
        const response = await axios.get('http://localhost:8000/api/')
        setProducts(response.data)
    }

    useEffect(()=>{
        getProducts();
    },[])


  return (
    <div>
        <h1>Product Details</h1>

        <div className='products-grid'>
        {
            products.map((product,index) =>(
                <Card key={index} className='products-card rounded shadow-lg' style={{width: '18rem'}}>
                    <Card.Img variant='top' src={product.image} />
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>

                        <Card.Text className='product-price-info'>${product.price}</Card.Text>

                        <Card.Text className='product-category-info'>{product.category}</Card.Text>

                        <Link className='btn btn-primary' to={`/${product.id}/`}> Details </Link>
                    </Card.Body>
                </Card>
            )
            )
        }
        </div>

    </div>
  )
}
