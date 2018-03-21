import React, {Component} from 'react';
import {Container} from 'flux/utils';

import Action from '../Action';
import Store from '../Store';

import List from './list';

class ListContainer extends Component {
  static getStores() {
    return [Store];
  }

  static calculateState() {
    return {
      data: Store.getState()
    }
  }

  render() {
    const {
      data
    } = this.state;

    return (
      <List 
        bookList={data} 
        toggleItemList={Action.toggleItem}
        delItemList={Action.delItem}
        editItemList={Action.editItem}
      />
    )
  }
}

export default Container.create(ListContainer);