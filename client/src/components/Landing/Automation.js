import React, {Component} from 'react';
import SubImg from '../../images/LootCrateSub.PNG';
import winBack from '../../images/LOOTCRATE_WINBACK.PNG';
import vip from '../../images/LOOT_VIP.PNG';
import {Link} from 'react-router-dom';
import {reduxForm, Field} from 'redux-form';
import fields from './utils/formFields';
import WhiteField from './utils/WhiteField';
import Footer from '../Footer';
class Automation extends Component {
  renderFields () {
    return fields.map (({label, name}, i) => (
      <Field
        key={i}
        type="text"
        label={label}
        name={name}
        component={WhiteField}
      />
    ));
  }
  render () {
    return (
      <div style={{marginTop: '60px'}}>
        <header className="amt-hdr">
          <div className="automation-title">
            <h1>
              Automate Emails
            </h1>

            <p>
              Recieve a whitepaper / case study of automation success using Emaily. Delivered right into your
              mailbox. Just let us know where to send it.
            </p>

          </div>

          <form
            onSubmit={this.props.handleSubmit (values => console.log ('hey'))}
          >
            {this.renderFields ()}
            <div className="hero-buttons">
              <Link to="/auth/google" className="free-trial-btn">
                Try Free
              </Link>
              <Link to="/docs" className="learn-more-btn">
                Learn More
              </Link>
            </div>
          </form>
        </header>
        <section className="subscribe">
          <div className="copy">
            <h2 className="land-title-2">Engage New Subsribers</h2>
            <p>Wtf is going onnn!!!</p>
            <Link className="free-trial-btn" to="/auth/google">
              Try Now
            </Link>
          </div>
          <img src={SubImg} />
        </section>
        <section className="reward">
          <div className="copy">
            <h2 className="land-title-2">Reward Loyalty</h2>
            <p>Wtf is going onnn!!!</p>
            <Link className="free-trial-btn" to="/auth/google">
              Try Now
            </Link>
          </div>
          <img src={vip} />
        </section>
        <section className="win-back">
          <div className="copy">
            <h2 className="land-title-2">Win Them Back</h2>
            <p>Wtf is going onnn!!!</p>
            <Link className="free-trial-btn" to="/auth/google">
              Try Now
            </Link>
          </div>
          <img src={winBack} />
        </section>
        <Footer />
      </div>
    );
  }
}

export default reduxForm ({
  form: 'whitePaperForm',
}) (Automation);
