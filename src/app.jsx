import React, { Component } from "react";
import "./app.css";
import Button1 from "./components/button1";
import Button2 from "./components/button2";
import Habits from "./components/habits";
import Navbar from "./components/navbar";

export class App extends Component {
  state = {
    habits: [
      { id: 3, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 1, name: "Coding", count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDecreasement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  handleAdd = (name) => {
    const habit = {
      id: Date.now(),
      name: name,
      count: 0,
    };
    const habits = [habit, ...this.state.habits];
    this.setState({ habits });
  };

  handleReset = () => {
    const habits = this.state.habits.map((habit) => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });
    this.setState({ habits });
  };

  render() {
    console.log("");
    console.log("App");
    return (
      <>
        <Button1></Button1>
        <Button2></Button2>
      </>
      // <>
      //   <Navbar
      //     totalCount={this.state.habits.filter((item) => item.count > 0).length}
      //   />
      //   <Habits
      //     habits={this.state.habits}
      //     onIncrement={this.handleIncrement}
      //     onDecrement={this.handleDecreasement}
      //     onDelete={this.handleDelete}
      //     onAdd={this.handleAdd}
      //     onReset={this.handleReset}
      //   />
      // </>
    );
  }
}

export default App;
