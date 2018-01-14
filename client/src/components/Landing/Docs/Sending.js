import React, {Component} from 'react';
import send from '../../../images/gifs/Send.gif';
export default class Sending extends Component {
  render () {
    return (
      <div>
        <h1>Sending</h1>
        <img style={{maxWidth: '820px'}} src={send} />
      </div>
    );
  }
}
