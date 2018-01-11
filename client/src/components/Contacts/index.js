import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchContact, fetchContacts} from '../../actions/contacts';
import {Table, Input} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

class Contacts extends Component {
  componentDidMount () {
    this.props.fetchContacts ();
  }
  handleChange (event) {
    this.setState ({name: event.target.value});
  }
  handleView (id) {
    this.props
      .fetchContact (id)
      .then (() => this.props.history.push (`/contact/${id}`));
  }

  renderTable () {
    return this.props.contacts.map ((contact, i) => {
      return (
        <Table.Row key={i}>
          <Table.Cell>
            {contact.name}
          </Table.Cell>
          <Table.Cell style={{color: 'blue'}}>
            {contact.email}
          </Table.Cell>
          <Table.Cell>
            {contact.company}
          </Table.Cell>
          <Table.Cell>
            {contact.created}
          </Table.Cell>
          <Table.Cell>
            <button onClick={() => this.handleView (contact._id)}>
              view
            </button>
          </Table.Cell>
        </Table.Row>
      );
    });
  }

  render () {
    return (
      <div style={{marginTop: '65px', height: '100vh'}}>
        <div
          style={{
            backgroundColor: '#eee',
            padding: '10px',
            borderBottom: '1px solid #9e9e9e',
            height: '65px',
          }}
        >

          <Link to="/contact/create" className="btn right">
            <i className="material-icons">add</i>
          </Link>

        </div>
        <div className="">
          <div className="row">
            <div
              className="col s3"
              style={{
                height: '100vh',
                borderRight: 'solid 1px #eee',
                padding: '20px',
              }}
            >
              <Input
                icon={{name: 'search', link: true}}
                placeholder="Search..."
              />

            </div>
            <div className="col s9" style={{height: '100vh', padding: '50px'}}>
              <Table basic="very" celled collapsing style={{width: '100%'}}>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Email</Table.HeaderCell>
                    <Table.HeaderCell>Company</Table.HeaderCell>
                    <Table.HeaderCell>createdAt</Table.HeaderCell>
                    <Table.HeaderCell>Actions</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {this.renderTable ()}
                </Table.Body>
              </Table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    contact: state.contacts.contact,
    contacts: state.contacts.contacts,
  };
};

export default connect (mapStateToProps, {fetchContact, fetchContacts}) (
  Contacts
);
