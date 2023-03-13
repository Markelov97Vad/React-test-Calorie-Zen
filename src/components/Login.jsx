import React, { useState } from "react";
import { Link } from "react-router-dom";
import './styles/Login.css'

function Login () {

  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  const [ formValue, setFormValue] = useState({
    username: '',
    password: ''
  })

  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="login">
      <p className="login__welcome">
        Добро пожаловать!
      </p>
      <form className="login__form" onSubmit={handleSubmit}>
        <label htmlFor="username">
         Логин:
        </label>
        <input id="username" name="username" type='text' value={formValue.username} onChange={handleChange} required/>
        <label htmlFor="password">
          Пароль:
        </label>
        <input id="password" name='password' type='password' value={formValue.password} onChange={handleChange} required/>
        <div className="login__button-container">
          <button type="submit" className="login__link">Войти</button>
        </div>
      </form>
      <div className="login__signup">
        <p>Ещё не зарегестрированы?</p>
        <Link to='/register' className="signup__link">Зарегистрироваться</Link>
      </div>
    </div>
  )
}

export default Login