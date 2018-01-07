import React, {Component} from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class TemplateField extends Component {
  constructor (props) {
    super (props);
    this.state = {
      value: undefined,
    };
  }
  handleOnChange (data) {
    return this.props.input.onChange (data.value);
  }
  render () {
    const {multi, multiValue, value} = this.state;
    return (
      <div>
        <label style={{fontSize: '18px'}}>{this.props.label}</label>
        <Select
          style={{margin: '20px 0px'}}
          options={this.props.data}
          onChange={this.handleOnChange.bind (this)}
          value={this.props.input.value}
        />
      </div>
    );
  }
}

export default TemplateField;
