import PropsTypes from "prop-types";
import { Component } from "react";

class MyComponent extends Component {
  static defaultProps = {
    name: "기본!",
  };
  static propTypes = {
    name: PropsTypes.string,
    favoriteNumber: PropsTypes.number.isRequired,
  };
  render() {
    const { name, favoriteNumber, children } = this.props;

    return (
      <div>
        안녕 {name} <br />
        children {children}
        <br />
        숫자 {favoriteNumber}
      </div>
    );
  }
}

// MyComponent.defaultProps = {
//   name: "기본 이름",
// };

// MyComponent.propTypes = {
//   name: PropsTypes.string,
//   favoriteNumber: PropsTypes.number.isRequired,
// };

export default MyComponent;
