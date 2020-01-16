import React, { Component } from 'react';
import Status from '../components/Status';

class GameScreen extends Component {
  state = {
    board: Array(this.props.row * this.props.column).fill(null),
    player: 'X',
    winner: null
  };

  checkWinner() {
    let winLines = [
      ['0', '1', '2'],
      ['3', '4', '5'],
      ['6', '7', '8'],
      ['0', '3', '6'],
      ['1', '4', '7'],
      ['2', '5', '8'],
      ['0', '4', '8'],
      ['2', '4', '6']
    ];
    if (this.props.winboxes === '2') {
      winLines = [
        ['0', '1'],
        ['2', '3'],
        ['1', '3'],
        ['0', '2'],
        ['0', '3'],
        ['1', '2']
      ];
    }
    this.checkMatch(winLines);
  }

  checkMatch(winLines) {
    let board = this.state.board;
    const numOfWinBoxes = Number(this.props.winboxes);

    for (let index = 0; index < winLines.length; index++) {
      const [a, b, c] = winLines[index]; // moyveba pirveli sameulidan yvlas
      let WinRules = null;

      if (numOfWinBoxes && numOfWinBoxes === 2) {
        WinRules = board[a] && board[a] === board[b];
      } else if (numOfWinBoxes && numOfWinBoxes === 3) {
        WinRules = board[a] && board[a] === board[b] && board[a] === board[c];
      }
      if (WinRules) {
        this.setState({
          winner: this.state.player
        });
        alert('You won !');
      }
    }
    var isAtLeastOneNull = board.some(function(i) {
      return i === null;
    });
    if (!isAtLeastOneNull) {
      alert('Draw !');
    }
  }

  handleClick(index) {
    if (!this.state.winner) {
      let newBoard = this.state.board;
      if (this.state.board[index] === null) {
        //tu dacherili ar gvaqvs
        newBoard[index] = this.state.player; //ujras enicheba eg simbolo
        this.setState({
          board: newBoard,
          player: this.state.player === 'X' ? 'O' : 'X' // ketze iqneba X luw dawkapebaze O
        });
        this.checkWinner();
      }
    }
  }

  renderBoxes() {
    const BoxStyle = {
      width: '80px',
      height: '80px',
      border: '1px solid black',
      display: 'inline-block',
      lineHeight: '80px'
    };
    return this.state.board.map((box, index) => (
      <div style={BoxStyle} key={index} onClick={() => this.handleClick(index)}>
        {box}
      </div>
    ));
  }

  handleReset() {
    this.setState({
      player: null,
      winner: null,
      board: Array(this.props.row * this.props.column).fill(null)
    });
    this.props.reset();
  }

  render() {
    const BoardStyle = {
      display: 'flex',
      flexWrap: 'wrap',
      marginLeft: '45%',
      width: `${this.props.column * 80 + 80}px`
    };

    return (
      <div>
        <Status player={this.state.player} winner={this.state.winner} />
        {!this.state.winner ? (
          <div style={BoardStyle}>{this.renderBoxes()}</div>
        ) : null}
        <button onClick={() => this.handleReset()}>Reset</button>
      </div>
    );
  }
}

export default GameScreen;
