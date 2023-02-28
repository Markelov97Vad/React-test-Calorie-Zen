import React from 'react';
import './App.css';
import Header from './Header';
import Diary from './Diary';
import Tips from './Tips';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="content">
        <NavBar />
        <Routes>
          <Route path="/" element={<Diary />} />
          <Route path="/tips" element={<Tips />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;