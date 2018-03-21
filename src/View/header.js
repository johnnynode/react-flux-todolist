import React, {Component} from 'react';

class Header extends Component {
  static get defaultProps() {
    return {
      name: "Johnny",
      bookLeft:0
    }
  }

  render() {
    const {
      name,
      bookLeft
    } = this.props;
    return (
      <div>
        <h1>React's Basic Todo List</h1>
        <div>Hello {name} , you have {bookLeft} books left to read!</div>
      </div>
    )
  }
}

export default Header;