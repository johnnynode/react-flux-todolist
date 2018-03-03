import Constants from '../Constants/Constants';
import TodoDispatcher from '../Dispatcher/TodoDispatcher';

const CHANGE_TODOS = "CHANGE_TODOS";
import EventEmitter from 'events';
const _emitter = new EventEmitter();

// 1. store 存储数据
// 2. view 取数据来TodoStore取

let todos = [];

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

let TodoStore = {
  // 取数据的方法
  getTodos() {
    return todos;
  },
  addObserver(callback) {
    _emitter.on(CHANGE_TODOS, callback);
    return () => _emitter.removeListener(CHANGE_TODOS, callback);
  },
  _dispatchToken: TodoDispatcher.register((action) => {
    switch(action.type) {
      case Constants.TOGGLEITEM:
        todos = _toggleItemList(todos, action.id);
        break;
      case Constants.DELITEM:
        todos = _delItemList(todos, action.id);
        break;
      case Constants.CREATEITEM:
        todos = _createItem(todos, action.title);
        break;
      case Constants.EDITITEM:
        todos = _editItemList(todos, action.id, action.title);
        break;
      case Constants.LOADDATA:
        todos = action.todos;
        break;
      default:
        break;
    }
    _emitter.emit(CHANGE_TODOS);
  })
};

export default TodoStore;