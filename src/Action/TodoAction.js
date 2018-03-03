import Constants from '../Constants/Constants';
import TodoDispatcher from '../Dispatcher/TodoDispatcher';

const TodoAction = {
  toggleItem(id) {
    TodoDispatcher.dispatch({
      id,
      type:Constants.TOGGLEITEM
    })
  },
  delItem(id) {
    TodoDispatcher.dispatch({
      id,
      type:Constants.DELITEM
    })
  },
  createItem(title) {
    TodoDispatcher.dispatch({
      title,
      type:Constants.CREATEITEM
    })
  },
  editItem(id, title) {
    TodoDispatcher.dispatch({
      id,
      title,
      type:Constants.EDITITEM
    })
  },
  loadData() {
    fetch('todos.json')
      .then((data) => data.json())
      .then((todos) => {
        TodoDispatcher.dispatch({
          todos,
          type:Constants.LOADDATA
        });
      });
  }
};

export default TodoAction;