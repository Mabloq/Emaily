import React, {Component} from 'react';
import EmailEditor from 'react-email-editor';
import {connect} from 'react-redux';
import * as actions from '../../../actions/unlayer';
import {Grid, Dropdown} from 'semantic-ui-react';

const categories = [
  {
    key: 1,
    text: 'Campaign',
    value: 'campaign',
  },
  {
    key: 2,
    text: 'Automation',
    value: 'automation',
  },
  {
    key: 3,
    text: 'Loyaly',
    value: 'loyalty',
  },
];
class TemplateNew extends Component {
  constructor (props) {
    super (props);
    this.state = {
      name: '',
    };
  }
  handleChange (event) {
    this.setState ({name: event.target.value});
  }
  exportHtml = () => {
    this.editor.exportHtml (data => {
      const {design, html} = data;
      this.props.uploadTemplate (html, design, {
        name: this.state.name,
        category: this.state.value,
      });
    });
  };
  handleSelect = (e, {value}) => this.setState ({value});

  render () {
    const {value} = this.state;
    return (
      <div style={{marginTop: '80px'}}>
        <Grid
          columns={3}
          verticalAlign="middle"
          style={{
            backgroundColor: '#eee',
            maxHeight: '80px',
            marginBottom: '0px',
            padding: '5px',
            borderBottom: '1px solid #9e9e9e',
          }}
        >
          <Grid.Row>
            <Grid.Column>
              <label style={{fontSize: '18px'}}>Template:</label>
              <input
                onChange={event => this.handleChange (event)}
                style={{width: '200px', display: 'inline-block'}}
                type="text"
                value={this.state.name}
              />
            </Grid.Column>
            <Grid.Column>
              <Dropdown
                onChange={this.handleSelect}
                options={categories}
                placeholder="Select Category"
                selection
                value={this.state.value}
                fluid
              />
            </Grid.Column>
            <Grid.Column>
              <button
                onClick={() => this.exportHtml ()}
                className="btn btn-primary right"
              >
                Save
              </button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <EmailEditor
          ref={editor => (this.editor = editor)}
          style={{
            width: '60%',
            height: '100vh',
            position: 'relative',
            marginLeft: '-5%',
          }}
        />
      </div>
    );
  }
}
export default connect (null, actions) (TemplateNew);
