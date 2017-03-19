import './keyboard.less';

import React from 'react';
import classNames from 'classnames';

export default class Keyboard extends React.Component {

  generateKeys = () => {
    var keys = 'abcdefghijklmnopqrstuvwxyz ';

    return keys.split('').map( key => <span className={classNames('key', {'done': (this.props.attempts.indexOf(key) !== -1), 'wrong': (this.props.wrongAttempts.indexOf(key) !== -1), 'space': (key === ' ')})} onClick={() => {this.props.onKeyInput(key)}} >{key}</span> )
  }

  render = () => {

    if (this.props.gameOver) return null;

    return (
      <div className="keyboard">
        {this.generateKeys()}
      </div>
    );
  }

}
