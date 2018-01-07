import React, {Component} from 'react';
import SubImg from '../../images/LootCrateSub.PNG';
import winBack from '../../images/LOOTCRATE_WINBACK.PNG';
import vip from '../../images/LOOT_VIP.PNG';
import {Link} from 'react-router-dom';
import {reduxForm, Field} from 'redux-form';
import fields from './utils/formFields';
import WhiteField from './utils/WhiteField';
import Footer from '../Footer';
class Tracking extends Component {
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
              Track Success
            </h1>

            <p>
              Recieve a whitepaper / case study of success using our email analytics platform. Easy to understand
              data visualization and a wealth of data points give you the insight to take you to the next level.
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
}) (Tracking);
