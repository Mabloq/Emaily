// Show users the form for review before sending out to subscirbers
import React from 'react';
import {connect} from 'react-redux';
import fields from './formFields';
import * as actions from '../../actions';
import {withRouter} from 'react-router-dom';

const SurveyReview = ({onCancelSubmit, formValues, submitSurvey, history}) => {
  const formFields = fields.map (({label, name}, i) => {
    return (
      <div key={i}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });
  return (
    <div>
      <h5>Review Your Survey</h5>
      {formFields}
      <div>
        <label>Template</label>
        <div>{formValues['template']}</div>
        <label>Contacts</label>
        <div>{formValues['contacts']}</div>
      </div>
      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={onCancelSubmit}
      >
        Back
      </button>
      <button
        onClick={() => submitSurvey (formValues, history)}
        className="waves-effect waves-light right btn"
      >
        Send <i className="material-icons right">email</i>
      </button>
    </div>
  );
};
function mapStateToProps (state) {
  return {
    formValues: state.form.surveyForm.values,
  };
}

export default connect (mapStateToProps, actions) (withRouter (SurveyReview));
