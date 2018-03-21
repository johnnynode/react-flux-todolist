import React, {Component} from 'react';
import Action from '../Action';
import HeaderContainer from './Container/header-container';
import InputContainer from './Container/input-container';
import ListContainer from './Container/list-container';

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