import React, {Component} from 'react';

import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

// trim 函数
let trim = (str) => {
  return typeof str === 'string' ? str.replace(/^\s+|\s+$/g, "") : "";
};

// toggle 特定一项
let _toggleItemList = (todos, id) => {
  let target = todos.find((todo) => {
    return todo.id === id;
  });
  target.checked = !target.checked;
  return todos;
};

// 删除特定一项
let _delItemList = (todos, id) => {
  let index = todos.findIndex((todo) => {
    return todo.id === id;
  });

  // 按照索引进行删除
  (index !== -1) && todos.splice(index, 1);
  return todos;
}

// 新增代办事项
let _createItem = (todos, val) => {
  let index = todos.length ? todos[todos.length -1].id - 0 + 1 : 1;
  let json = {
    id:index,
    content:val,
    checked:false
  };
  todos.push(json);
  return todos;
}

// 编辑列表
let _editItemList = (todos, id, content) => {
  let target = todos.find((todo)=> {
    return todo.id === id;
  });
  target.content = content;
  return todos;
}

class TodoApp extends Component {
  constructor(props) {
    super(props);
    // 将数据存放在状态机中， 状态机改变, 自动刷新
    this.state = {
      todos: []
    };
  }

  render() {
    const { todos } = this.state;
    let todoCount = todos.filter((todo)=> !todo.checked).length;
    return (
      <div>
        <TodoHeader name="汪峰" todoCount={todoCount} />
        <TodoInput 
          type='text' 
          style={{width:200,height:30}} 
          placeholder="please input 2 ..." 
          autoFocus={true} 
          onKeyDown={(e)=>{
            // console.log(e);
            var val = e.target.value;
            var _val = trim(val);
            // 正常新增
            if(e.keyCode === 13 && _val) {
              // 设置状态机
              this.setState({
                todos: _createItem(todos, _val)
              });
              e.target.value = ""; // 清空原值
            }

            // 空值回车的处理
            if(e.keyCode === 13 && !_val) {
              e.target.value = ""; // 清空原值
            }
          }}
        />
        <TodoList 
          todos={todos} 
          toggleItemList={(id)=>{
            this.setState({
              todos:_toggleItemList(todos,id)
            });
          }}
          delItemList={(id)=>{
            this.setState({
              todos:_delItemList(todos,id)
            });
          }}
          editItemList={(id, content) => {
            this.setState({
              todos:_editItemList(todos, id, content)
            });
          }}
        />
      </div>
    )
  }

  componentDidMount() {
    fetch('todos.json')
    .then((data)=>{
      return data.json() // 转换数据成对象
      // data.text() // 转换数据成字符串
    })
    .then((todos)=>{
      console.log(todos);
      this.setState({
        todos
      })
    });
  }
}

export default TodoApp;