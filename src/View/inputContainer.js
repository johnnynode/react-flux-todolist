import React, {Component} from 'react';

import Action from '../Action';
import Store from '../Store';
import Utils from '../Utils';

import Input from './input';

class InputContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Store.getState()
    }
  }

  render() {
    return (
      <Input 
        autoFocus={true} 
        style={{margin:"10px 0",paddingLeft:5}} 
        onKeyUp={
          (e)=>{
            let val = Utils.trim(e.target.value);
            if(val && e.keyCode === 13) {
              // 设置状态机
              this.setState({
                data: Action.createItem(e.target.value)
              });
              e.target.value = "";
            }
            if(!val && e.keyCode === 13) {
              e.target.value = "";
            }
          }
        }
      />
    )
  }
}

export default InputContainer;