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
        <h1>My book list</h1>
        <div>Hello {name} , you have {bookLeft} {bookLeft > 1 ? "books" : "book"} left to read!</div>
      </div>
    )
  }
}

export default Header;