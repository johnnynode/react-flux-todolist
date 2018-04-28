import Constants from '../constants';
import Dispatcher from '../dispatcher';

const Types = Constants.actionTypes;

const Action = {
  toggleItem(id) {
    Dispatcher.dispatch({
      id,
      type:Types.toggleItem
    })
  },
  delItem(id) {
    Dispatcher.dispatch({
      id,
      type: Types.delItem
    })
  },
  createItem(title) {
    Dispatcher.dispatch({
      title,
      type: Types.createItem
    });
  },
  editItem(id, title) {
    Dispatcher.dispatch({
      id,
      title,
      type:Types.editItem
    });
  },
  loadData() {
    fetch('books.json')
    .then((data)=>data.json())
    .then((data)=>{
      Dispatcher.dispatch({
        data,
        type:Types.loadData
      });
    })
  }
}

export default Action;