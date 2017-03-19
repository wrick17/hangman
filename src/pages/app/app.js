import React, { Component } from 'react';
import Challenge from '../../components/challenge/challenge';
import Keyboard from '../../components/keyboard/keyboard';
import Hangman from '../../components/hangman/hangman';

import './app.less';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      attempts: [],
      wrongAttempts: [],
      charectersInString: [],
      challenge: 'hello',
      gameOver: false
    }
  }

  gameOver = () => {
    this.setState({ gameOver: true, attempts: this.state.charectersInString });
  }

  wonGame = () => {
    console.log('You won!!');
    this.gameOver();
  }

  lostGame = () => {
    console.log('Sorry you lost!!');
    this.gameOver();
  }

  checkStatus = () => {
    const attempts = this.state.attempts;
    const charectersInString = this.state.charectersInString;
    const wrongAttempts = this.state.wrongAttempts;

    if (attempts.length === charectersInString.length) {
      this.wonGame();
    }
    else if (wrongAttempts.length === 7) {
      this.lostGame();
    }
  }

  onKeyInput = (key) => {
    const charectersInString = this.state.charectersInString;
    if (charectersInString.indexOf(key) === -1) {
      let wrongAttempts = this.state.wrongAttempts;
      wrongAttempts.push(key);
      return this.setState({ wrongAttempts }, this.checkStatus);
    }
    var attempts = this.state.attempts;
    attempts.push(key);
    this.setState({ attempts }, this.checkStatus);
  }

  getCharecters = (text) => {
    var charectersInString = [];
    var allChars = text.replace(' ', '').split('');
    allChars.forEach(char => {
      if (charectersInString.indexOf(char) === -1) charectersInString.push(char);
    });
    return charectersInString;
  }

  componentDidMount = () => {
    console.log('Let\'s build some hangman!!');

    this.setState({ charectersInString: this.getCharecters(this.state.challenge) });

    console.log(this.getCharecters(this.state.challenge));
  }

  render = () => {
    return (
      <div className="app">
        <Hangman wrongAttempts={this.state.wrongAttempts} />
        <Challenge challenge={this.state.challenge} attempts={this.state.attempts} />
        <Keyboard onKeyInput={this.onKeyInput} gameOver={this.state.gameOver} attempts={this.state.attempts} wrongAttempts={this.state.wrongAttempts} />
      </div>
    );
  }
}

export default App;
