import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import SurveyForm from './SurveyForm';
import FormReview from './SurveyReview';

class SurveryNew extends Component {
  constructor (props) {
    super (props);
    this.state = {
      showFormReview: false,
    };
  }

  renderContent () {
    if (this.state.showFormReview == true) {
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
      <div className="container">
        {this.renderContent ()}
      </div>
    );
  }
}

export default reduxForm ({
  form: 'surveyForm',
}) (SurveryNew);
