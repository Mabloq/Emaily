import React, {Component} from 'react';
import ContactForm from './ContactForm';
import {connect} from 'react-redux';
import {createContact} from '../../../actions/contacts';

class ContactNew extends Component {
  render () {
    return (
      <div style={{marginTop: '125px'}} className="container">
        <div className="row">
          <ContactForm createContact={this.props.createContact} />
        </div>

        <div className="row">
          Hey
        </div>
      </div>
    );
  }
}

export default connect (null, {createContact}) (ContactNew);
