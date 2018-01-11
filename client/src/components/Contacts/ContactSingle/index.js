import React, {Component} from 'react';
import {fetchContact} from '../../../actions/contacts';
import {connect} from 'react-redux';
class ContactSingle extends Component {
  componentDidMount () {
    const {params} = this.props.match;
    this.props.fetchContact (params.id);
  }
  render () {
    console.log (this.props);
    return (
      <div style={{marginTop: '70px'}}>
        <div className="user-details">
          Hi
          <p>{this.props.contact.name}</p>

          Hi
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    contact: state.contacts.contact,
  };
}

export default connect (mapStateToProps, {fetchContact}) (ContactSingle);
