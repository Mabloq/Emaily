import React, {Component} from 'react';
import template from '../../../images/gifs/Templates.gif';
export default class Templates extends Component {
  render () {
    return (
      <div>
        <h1>Templates</h1>
        <p>
          Mabloq Mail uses a relativley new npm package managed by Unlayer called react-email-editor. It allows
          anyone to create html emails, no coding expereince is necessary. The interface is drag and drop, all you
          need to do is click and drag visual elements that represent things such as images, text, columns, and rows.
          {' '}
        </p>
        <img src={template} />
      </div>
    );
  }
}
