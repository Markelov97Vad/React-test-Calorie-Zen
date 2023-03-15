import React, { useEffect, useState } from 'react';
import './styles/App.css';
import Header from './Header';
import DiaryComp from './DiaryComp';
import Tips from './Tips';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import Register from './Register';
import Login from './Login';
import ProtectedRouteElement from './ProtectedRouteElement';
import * as auth from '../auth.js'


function App() {

  const [loggetIn, setLoggetIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setLoggetIn(true);
  }

  useEffect(() => {
    handleTockenCheck();
  }, [])

  const handleTockenCheck = () => {
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt')
      auth.checkToken(jwt).then(res => {
        if (res) {
          setLoggetIn(true);
          navigate('/diary', {replace: true})
        }
      })
      return (err) => {
        console.log(`отсутствует tocken ${err}`)
      }
    }
  }

  return (
    <>
      <Header />
      <main className="content">
        {loggetIn && <NavBar />}
        <Routes>
          <Route path="/" element={loggetIn ? <Navigate to='/diary' replace /> : <Navigate to='/login' replace/>} />
          <Route path="/tips" element={<ProtectedRouteElement element={Tips }  loggetIn={loggetIn}/>} />
          <Route path='/diary' element={<ProtectedRouteElement element={DiaryComp}  loggetIn={loggetIn}/>} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login handleLogin={handleLogin} />} />
        </Routes>
      </main>
    </>
  );
}

export default App;