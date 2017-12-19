import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {Link} from 'react-router-dom';
import SurveyField from './SurveyField';
import {connect} from 'react-redux';
import {fetchTemplateDropdown} from '../../actions/index';
import _ from 'lodash';
import validateEmails from '../../utils/validateEmails';
import fields from './formFields';
import TemplateField from './TemplateField';
import Dropdown
  from 'semantic-ui-react/dist/commonjs/modules/Dropdown/Dropdown';

class SurveyForm extends Component {
  componentDidMount () {
    this.props.fetchTemplateDropdown ();
  }
  renderFields () {
    return fields.map (({label, name}, i) => (
      <Field
        key={i}
        type="text"
        label={label}
        name={name}
        component={SurveyField}
      />
    ));
  }
  render () {
    return (
      <div style={{marginTop: '40px'}}>
        <form
          onSubmit={this.props.handleSubmit (values =>
            this.props.onSurveySubmit ()
          )}
        >
          {this.renderFields ()}
          <Field
            label="Template"
            name="template"
            component={TemplateField}
            data={this.props.dropdown}
          />
          <Link to="/surveys" className="red btn-flat white-text left ">
            Cancel
          </Link>

          <button className="waves-effect waves-light right btn" type="submit">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate (values) {
  const errors = {};

  errors.recipients = validateEmails (values.recipients || '');

  _.each (fields, ({name, msg}) => {
    if (!values[name]) {
      errors[name] = msg;
    }
  });

  return errors;
}

function mapStateToProps (state) {
  return {
    dropdown: state.template.dropdown,
  };
}
const ConnectedSurvey = connect (mapStateToProps, {fetchTemplateDropdown}) (
  SurveyForm
);

export default reduxForm ({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false,
}) (ConnectedSurvey);
