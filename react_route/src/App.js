import React, { Component } from "react";
import "./App.css";
import Radium from "radium";
import Person from "./Person/Person";

// needs id for the key attribute for the list
class App extends Component {
  state = {
    persons: [
      { id: "1", name: "David", age: 37 },
      { id: "2", name: "John", age: 24 },
      { id: "3", name: "Jaehoon", age: 18 }
    ],
    showPeople: false
  };

  // how to use boolean for toggle
  toggleHandler = () => {
    const doesShow = this.state.showPeople;
    this.setState({ showPeople: !doesShow });
  };

  changeHandler = (event, personId) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === personId;
    });
    // creating brand new object
    // const person = Object.assign({}, this.state.persons[personIndex]);
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    // creating brand new array
    const people = [...this.state.persons];
    people[personIndex] = person;
    // replacing it with brand new state
    this.setState({ persons: people });
  };

  // immutable
  deleteHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    const style = {
      backgroundColor: "pink",
      font: "inherit",
      border: "2px solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black"
      }
    };

    // to render conditionally
    let people = null;
    // just by using JavaScript
    if (this.state.showPeople) {
      people = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deleteHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.changeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "green";
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "black"
      };
    }

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App person">
        <div>
          <h1>Hi, I'm a React app</h1>
          <p className={classes.join(" ")}>This is really working!</p>
        </div>

        <button style={style} onClick={this.toggleHandler}>
          person
        </button>
        {people}
      </div>
    );
  }
}

export default Radium(App);
