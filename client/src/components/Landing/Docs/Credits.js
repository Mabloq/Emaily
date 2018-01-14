import React, {Component} from 'react';
import credGif from '../../../images/gifs/CreditsNew.gif';
import credBtn from '../../../images/gifs/CreditButton.gif';
export default class Credits extends Component {
  render () {
    return (
      <div>
        <h1>Credits</h1>
        <p>
          Users begin with 5 credits. 1 Credit is expended for every Email sent out to 1 or more Contacts.
        </p>

        <img style={{maxWidth: '820px'}} src={credBtn} />
        <h3>Getting more credits</h3>
        <p>
          Once Logged in, the site navigation menu will show a credits button along with the credit balance.
          Simply click the credit button and a form will pop-up allowing you to purchase more credits. As the project is
          {' '}
          still in beta, please do not enter real credit card information. Mabloq Email uses stripe to process payments.
        </p>
        <h3>Below is the recommended Input for the credit purchase form:</h3>
        <img src={credGif} />
      </div>
    );
  }
}
