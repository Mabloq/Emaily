import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import EmailEditor from 'react-email-editor';
import * as actions from '../../actions/unlayer';
import {setTimeout} from 'timers';

class Template extends Component {
  constructor (props, context) {
    super (props, context);
    this.state = {name: props.match.params.name};
    this.loadDesign = this.loadDesign.bind (this);
  }
  componentDidMount () {
    // Promise.resolve (this.props.getTemplate (this.state.name));
    // // this.props.getTemplate ('emaily');
    const {params} = this.props.match;
    this.props.getTemplate (params.id, params.name);
  }

  saveDesign = () => {
    this.editor
      .saveDesign (design => {
        this.props.uploadTemplate (design, this.props.match.params.name);
      })
      .then (() => {
        this.props.history.push ('/templates');
      });
  };
  loadDesign = () => {
    if (this.editor !== undefined) {
      this.editor.loadDesign (this.props.json);
    } else {
      setTimeout (() => this.editor.loadDesign (this.props.json), 2000);
    }
  };

  handleChange (event) {
    this.setState ({name: event.target.value});
  }
  deleteTemplate (id, name) {
    this.props.deleteTemplate (id, name).then (() => {
      this.props.history.push ('/templates');
    });
  }

  render () {
    const {template} = this.props;

    return (
      <div style={{marginTop: '65px'}}>
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
            onClick={() => this.deleteTemplate (template._id, template.name)}
            className="btn btn-danger right"
          >
            Delete
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
            mergeTags: [{name: 'First Name', value: '{{firstName}}'}],
          }}
          ref={editor => (this.editor = editor)}
          onLoad={this.loadDesign}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    template: state.template.currentTemplate,
    json: state.template.templateJson,
  };
};
export default connect (mapStateToProps, actions) (withRouter (Template));
