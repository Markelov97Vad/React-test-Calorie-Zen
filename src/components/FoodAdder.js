import React, { useState } from 'react';
import './styles/FoodAdder.css';

function FoodAdder (props) {
  
  const [formValue, setFormValue] = useState({
    food: '',
    calories: ''
  });

  const handleChange = (el) => {
    const {name, value} = el.target
    setFormValue({
      ...formValue,
      [name]: value,
    })
  }

  const handleSubmit = (el) => {
    el.preventDefault();

    setFormValue({food: '', calories: ''});
    props.handleSubmit(formValue.food, formValue.calories);
  }

    return (
      <form className="food-adder" onSubmit={handleSubmit}>
        <input name='food' onChange={handleChange} value={formValue.food} type="text" placeholder="Добавьте продукты" />
        <input name="calories" onChange={handleChange} value={formValue.calories} type="number" required placeholder="Калории" />
        <button className="food-adder__submit"></button>
      </form>
    );
}

export default FoodAdder;