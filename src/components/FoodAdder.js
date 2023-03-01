import React from 'react';
import './FoodAdder.css';

class FoodAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      food: '',
      calories: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (el) => {
    this.setState({
      [el.target.name]: el.target.value,
    })
  }

  handleSubmit = (el) => {
    el.preventDefault();

    this.setState({food: '', colories: ''});
    this.props.handleSubmit(this.state.food, this.state.calories);
  }

  render() {
    return (
      <form className="food-adder" onSubmit={this.handleSubmit}>
        <input name='food' onChange={this.handleChange} value={this.state.food} type="text" placeholder="Добавьте продукты" />
        <input name="calories" onChange={this.handleChange} value={this.state.calories} type="number" required placeholder="Калории" />
        <button className="food-adder__submit"></button>
      </form>
    );
  }
}

export default FoodAdder;