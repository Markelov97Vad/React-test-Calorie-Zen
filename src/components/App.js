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
import * as auth from '../auth.js';
import * as calData from '../calData.js'

function App() {

  const [loggetIn, setLoggetIn] = useState(false);
  const [calGoal, setCalGoal] = useState(false)
  const navigate = useNavigate();

  const handleLogin = () => {
    setLoggetIn(true);
  }

  const handleLogout = () => {
    setLoggetIn(false);
  }

  useEffect(() => {
    handleTockenCheck();
  }, [])

  const handleTockenCheck = () => {
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt')
      auth.checkToken(jwt).then(res => {
        let calGoal = 0;
        calData.calData.forEach( goal => {
          if(goal.id === res.ru_cal_goal) {
            calGoal = goal.calGoal;
          }
        });
        if (res) {
          setLoggetIn(true);
          setCalGoal(calGoal)
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
        {loggetIn && <NavBar handleLogout={handleLogout}/>}
        <Routes>
          <Route path="/" element={loggetIn ? <Navigate to='/diary' replace /> : <Navigate to='/login' replace/>} />
          <Route path="/tips" element={<ProtectedRouteElement element={Tips }  loggetIn={loggetIn}/>} />
          <Route path='/diary' element={<ProtectedRouteElement element={DiaryComp} calGoal={calGoal} loggetIn={loggetIn}/>} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login handleLogin={handleLogin} />} />
        </Routes>
      </main>
    </>
  );
}

export default App;