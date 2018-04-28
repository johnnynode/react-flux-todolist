import React, {Component} from 'react';
import Action from '../action';
import HeaderContainer from '../views/container/header';
import InputContainer from '../views/container/input';
import ListContainer from '../views/container/list';

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