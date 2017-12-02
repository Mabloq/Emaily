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

  exportHtml = () => {
    this.editor.exportHtml (data => {
      const {design, html} = data;
      console.log ('exportHtml', html);
    });
  };
  saveDesign = () => {
    this.editor.saveDesign (design => {
      console.log ('saveDesign', design);
    });
  };
  render () {
    return (
      <div style={{marginTop: '125px'}} className="container">
        <div className="row">
          {this.renderContent ()}
        </div>

        <div className="row">
          <button onClick={this.exportHtml}>Export HTML</button>
          <button onClick={this.saveDesign}>Save Design</button>
          {/* <EmailEditor
            style={{width: '60%', position: 'relative', marginLeft: '-5%'}}
            ref={editor => (this.editor = editor)}
          /> */}
        </div>
      </div>
    );
  }
}

const SurveyRF = reduxForm ({
  form: 'surveyForm',
}) (SurveryNew);

export default connect () (SurveyRF);
