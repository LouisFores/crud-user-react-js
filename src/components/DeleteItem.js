import React from 'react';
import axios from 'axios';

const API_URL = 'https://api.example.com/items';

const DeleteItem = ({ item }) => {
  const deleteItem = async () => {
    try {
      await axios.delete(`${API_URL}/${item.id}`);
      console.log('Item deleted');
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div>
      <h1>Delete Item</h1>
      <p>
        <strong>Name:</strong> {item.name} | <strong>Price:</strong> {item.price}
      </p>
      <button onClick={deleteItem}>Delete Item</button>
    </div>
  );
};

export default DeleteItem;