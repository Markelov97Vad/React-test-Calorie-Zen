import React from 'react';
import './Diary.css';
import FoodAdder from './FoodAdder';

class Diary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foodList: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = (food, calories) => {
    let newList = this.state.foodList.slice();
    newList.push({food, calories});
    this.setState({
      foodList: newList
    }, () => {console.log(this.state)});
  }
  render(){
    return (
      <div className="diary">
        <div className="calories">
          <h2>Калории:</h2>
          <ul className="calories__list">
            {this.state.foodList.map((food) => (
                <li>{food.food} - {food.calories}</li>
              )
            )}
          </ul>
        </div>
        <FoodAdder handleSubmit={this.handleSubmit} />
      </div>
  );
  }

}

export default Diary;