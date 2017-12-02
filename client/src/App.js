import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import * as actions from './actions';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard';
import SurveyNew from './components/surveys/SurveyNew';
import Template from './components/Template';
import Templates from './components/Template/Templates';
import 'normalize.css';
import './App.css';

class App extends Component {
  componentDidMount () {
    this.props.fetchUser ();
  }
  render () {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
            <Route path="/fudge" component={Templates} />
            <Route path="/template" component={Template} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect (null, actions) (App);
