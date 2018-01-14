import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Payment from './Payments';

class Header extends Component {
  renderContent () {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google" className="black-text">Login with Google</a>
          </li>
        );

      default:
        return [
          <li>
            <Link
              to="/surveys"
              className="black-text"
              // style={{left: '10%'}}
            >
              Send
            </Link>
          </li>,
          <li>
            <Link
              to="/templates"
              className="black-text"
              // style={{left: '10%'}}
            >
              Templates
            </Link>
          </li>,
          <li>
            <Link
              to="/contacts"
              className="black-text"
              // style={{left: '20%'}}
            >
              Contacts
            </Link>
          </li>,
          <li key="1"><Payment /></li>,
          <li key="2" style={{margin: '0 50px'}}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key="3">
            <a href="/api/logout" className="black-text">Log Out</a>
          </li>,
        ];
    }
  }

  render () {
    return (
      <div>
        <nav style={{zIndex: '99', position: 'fixed', top: 0}}>

          <div className="nav-wrapper white black-text">
            <Link
              to={this.props.auth ? '/surveys' : '/'}
              // style={{left: '5%'}}
              className="brand-logo black-text"
            >
              Emaily
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">

              {this.renderContent ()}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps({auth}) {
  return {auth};
}
export default connect (mapStateToProps) (Header);
