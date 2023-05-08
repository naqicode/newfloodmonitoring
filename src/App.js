import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import './App.css';
import Navbar from './navbar/Navbar';
import Main from './components/Main';


function App() {
  return (
    <div>

      <React.StrictMode>
        <Router>
        <Navbar />
          <Routes>
          <Route path='/' element={<Main />} />
          </Routes>
        </Router>
      </React.StrictMode>

    </div>
  );
}

export default App;