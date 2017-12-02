import React, {Component} from 'react';
import {connect} from 'react-redux';
import EmailEditor from 'react-email-editor';
import * as actions from '../../actions/unlayer';
import {reduxForm, Field} from 'redux-form';
import {setTimeout} from 'timers';

class Template extends Component {
  constructor (props, context) {
    super (props, context);
    this.state = {name: ''};
    this.loadDesign = this.loadDesign.bind (this);
  }
  componentDidMount () {
    // Promise.resolve (this.props.getTemplate (this.state.name));
    // // this.props.getTemplate ('emaily');
    // this.props.getTemplate (this.state.name);
  }
  saveDesign = () => {
    this.editor.saveDesign (design => {
      this.props.uploadTemplate (design, this.state.name);
    });
  };
  loadDesign = () => {
    if (this.editor !== undefined) {
      this.editor.loadDesign (this.props.template);
    } else {
      setTimeout (() => this.editor.loadDesign (this.props.template), 2000);
    }
  };

  handleChange (event) {
    this.setState ({name: event.target.value});
  }
  handleClick (name) {
    this.setState ({name});
    this.props.getTemplate (this.state.name).then (design => {
      this.loadDesign (design);
    });
  }
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
        <EmailEditor
          style={{
            width: '60%',
            height: '100vh',
            position: 'relative',
            marginLeft: '-5%',
          }}
          options={{
            mergeTags: [{name: 'First Name', value: '${firstName}'}],
          }}
          ref={editor => (this.editor = editor)}
          onLoad={this.loadDesign}
        />
      </div>
    );
  }
}

const TemplateRF = reduxForm ({
  form: 'templateForm',
}) (Template);

const mapStateToProps = state => {
  return {template: state.template.currentTemplate};
};
export default connect (mapStateToProps, actions) (TemplateRF);
