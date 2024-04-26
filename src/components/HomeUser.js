import React, { useState, useEffect } from 'react';
import axios from 'axios';


function HomeList() {
  const API_URL = 'http://localhost:3001/api/users';

  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  //Gọi ra danh sách người dùng
  useEffect(() => {
    fetchUsers();
  }, []);


  //Lấy ra danh sách người dùng
  const fetchUsers = async () => {
    try {
      const response = await axios.get(API_URL);
      setUsers(response.data);
    } catch (error) {
      console.error('Lỗi không lấy được danh sách: ', error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchUsers();
    } catch (error) {
      console.error('Lỗi xoá người dùng: ', error);
    }
  };

  //Lấy ra giá trị trong input search
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  //Tìm kiếm theo danh sách bằng cách loại những phần tử không trùng
  const filteredUsers = users.filter((user) =>
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className='container'>
      <h1>Danh sách người dùng</h1>
      <div class="input-group mb-3">
        <input type="text" class="form-control" aria-label="Search email" aria-describedby="basic-addon2"
          placeholder="Search by email..."
          value={searchTerm}
          onChange={handleSearch} />
        <span class="input-group-text" id="basic-addon2">Tìm kiếm</span>
      </div>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Birthday</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <th scope="row">{user.id}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.birthday}</td>
              <td>
                <button type="button" class="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomeList;