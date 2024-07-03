
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
