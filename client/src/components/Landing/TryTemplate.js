import React, {Component} from 'react';
import EmailEditor from 'react-email-editor';

class TryTemplate extends Component {
  render () {
    return (
      <div>
        <div
          style={{
            marginTop: '60px',
            backgroundColor: '#eee',
            height: '80px',
            marginBottom: '0px',
            padding: '5px',
            borderBottom: '1px solid #9e9e9e',
          }}
        >
          <p />
        </div>
        <EmailEditor style={{height: '100vh'}} />
      </div>
    );
  }
}

export default TryTemplate;
