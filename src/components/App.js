import React, { useState } from 'react';
import './styles/App.css';
import Header from './Header';
import Diary from './Diary';
import DiaryComp from './DiaryComp';
import Tips from './Tips';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Register from './Register';
import Login from './Login';


function App() {

  const [loggetIn, setLoggetIn] = useState(false)

  return (
    <BrowserRouter>
      <Header />
      <main className="content">
        {loggetIn && <NavBar />}
        <Routes>
          {/* <Route path="/" element={loggetIn ? <Navigate to='/diary' replace /> : <Navigate to='/login' replace/>} /> */}
          <Route path="/tips" element={<Tips />} />
          <Route path='/diary' element={<DiaryComp />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;