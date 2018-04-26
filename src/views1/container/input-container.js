import React, {Component} from 'react';
import Action from '../../action';
import Store from '../../store';
import Utils from '../../utils';
import Input from '../templates/input';

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
        style={{width:300,height:30,outline:"none",margin:"10px 0",paddingLeft:5}} 
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