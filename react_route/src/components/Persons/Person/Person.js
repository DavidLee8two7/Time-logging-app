import React, { Component } from "react";
import classes from "./person.css";

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

    // return (
    //   <div className={classes.person}>
    //     <p onClick={this.props.click}>
    //       I'm {this.props.name} and I am {this.props.age} years old.
    //     </p>
    //     <p>{this.props.children}</p>
    //     <input
    //       type="text"
    //       onChange={this.props.changed}
    //       value={this.props.name}
    //     />
    //   </div>
    // );

    return [
      <p key="hio" onClick={this.props.click}>
        I'm {this.props.name} and I am {this.props.age} years old.
      </p>,
      <p key="hiwefo">{this.props.children}</p>,
      <input
        key="hwefwio"
        type="text"
        onChange={this.props.changed}
        value={this.props.name}
      />
    ];
  }
}

export default Person;
