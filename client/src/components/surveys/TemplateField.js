import React, {Component} from 'react';
import {Dropdown} from 'semantic-ui-react';

class TemplateField extends Component {
  render () {
    return (
      <div>
        <label style={{fontSize: '18px'}}>{this.props.label}</label>
        <Dropdown
          placeholder="Select Template"
          fluid
          selection
          value={this.props.input.value}
          onChange={(param, data) => this.props.input.onChange (data.value)}
          options={this.props.data}
          style={{marginBottom: '20px', marginTop: '10px'}}
        />
      </div>
    );
  }
}

export default TemplateField;
