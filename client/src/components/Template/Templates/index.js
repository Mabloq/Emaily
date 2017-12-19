import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as actions from '../../../actions/unlayer';
import {reduxForm, Field} from 'redux-form';
import {setTimeout} from 'timers';
import {Header, Table, Input} from 'semantic-ui-react';

class Template extends Component {
  constructor (props, context) {
    super (props, context);
    this.state = {name: 'emaily'};
  }
  componentDidMount () {
    this.props.getTemplates ();
  }
  handleChange (event) {
    this.setState ({name: event.target.value});
  }
  handleView (id, name) {
    this.setState ({name});
    this.props
      .getTemplate (id, name)
      .then (() => this.props.history.push (`/template/${id}/${name}`));
  }

  renderTable () {
    return this.props.templates.map ((template, i) => {
      return (
        <Table.Row key={i}>
          <Table.Cell>
            {template.name}
          </Table.Cell>
          <Table.Cell style={{color: 'blue'}}>
            {template.category}
          </Table.Cell>
          <Table.Cell>
            {template.createdAt}
          </Table.Cell>
          <Table.Cell>
            {template.updatedAt}
          </Table.Cell>
          <Table.Cell>
            <button
              onClick={() => this.handleView (template._id, template.name)}
            >
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

          <Link to="/template/new" className="btn right">
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
                    <Table.HeaderCell>Category</Table.HeaderCell>
                    <Table.HeaderCell>CreatedAt</Table.HeaderCell>
                    <Table.HeaderCell>UpdatedAt</Table.HeaderCell>
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
    template: state.template.currentTemplate,
    templates: state.template.templates,
  };
};
export default connect (mapStateToProps, actions) (Template);
