import React, { Component } from 'react';
import GameScreen from './GameScreen';

class StartGameScreen extends Component {
  state = {
    length: '',
    height: '',
    winBoxes: '',
    sub: false
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = () => {
    this.setState({ sub: !this.state.sub });
  };

  render() {
    const checkFilled =
      this.state.length &&
      this.state.height &&
      Number(this.state.winBoxes) > 1 &&
      Number(this.state.winBoxes) < 4;

    const RenderItems = !this.state.sub ? (
      <div>
        <label>Column: </label>
        <input
          type='text'
          name='length'
          value={this.state.lenVal}
          onChange={this.handleChange}
        />
        <br />
        <label>Row: </label>
        <input
          type='text'
          name='height'
          value={this.state.heiVal}
          onChange={this.handleChange}
        />
        <br />
        <br />
        <p style={{ color: 'red' }}>
          Num of Win boxes should be between 2 to 4
        </p>
        <label>Num of Win: </label>
        <input
          type='text'
          name='winBoxes'
          value={this.state.num}
          onChange={this.handleChange}
        />
        <br />
        <br />
        <button
          onClick={this.handleSubmit}
          disabled={!checkFilled}
          type='submit'>
          START
        </button>
      </div>
    ) : (
      <GameScreen
        column={this.state.length}
        row={this.state.height}
        winboxes={this.state.winBoxes}
        reset={this.handleSubmit}
      />
    );

    return <div>{RenderItems}</div>;
  }
}

export default StartGameScreen;
