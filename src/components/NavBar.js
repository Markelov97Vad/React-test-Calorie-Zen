import React from 'react';
import './styles/NavBar.css';
import { NavLink , useNavigate} from 'react-router-dom';


function NavBar(props) {

  const navigate = useNavigate();

  const sighOut = () => {
    localStorage.removeItem('jwt');
    props.handleLogout();
    navigate('/login', {replace: true})
  }

  return (
    <nav className="menu">
      <div>
        <NavLink to="/diary" className={({isActive}) => `menu__item ${isActive ? "menu__item_active" : ""}`}>Домой</NavLink>
        <NavLink to="/tips" className={({isActive}) => `menu__item ${isActive ? "menu__item_active" : ""}`}>Советы</NavLink>
      </div>
      <button onClick={sighOut} className='menu__item menu__button'>Выйти</button>
    </nav>
  );
}

export default NavBar;