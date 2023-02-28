import React from 'react';
import './Diary.css';
import FoodAdder from './FoodAdder';

function Diary() {
  return (
    <div className="diary">
      <div className="calories">
        <h2>Калории:</h2>
        <ul className="calories__list">
          <li>360</li>
          <li>120</li>
        </ul>
      </div>
      <FoodAdder />
    </div>
  );
}

export default Diary;