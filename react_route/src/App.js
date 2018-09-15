import React, { Component } from "react";
import "./App.css";

import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "David", age: 37 },
      { name: "John", age: 24 },
      { name: "Jaehoon", age: 18 }
    ],
    showPeople: false
  };

  toggleHandler = () => {
    const doesShow = this.state.showPeople;
    this.setState({ showPeople: !doesShow });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "David", age: 27 },
        { name: "John", age: 14 },
        { name: "Jaehoon", age: 8 }
      ]
    });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    const style = {
      backgroundColor: "pink",
      font: "inherit",
      border: "2px solid #000"
    };

    let people = null;

    if (this.state.showPeople) {
      people = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App person">
        <div>
          <h1>Hi, I'm a React app</h1>
          <p>This is really working!</p>
        </div>

        <button style={style} onClick={this.toggleHandler}>
          person
        </button>
        {people}
      </div>
    );
  }
}

export default App;
