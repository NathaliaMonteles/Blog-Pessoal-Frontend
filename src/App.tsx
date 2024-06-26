/* import React from 'react';
import './App.css';
import Home from './paginas/home/Home';

function App() {
  return (
    <>
    <h1>Home</h1>
    </>
);
}
export default App; */

import React from 'react';
import './App.css';
import Home from './paginas/home/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './paginas/home/login/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;