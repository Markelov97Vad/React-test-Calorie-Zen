import React, { useState } from "react";
import FoodAdder from "./FoodAdder";
import './styles/Diary.css'

function DiaryComp (props) {
  const [state, setState] = useState({
    foodList: [],
    calorieTotal: 0
  })

  const handleSubmit = (food, calories) => {
    let calorieTotal = 0;
    let newList = state.foodList.slice();
    newList.push({food, calories});
    newList.forEach((entry) => {
      calorieTotal = calorieTotal + parseInt(entry.calories);
    });
    setState({
      foodList: newList,
      calorieTotal
    })

  }

  return (
    <div className="diary">
      <div className="calories">
        <h2>Цель на день: {props.calGoal}</h2>
        <h2>Калории: {state.calorieTotal}</h2>
        <ul className="calories__list">
          {state.foodList.map((food, i) => (
              <li key={i}>{food.food} - {food.calories}</li>
            )
          )}
        </ul>
      </div>
      <FoodAdder handleSubmit={handleSubmit} />
    </div>
  )
}

export default DiaryComp 