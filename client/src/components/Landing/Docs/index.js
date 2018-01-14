import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';
import Credits from './Credits';
import Started from './Started';
import Sending from './Sending';
import Templates from './Templates';
import Contacts from './Contacts';

class Docs extends Component {
  constructor (props) {
    super (props);
    this.state = {
      getStarted: true,
      credits: false,
      templates: false,
      contacts: false,
      surveys: false,
      activeItem: 'getting started',
    };
  }
  handleItemClick = (e, {name}) => this.setState ({activeItem: name});
  renderDoc () {
    switch (this.state.activeItem) {
      case 'getting started':
        return <Started />;
      case 'credits':
        return <Credits />;
      case 'templates':
        return <Templates />;
      case 'sending':
        return <Sending />;
      case 'contacts':
        return <Contacts />;
      default:
        return <Started />;
    }
  }
  render () {
    const {activeItem} = this.state;
    return (
      <div className="docs" style={{marginTop: '65px', height: '100%'}}>
        <div className="doc-menu" style={{height: '100%'}}>
          <Menu
            pointing
            vertical
            inverted
            style={{
              height: '100%',
              backGroundColor: 'rgb(238, 238, 238) !important',
            }}
          >
            <Menu.Item>
              <Menu.Header>Documentation</Menu.Header>
              <Menu.Menu>
                <Menu.Item
                  name="getting started"
                  active={activeItem === 'getting started'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="credits"
                  active={activeItem === 'credits'}
                  onClick={this.handleItemClick}
                />

                <Menu.Item
                  name="templates"
                  active={activeItem === 'templates'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="contacts"
                  active={activeItem === 'contacts'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="sending"
                  active={activeItem === 'sending'}
                  onClick={this.handleItemClick}
                />
              </Menu.Menu>
            </Menu.Item>

          </Menu>

        </div>
        <div className="doc-page">
          {this.renderDoc ()}
        </div>

      </div>
    );
  }
}

export default Docs;
