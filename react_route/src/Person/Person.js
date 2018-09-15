import React from "react";

import "./person.css";

const Person = props => {
  return (
    <div className="person">
      <p onClick={props.click}>
        I'm {props.name}. My age is {props.age}.
      </p>
      <p>I am children. {props.children}</p>
      <input type="text" placeholder={props.name} />
    </div>
  );
};

export default Person;
