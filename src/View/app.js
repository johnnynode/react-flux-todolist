import React, {Component} from 'react';
import Action from '../Action';
import HeaderContainer from './container/header-container';
import InputContainer from './container/input-container';
import ListContainer from './container/list-container';

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