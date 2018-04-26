import Constants from '../constants';
import Dispatcher from '../dispatcher';

const Action = {
  toggleItem(id) {
    Dispatcher.dispatch({
      id,
      type:Constants.toggleItem
    })
  },
  delItem(id) {
    Dispatcher.dispatch({
      id,
      type: Constants.delItem
    })
  },
  createItem(title) {
    Dispatcher.dispatch({
      title,
      type: Constants.createItem
    });
  },
  editItem(id, title) {
    Dispatcher.dispatch({
      id,
      title,
      type:Constants.editItem
    });
  },
  loadData() {
    fetch('books.json')
    .then((data)=>data.json())
    .then((data)=>{
      Dispatcher.dispatch({
        data,
        type:Constants.loadData
      });
    })
  }
}

export default Action;