import React, {Component} from 'react';

import TodoAction from '../Action/TodoAction'

import TodoHeaderContainer from "./TodoHeaderContainer";
import TodoInputContainer from "./TodoInputContainer";
import TodoListContainer from "./TodoListContainer";

class TodoApp extends Component {
  render() {
    return (
      <div>
        <TodoHeaderContainer />
        <TodoInputContainer />
        <TodoListContainer />
      </div>
    )
  }

  componentDidMount() {
    TodoAction.loadData();
  }
}

export default TodoApp;