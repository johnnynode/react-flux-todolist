import React, {Component} from 'react';
import {Container} from 'flux/utils';
import Store from '../../Store';
import Header from '../Templates/header';

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