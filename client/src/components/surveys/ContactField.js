import React, {Component} from 'react';

import Select from 'react-select';
import 'react-select/dist/react-select.css';

class TemplateField extends Component {
  constructor (props) {
    super (props);
    this.state = {
      options: [],
      multi: true,
      multiValue: [],
      value: undefined,
    };
  }
  componentDidMount () {
    console.log (this.props.data);
    this.setState ({options: this.props.data});
  }
  componentWillReceiveProps (nextProps) {
    if (typeof nextProps.data != 'undefined') {
      this.setState ({options: nextProps.data});
    }
  }

  handleAddition = (e, {value}) => {
    this.setState ({
      options: [{text: value, value}, ...this.state.options],
    });
  };

  handleOnChange (value) {
    const {multi} = this.state;

    if (multi) {
      this.setState ({multiValue: value});
    } else {
      this.setState ({value});
    }
    return this.props.input.onChange (value.map (p => p.value));
  }
  render () {
    const {multi, multiValue, value} = this.state;
    return (
      <div>
        <label style={{fontSize: '18px'}}>{this.props.label}</label>
        <Select
          style={{margin: '20px 0px'}}
          multi={multi}
          options={this.state.options}
          onChange={this.handleOnChange.bind (this)}
          value={multi ? multiValue : value}
          onBlur={() => {
            this.props.input.onBlur ([...this.props.input.value]);
          }}
        />
      </div>
    );
  }
}

export default TemplateField;
