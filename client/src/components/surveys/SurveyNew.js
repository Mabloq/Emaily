import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import SurveyForm from './SurveyForm';
import FormReview from './SurveyReview';
// import EmailEditor from 'react-email-editor';
import {connect} from 'react-redux';

class SurveryNew extends Component {
  constructor (props) {
    super (props);
    this.state = {
      showFormReview: false,
    };
  }

  renderContent () {
    if (this.state.showFormReview === true) {
      return (
        <FormReview
          onCancelSubmit={() => this.setState ({showFormReview: false})}
        />
      );
    }

    return (
      <SurveyForm
        onSurveySubmit={() => this.setState ({showFormReview: true})}
      />
    );
  }

  render () {
    return (
      <div style={{marginTop: '125px'}} className="container">
        <div className="row">
          {this.renderContent ()}
        </div>
      </div>
    );
  }
}

const SurveyRF = reduxForm ({
  form: 'surveyForm',
}) (SurveryNew);

export default connect () (SurveyRF);
