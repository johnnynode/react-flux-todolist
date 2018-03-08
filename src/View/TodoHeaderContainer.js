import React, {Component} from 'react';
import TodoHeader from "./TodoHeader";

import TodoStore from '../Store/TodoStore';
import {Container} from 'flux/utils';

class TodoHeaderContainer extends Component {
  /*
  constructor(props) {
    super(props);
    // 将数据存放在状态机中, 状态机改变, 自动刷新
    this.state = {
      todos: TodoStore.getState()
    };
  }

  componentDidMount() {
    this.addObserver = TodoStore.addListener(()=>{
      this.setState({
        todos:TodoStore.getState()
      });
    });
  }
  
  componentWillUnmount() {
    this.addObserver();
  }
  */

  static getStores() {
    return [TodoStore];
  }

  static calculateState(prevState) {
    return {
      todos: TodoStore.getState()
    }
  }

  render() {
    const { todos } = this.state;
    let todoCount = todos.filter((todo) => !todo.checked).length;
    
    return (
      <TodoHeader name="汪峰" todoCount={todoCount} />
    )
  }
}

export default Container.create(TodoHeaderContainer); 