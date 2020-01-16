import React, { Component } from 'react';

class Status extends Component {
  OutputData() {
    if (this.props.winner) {
      return <h2>Winner is {this.props.winner}</h2>;
    } else {
      return this.props.player ? (
        <h2>Next player is {this.props.player}</h2>
      ) : null;
    }
  }
  render() {
    return <span>{this.OutputData()}</span>;
  }
}

export default Status;
