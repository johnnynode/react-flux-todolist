import React, {Component} from 'react';
import TodoInput from "./TodoInput";

import TodoAction from '../Action/TodoAction';
import TodoStore from '../Store/TodoStore';

// trim 函数
let trim = (str) => {
  return typeof str === 'string' ? str.replace(/^\s+|\s+$/g, "") : "";
};

class TodoInputContainer extends Component {
  constructor(props) {
    super(props);
    // 将数据存放在状态机中, 状态机改变, 自动刷新
    this.state = {
      todos: TodoStore.getState()
    };
  }

  render() {
    return (
      <TodoInput 
        type='text' 
        style={{width:200,height:30}} 
        placeholder="please input 2 ..." 
        autoFocus={true} 
        onKeyDown={(e)=>{
          var val = e.target.value;
          var _val = trim(val);
          // 正常新增
          if(e.keyCode === 13 && _val) {
            // 设置状态机
            this.setState({
              todos: TodoAction.createItem(e.target.value)
            });
            e.target.value = ""; // 清空原值
          }

          // 空值回车的处理
          if(e.keyCode === 13 && !_val) {
            e.target.value = ""; // 清空原值
          }
        }}
      />
    )
  }

}

export default TodoInputContainer;