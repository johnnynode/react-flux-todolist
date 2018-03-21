import React, {Component} from 'react';

import HeaderContainer from './View/headerContainer';
import InputContainer from './View/inputContainer';
import listContainer from './View/listContainer';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <InputContainer />
        <listContainer />
      </div>
    )
  }
}

export default App;