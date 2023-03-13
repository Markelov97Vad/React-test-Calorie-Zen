import React, { useState } from "react";
import FoodAdder from "./FoodAdder";

function DiaryComp () {
  // const [foodList, setFoodList] = useState('');
  // const [calorieTotal, setCalorieTotal] = useState('')
  const [state, setState] = useState({
    foodList: [],
    calorieTotal: 0
  })

  const handleSubmit = (food, calories) => {
    let calorieTotal = 0;
    let newList = state.foodList.slice();
    newList.push({food, calories});
    newList.forEach((entry) => {
      console.log(typeof(entry.calories));
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
        <h2>Калории:</h2>
        <ul className="calories__list">
          {state.foodList.map((food) => (
              <li>{food.food} - {food.calories}</li>
            )
          )}
        </ul>
      </div>
      <FoodAdder handleSubmit={handleSubmit} />
    </div>
  )
}

export default DiaryComp 