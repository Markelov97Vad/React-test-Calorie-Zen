import React, { useState } from 'react';
import './styles/App.css';
import Header from './Header';
import DiaryComp from './DiaryComp';
import Tips from './Tips';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './NavBar';
import Register from './Register';
import Login from './Login';
import ProtectedRouteElement from './ProtectedRouteElement';


function App() {

  const [loggetIn, setLoggetIn] = useState(false)

  return (
    <BrowserRouter>
      <Header />
      <main className="content">
        {loggetIn && <NavBar />}
        <Routes>
          <Route path="/" element={loggetIn ? <Navigate to='/diary' replace /> : <Navigate to='/login' replace/>} />
          <Route path="/tips" element={<ProtectedRouteElement element={Tips}  loggetIn={loggetIn}/>} />
          <Route path='/diary' element={<ProtectedRouteElement element={DiaryComp}  loggetIn={loggetIn}/>} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;