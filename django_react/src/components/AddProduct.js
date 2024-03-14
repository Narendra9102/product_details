import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const history = useNavigate();

  const AddProductInfo = async () => {
    let formField = new FormData();

    formField.append('name', name);
    formField.append('price', price);
    formField.append('description', description);
    formField.append('category', category);

    if (image !== null) {
      formField.append('image', image);
    }

    await axios({
      method: 'post',
      url: 'http://localhost:8000/api/',
      data: formField,
    }).then((response) => {
      console.log(response.data);
      history('/'); // Use the navigate function like this
    });
  };

  return (
    <div className='container'>
      <h1>Add Product</h1>

      <form encType="multipart/form-data">
        <div className='form-group'><br/>
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

        <button className='btn btn-success' type='button' onClick={AddProductInfo}>
          Add Product
        </button>
      </form>
    </div>
  );
};
