import React, { Component } from "react";
import classes from "./App.css";
import Person from "../components/Persons/Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "David", age: 37 },
      { id: "2", name: "John", age: 24 },
      { id: "3", name: "Jaehoon", age: 18 }
    ],
    showPeople: false
  };

  toggleHandler = () => {
    const doesShow = this.state.showPeople;
    this.setState({ showPeople: !doesShow });
  };

  changeHandler = (event, personId) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === personId;
    });

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

  deleteHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    let people = null;
    let btnClass = "";

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
      btnClass = classes.Red;
    }

    const assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <div>
          <h1>Hi, I'm a React app</h1>
          <p className={assignedClasses.join(" ")}>This is really working!</p>
        </div>

        <button className={btnClass} onClick={this.toggleHandler}>
          person
        </button>
        {people}
      </div>
    );
  }
}

export default App;
