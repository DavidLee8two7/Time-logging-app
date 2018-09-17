import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "David", age: 37 },
      { id: "2", name: "John", age: 24 },
      { id: "3", name: "Jaehoon", age: 18 }
    ],
    showPersons: false
  };

  toggleHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
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

    if (this.state.showPersons) {
      people = (
        <Persons
          persons={this.state.persons}
          clicked={this.deleteHandler}
          changed={this.changeHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.toggleHandler}
        />
        {people}
      </div>
    );
  }
}

export default App;
