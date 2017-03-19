import './hangman.less';

import React from 'react';

export default class Hangman extends React.Component {

  render() {

    var backgroundPosition = `background-position: ${-110*(this.props.wrongAttempts.length - 1)}px 0`;

    return (
      <div className="hangman-container">
        <div className="hangman" style={backgroundPosition}></div>
      </div>
    );
  }
}
