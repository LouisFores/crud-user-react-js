import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const ItemList = () => {
  const API_URL = 'https://6614deef2fc47b4cf27d4a5f.mockapi.io/api/v1/users';

  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get(API_URL);
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const deleteItem = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchItems(); // Fetch items again after deleting
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='container'>
      <h1>Item List</h1>
      <div class="input-group mb-3">
        <input type="text" class="form-control" aria-label="Search username" aria-describedby="basic-addon2"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={handleSearch} />
        <span class="input-group-text" id="basic-addon2">Search</span>
      </div>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Color</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.name}</td>
              <td>{item.color}</td>
              <td>{item.category}</td>
              <td>{item.price}</td>
              <td>
                <Link to={`/update/${item.id}`}>
                  <button type="button" class="btn btn-info">Update</button>
                </Link>
                <button type="button" class="btn btn-danger" onClick={() => deleteItem(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemList;