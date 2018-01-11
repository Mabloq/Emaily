import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import * as actions from './actions';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './components/Landing/Landing';
import Automation from './components/Landing/Automation';
import Tracking from './components/Landing/Tracking';
import TryTemplate from './components/Landing/TryTemplate';
import Docs from './components/Landing/Docs';
import Dashboard from './components/Dashboard';
import SurveyNew from './components/surveys/SurveyNew';
import Template from './components/Template';
import Templates from './components/Template/Templates/index';
import TemplateNew from './components/Template/TemplateNew';
import Contacts from './components/Contacts';
import ContactSingle from './components/Contacts/ContactSingle';
import ContactNew from './components/Contacts/ContactCreate/ContactNew';
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
            <Route exact path="/template/new" component={TemplateNew} />
            <Route exact path="/contact/create" component={ContactNew} />

            <Route path="/surveys/new" component={SurveyNew} />
            <Route path="/templates" component={Templates} />
            <Route path="/template/:id/:name" component={Template} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/contact/:id" component={ContactSingle} />
            <Route path="/automation" component={Automation} />
            <Route path="/tracking" component={Tracking} />
            <Route path="/template-try" component={TryTemplate} />
            <Route path="/docs" component={Docs} />

          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect (null, actions) (App);
