import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import * as actions from '../../actions/unlayer';
import {reduxForm, Field} from 'redux-form';
import {setTimeout} from 'timers';

class Template extends Component {
  constructor (props, context) {
    super (props, context);
    this.state = {name: 'emaily'};
  }
  componentDidMount () {}
  handleChange (event) {
    this.setState ({name: event.target.value});
  }
  handleClick (name) {
    this.setState ({name});
    this.props
      .getTemplate (name)
      .then (() => this.props.history.push ('/template'));
  }
  redirect () {}
  render () {
    return (
      <div style={{marginTop: '65px', height: '100vh'}}>
        <div
          style={{
            backgroundColor: '#eee',
            height: '80px',
            marginBottom: '0px',
            padding: '5px',
            borderBottom: '1px solid #9e9e9e',
          }}
        >
          <label style={{fontSize: '18px'}}>Template:</label>
          <input
            onChange={event => this.handleChange (event)}
            style={{width: '200px', display: 'inline-block'}}
            type="text"
            value={this.state.name}
          />
          <button
            onClick={() => this.handleClick (this.state.name)}
            className="btn right"
          >
            load
            <i className="material-icons right">delete_forever</i>
          </button>
          <button
            onClick={() => this.saveDesign ()}
            className="btn btn-primary right"
          >
            Save
          </button>
        </div>
        <div>
          <div
            style={{
              width: '150px',
              height: '150px',
              backgroundColor: 'orange',
              cursor: 'pointer',
            }}
            onClick={() => this.handleClick ('bianca')}
          >
            <h1>Beeanca</h1>
          </div>
          <div
            style={{
              width: '150px',
              height: '150px',
              backgroundColor: 'orange',
              cursor: 'pointer',
            }}
            onClick={() => this.handleClick ('emaily')}
          >
            <h1>Emaily</h1>
          </div>
        </div>
        {this.redirect ()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {template: state.template.currentTemplate};
};
export default connect (mapStateToProps, actions) (Template);
