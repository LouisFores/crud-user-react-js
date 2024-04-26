import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ItemList from './components/ItemList';
import CreateItem from './components/CreateItem';
import UpdateItem from './components/UpdateItem';
import DeleteItem from './components/DeleteItem';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/create" element={<CreateItem />} />
          <Route path="/update/:id" element={<UpdateItem />} />
          <Route path="/delete/:id" element={<DeleteItem />} />
          <Route path="/home" element={<ItemList />} />
        </Routes>

        <div className='container'>
          <Link to="/home">Item List</Link>
          <br></br>
          <Link to="/create">Create Item</Link>
        </div>
        
      </Router>
    </>
  );
}

export default App;