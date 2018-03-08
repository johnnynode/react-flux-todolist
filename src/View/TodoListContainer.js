import React, {Component} from 'react';
import TodoList from "./TodoList";

import TodoAction from '../Action/TodoAction';
import TodoStore from '../Store/TodoStore';
import {Container} from 'flux/utils';

class TodoListContainer extends Component {
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
    return (
      <TodoList 
          todos={todos} 
          toggleItemList={TodoAction.toggleItem}
          delItemList={TodoAction.delItem}
          editItemList={TodoAction.editItem}
        />
    )
  }
}

export default Container.create(TodoListContainer);