import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {reduxForm, Field} from 'redux-form';
import fields from './formFields';
import ReduxFields from '../../../utils/ReduxFields.js';
// import validate from '../../../utils/validateEmails';

class ContactForm extends Component {
  renderFields () {
    return fields.map (({label, name}, i) => (
      <Field
        key={i}
        type="text"
        label={label}
        name={name}
        component={ReduxFields}
      />
    ));
  }
  render () {
    return (
      <div style={{marginTop: '40px'}}>
        <form
          onSubmit={this.props.handleSubmit (values =>
            this.props
              .createContact (values)
              .then (() => this.props.history.push (`/contacts`))
          )}
        >
          {this.renderFields ()}
          <Link to="/contacts" className="red btn-flat white-text left ">
            Cancel
          </Link>
          <button className="waves-effect waves-light right btn" type="submit">
            Save
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm ({
  //   validate,
  form: 'contactForm',
}) (withRouter (ContactForm));
