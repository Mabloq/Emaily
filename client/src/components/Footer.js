import React from 'react';

const Footer = () => {
  return (
    <footer className="row">
      <div className="content row center">
        <div className="col s4 left-align">
          <h4>Features</h4>
          <ul>
            <li><a>Automation</a></li>
            <li><a>Multi-Channel</a></li>
            <li><a>Mailing List</a></li>
          </ul>
        </div>
        <div className="col s4 left-align">
          <h4>Resources</h4>
          <ul>
            <li><a>White Papers</a></li>
            <li><a>Emaily Uinversity</a></li>
            <li><a>Kewl Stuff</a></li>
          </ul>
        </div>
        <div className="col s4 left-align">
          <h4>Contact Us</h4>
          <ul>
            <li><a>Techincal Support</a></li>
            <li><a>Customer Service</a></li>
            <li><a>Feedback</a></li>
          </ul>
        </div>
      </div>
      <div className="content row center">
        <h3 className="land-title-2">Emaily</h3>

      </div>
    </footer>
  );
};

export default Footer;
