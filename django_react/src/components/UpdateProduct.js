import axios from 'axios';
import React, { useState , useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export const UpdateProduct = () => {

  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const history = useNavigate();
  const { id } = useParams();

  const loadProducts = async () => {
    const { data } = await axios.get(`http://localhost:8000/api/${id}/`);
    console.log(data)
    setImage(data.image)
    setName(data.name)
    setPrice(data.price)
    setDescription(data.description)
    setCategory(data.category)

  }

  useEffect(() => {
    loadProducts()
  },[id])

  const UpdateProductInfo = async () =>{
    let formField = new FormData()
    formField.append('name',name)
    formField.append('price',price)
    formField.append('description',description)
    formField.append('category',category)
    
    if(image !== null){
      formField.append('image',image)
    }

    await axios({
      method: 'PUT',
      url: `http://localhost:8000/api/${id}/`,
      data: formField
    }).then(response => {
      console.log(response.data);
      history('/');
    })
  }


  return (
    <div>
      <h1>Update Product</h1>

      <form encType="multipart/form-data">
        <div className='form-group'><br/>
        <img src={image} alt='' height="300" width="150" /><br></br>
          <label>Select Image and Upload</label>
          <input
            type='file'
            className='form-control form-control-lg'
            name='image'
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div><br/>

        <div className='form-group'>
          <input
            type='text'
            className='form-control form-control-lg'
            placeholder='Enter Product name'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div><br/>

        <div className='form-group'>
          <input
            type='text'
            className='form-control form-control-lg'
            placeholder='Enter Product price'
            name='price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div><br/>

        <div className='form-group'>
          <input
            type='text'
            className='form-control form-control-lg'
            placeholder='Enter Product description'
            name='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div><br/>

        <div className='form-group'>
          <input
            type='text'
            className='form-control form-control-lg'
            placeholder='Enter Product category'
            name='category'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div><br/>

        <button className='btn btn-success' type='button' onClick={UpdateProductInfo}>
          Update Product
        </button>
      </form>
    </div>
  )
}