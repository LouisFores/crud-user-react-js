import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'https://6614deef2fc47b4cf27d4a5f.mockapi.io/api/v1/users';

const CreateItem = () => {
  const [newItem, setNewItem] = useState({
    name: '',
    color: '',
    category: '',
    price: ''
  });

  const createItem = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(API_URL, newItem);
      console.log('Item created:', response.data);
      setNewItem({
        name: '',
        color: '',
        category: '',
        price: ''
      });
    } catch (error) {
      console.error('Error creating item:', error);
    }
  };

  return (

    <div class="container">
      <h1>Create Item</h1>
      <form onSubmit={createItem}>
        <div class="mb-3 row">
          <label for="name" class="col-sm-2 col-form-label">Name</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="name"
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              placeholder="Enter item name" />
          </div>
        </div>

        <div class="mb-3 row">
          <label for="color" class="col-sm-2 col-form-label">Color</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="color"
              value={newItem.category}
              onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
              placeholder="Enter item category" />
          </div>
        </div>

        <div class="mb-3 row">
          <label for="category" class="col-sm-2 col-form-label">Category</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="category"
              value={newItem.color}
              onChange={(e) => setNewItem({ ...newItem, color: e.target.value })}
              placeholder="Enter item color" />
          </div>
        </div>

        <div class="mb-3 row">
          <label for="price" class="col-sm-2 col-form-label">Price</label>
          <div class="col-sm-10">
            <input type="number" class="form-control" id="number"
              value={newItem.price}
              onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
              placeholder="Enter item price" />
          </div>
        </div>

        <div class="mb-3 row">
          <label for="price" class="col-sm-2 col-form-label"></label>
          <div class="col-sm-10">
          <button type="submit" class="btn btn-primary">Create</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateItem;