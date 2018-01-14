import React, {Component} from 'react';
import {reduxForm, Field, FieldArray} from 'redux-form';
import {Link} from 'react-router-dom';
import SurveyField from './SurveyField';
import {connect} from 'react-redux';
import {fetchTemplateDropdown} from '../../actions/index';
import {fetchContactDropdown} from '../../actions/contacts';
import _ from 'lodash';

import fields from './formFields';
import TemplateField from './TemplateField';
import ContactField from './ContactField';

class SurveyForm extends Component {
  componentDidMount () {
    this.props.fetchTemplateDropdown ();
    this.props.fetchContactDropdown ();
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
            data={this.props.templateDropdown}
          />
          <Field
            label="Recipients"
            name="recipients"
            component={ContactField}
            data={this.props.contactDropdown}
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

  _.each (fields, ({name, msg}) => {
    if (!values[name]) {
      errors[name] = msg;
    }
  });

  return errors;
}

function mapStateToProps (state) {
  return {
    templateDropdown: state.template.dropdown,
    contactDropdown: state.contacts.dropdown,
  };
}
const ConnectedSurvey = connect (mapStateToProps, {
  fetchTemplateDropdown,
  fetchContactDropdown,
}) (SurveyForm);

export default reduxForm ({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false,
}) (ConnectedSurvey);
