import React, {Component} from 'react';
import Action from '../Action';
import HeaderContainer from './container/headerContainer';
import InputContainer from './container/inputContainer';
import ListContainer from './container/listContainer';

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