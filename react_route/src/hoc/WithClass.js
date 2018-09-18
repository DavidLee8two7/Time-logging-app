import React, { Component } from "react";

// Using it as div with class
// const withClass = props => {
//   return <div className={props.classes}>{props.children}</div>;
// };

// Using it as function to create component
// const withClass = (WrappedComponent, className) => {
//   return props => (
//     <div className={className}>
//       <WrappedComponent {...props} />
//     </div>
//   );
// };

// Using it as function to create class component
const withClass = (WrappedComponent, className) => {
  const WithClass = class extends Component {
    render() {
      return (
        <div className={className}>
          <WrappedComponent ref={this.props.forwardedRef} {...this.props} />
        </div>
      );
    }
  };

  return React.forwardRef((props, ref) => {
    return <WithClass {...props} forwardedRef={ref} />;
  });
};

export default withClass;
