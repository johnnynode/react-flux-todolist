import React, {Component} from 'react';

class Input extends Component {
  static get defaultProps() {
    return {
      placeholder:"",
      type:"text",
      style: {width:300,height:30,outline:"none"},
      checked:false,
      autoFocus:false,
      onKeyUp: () => {},
      onBlur: () => {},
      onChange: () => {}
    } 
  }
  render() {
    return (
      <input {... this.props} />
    )
  }
}

export default Input;