import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomeList from './components/HomeUser';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeList />} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;