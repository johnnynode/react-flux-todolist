import React, {Component} from 'react';

import Action from './Action';

import HeaderContainer from './View/headerContainer';
import InputContainer from './View/inputContainer';
import ListContainer from './View/listContainer';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <InputContainer />
        <ListContainer />
      </div>
    )
  }
  componentDidMount() {
    Action.loadData();
  }
}

export default App;