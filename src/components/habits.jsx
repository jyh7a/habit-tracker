import React, { Component } from "react";
import HabitAddForm from "./habitAddForm";
import Habit from "./habit";

export class Habits extends Component {
  render() {
    console.log("Habits");
    return (
      <>
        <HabitAddForm onAdd={this.props.onAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              habit={habit}
              key={habit.id}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            ></Habit>
          ))}
        </ul>
        <button className="habits-reset" onClick={this.props.onReset}>
          Reset All
        </button>
      </>
    );
  }
}

export default Habits;
