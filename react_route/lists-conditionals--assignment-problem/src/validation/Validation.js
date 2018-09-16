import React from "react";

const Validation = props => {
  let long = "text is long enought";

  if (props.inputLength <= 5) {
    long = "it too short";
  }

  return (
    <div>
      <p>{long}</p>
    </div>
  );
};

export default Validation;
