import {ReduceStore} from 'flux/utils';

import Constants from '../constants';
import Dispatcher from '../dispatcher';
import Utils from '../utils';

const Types = Constants.actionTypes;

class Store extends ReduceStore {
  getInitialState() {
    return []; // 默认return值
  }
  
  // 这里就是一个
  reduce(data, action) {
    switch(action.type) {
      case Types.toggleItem:
        return Utils.toggleItemList(data, action.id);
      case Types.delItem:
        return Utils.delItemList(data, action.id);
      case Types.createItem:
        return Utils.createItem(data, action.title);
      case Types.editItem:
        return Utils.editItemList(data, action.id, action.title);
      case Types.loadData:
        return action.data;
      default:
        return data;
    }
  }
}

export default new Store(Dispatcher);