import React, { Component } from 'react';
import './App.css';
import StartGameScreen from './screens/StartGameScreen';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Tic Tac Toe App</h1>
        <StartGameScreen />
      </div>
    );
  }
}

export default App;
