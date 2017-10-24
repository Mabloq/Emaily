'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchSurveys} from '../../actions';
class SurveyList extends Component {
  componentDidMount () {
    this.props.fetchSurveys ();
  }
  renderSurveys () {
    if (!this.props.surveys) {
      return (
        <div>
          Hello, im just loading....
        </div>
      );
    }
    return this.props.surveys
      .reverse ()
      .map (({title, subject, body, yes, no, dateSent, _id}) => {
        return (
          <div key={_id} className="card blue-grey darken-1">
            <div className="card-content white-text">
              <h3>{title}</h3>
              <span className="card-title">{subject}</span>
              <p>
                {body}
              </p>
            </div>
            <div className="card-action">
              <a className="card-title orange-text">Yes: {yes || 0}</a>
              <a className="card-title orange-text">No: {no || 0}</a>
              <p className="right orange-text">
                {new Date (dateSent).toLocaleDateString ()}
              </p>
            </div>

          </div>
        );
      });
  }
  render () {
    return (
      <div>
        {this.renderSurveys ()}
      </div>
    );
  }
}

function mapStateToProps({surveys}) {
  return {surveys};
}
export default connect (mapStateToProps, {fetchSurveys}) (SurveyList);
