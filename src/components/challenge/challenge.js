import './challenge.less';
import React from 'react';

export default class Challenge extends React.Component {

  generateDoneDom = (char) => {
    return (<span className="char done" >{char}</span>);
  }

  generateBlankDom = () => {
    return (<span className="char" ></span>);
  }

  generateChars = (word) => {
    const { attempts } = this.props;
    var charecters = word.split('');
    return charecters.map( char => (attempts.indexOf(char) !== -1) ? this.generateDoneDom(char) : this.generateBlankDom() );
  }

  generateChallengeDom = (challenge) => {
    return challenge.split(' ').map( word => <div className="word">{ this.generateChars(word) }</div> );
  }

  render() {
    const { challenge } = this.props;
    return (
      <div className="challenge-box">
        {this.generateChallengeDom(challenge)}
      </div>
    );
  }
}
