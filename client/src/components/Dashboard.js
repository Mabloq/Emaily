import React from 'react';
import SurveyList from './surveys/SurveyList';
import {Link} from 'react-router-dom';

const Dash = () => {
  return (
    <div className="container">
      <h1>Dashboard</h1>
      <SurveyList />
      <div className="fixed-action-btn">
        <Link to="/surveys/new" className="btn-floating btn-large red">
          <i className="large material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dash;
