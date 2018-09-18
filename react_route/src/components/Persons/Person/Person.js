import React, { Component } from "react";
import PropTypes from "prop-types";

import classes from "./person.css";
import Aux from "../../../hoc/Aux";
import withClass from "../../../hoc/WithClass";

class Person extends Component {
  constructor(props) {
    super(props);
    console.log("[Person.js] Inside Constructor", props);
  }

  componentWillMount() {
    console.log("[Person.js] Inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[Person.js] Inside componentDidMount()");
  }

  render() {
    console.log("[Person.js] Inside render()");

    return (
      <Aux>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old.
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
    // React 16+ let you use array with components without a container
    // return [
    //   <p onClick={this.props.click}>
    //     I'm {this.props.name} and I am {this.props.age} years old.
    //   </p>
    //   <p>{this.props.children}</p>
    //   <input
    //     type="text"
    //     onChange={this.props.changed}
    //     value={this.props.name}
    //   />
    // ]
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  chaged: PropTypes.func
};

export default withClass(Person, classes.person);
