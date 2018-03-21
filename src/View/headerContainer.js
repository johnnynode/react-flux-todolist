import React, {Component} from 'react';

import Store from '../Store';
import {Container} from 'flux/utils';

import Header from './header';

class HeaderContainer extends Component {
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

    let bookLeft =  data.filter((item) => !item.checked).length;

    return (
      <Header name="John" bookLeft={bookLeft} />
    )
  }
}

export default Container.create(HeaderContainer);