import React, { useState } from 'react';
import { assets } from './../../assets/assets';
import axios from 'axios';
import { addFood } from '../../services/foodService';
import { toast } from 'react-toastify';
assets

const AddFood = () => {

  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'Select'
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({...data, [name]: value}));
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if(!image){
      toast.error('Please select an image.');
      return;
    }

    try {
      await addFood(data, image)
      toast.success('Food added successfully.')
      setData({name:'', description:'', category: 'Selected', price: ''});
      setImage(null)
    } catch (error) {
      toast.error('Error adding food.');
    }
  }

  return (
    <div className="mx-2 mt-2">
  <div className="row">
    <div className="card col-md-4">
      <div className="card-body">
        <h2 className="mb-4">Add Food</h2>
        <form onSubmit={onSubmitHandler}>
        <div className="mb-3">
            <label htmlFor="image" className="form-label">
                <img src={image ? URL.createObjectURL(image): assets.upload} width={98} />
            </label>
            <input type="file" className="form-control" id="image" hidden onChange={(e) => setImage(e.target.files[0])}/>
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" placeholder='Food name' className="form-control" id="name" required name='name' onChange={onChangeHandler} value={data.name} />
          </div>
        
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea placeholder='Write content here...' className="form-control" id="description" rows="5" required name='description' onChange={onChangeHandler} value={data.description}></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label" onChange={onChangeHandler} value={data.category}>Category</label>
            <select name="category" id="category" className='form-control'>
            <option value="Select">Select Category</option>
            <option value="Burguer">Burguer</option>
            <option value="Cake">Cake</option>
            <option value="Chinese">Chinese</option>
            <option value="Pizza">Pizza</option>
            <option value="Salad">Salad</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">Price</label>
            <input type="number" className="form-control" id="price" required name='price' onChange={onChangeHandler} value={data.price}/>
          </div>
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>
    </div>
  </div>
</div>
  )
}

export default AddFood