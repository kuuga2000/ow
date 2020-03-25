import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import InputComponent from './components/InputComponent';
import OutputComponent from './components/OutputComponent';
class App extends Component {
  state = {
    username : "Anton",
  }
  inputUsername = (event) => {
    this.setState({
      username:event.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <InputComponent changed={this.inputUsername} currentUsername={this.state.username} />
        <OutputComponent username={this.state.username} />
      </div>
    );
  }
}

export default App;
