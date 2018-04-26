import React, {Component} from 'react';
import Action from '../action';
import HeaderContainer from '../views/container/header-container';
import InputContainer from '../views/container/input-container';
import ListContainer from '../views/container/list-container';

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