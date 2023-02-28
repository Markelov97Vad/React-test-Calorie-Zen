import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="menu">
      <NavLink to="/" className={({isActive}) => `menu__item ${isActive ? "menu__item_active" : ""}`}>Домой</NavLink>
      <NavLink to="/tips" className={({isActive}) => `menu__item ${isActive ? "menu__item_active" : ""}`}>Советы</NavLink>
    </nav>
  );
}

export default NavBar;