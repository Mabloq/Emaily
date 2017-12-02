import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {nextTitle, nextLoad} from '../../actions/UI/nextTitle';

import googleCard from '../../images/card_g-6f5d862e.jpg';
import igCard from '../../images/card_instagram-5c3e39d4.jpg';
import fbCard from '../../images/card_facebook-3f86dea2.jpg';
import bluePaint from '../../images/BluePaint_1.png';
import redBlob from '../../images/CornerPaint.png';
import Automate from '../../images/Automate.png';
import triangles from '../../images/Triangles.png';

const titlesSM = {
  emaily: 'emaily',
  is: 'is',
  shit: 'shit',
};

class Landing extends Component {
  constructor (props) {
    super (props);
    this.state = {
      titleTimer: null,
    };
  }

  componentDidMount () {
    let titleTimer = setInterval (() => {
      this.props.nextTitle (titlesSM[this.props.displayed]);
    }, 2500);

    this.setState ({titleTimer});
  }

  componentWillUnmount () {
    clearInterval (this.state.titleTimer);
  }

  render () {
    const img = {backgroundImage: 'url(' + redBlob + ')'};
    const blueBlob = {backgroundImage: 'url(' + bluePaint + ')'};
    const Triangles = {
      backgroundImage: 'url(' + triangles + ')',
      height: '200px',
      width: '400px',
      top: '-250px',
      left: '0',
      backgroundPosition: 'top left',
    };
    return (
      <div>
        {/* HEADER */}
        <header className="header-land">
          <div className="center-align">
            <div className="title-div">
              <h1 className="land-title" style={{margin: '0'}}>
                <div>
                  {/* <span>Hey,</span> */}
                  <span
                    style={{width: '200px'}}
                    className={`land-title animated-header_words-wrapper ${this.props.loading}`}
                  >
                    <b className={this.props.emaily}>Emaily!</b>
                    <b className={this.props.is}>Is</b>
                    <b className={this.props.shit}>The Shit Man</b>
                  </span>
                </div>
              </h1>
              <p>
                Send Emails, automate that shit and revel in the dough
              </p>
              <a className="orange btn-large">
                <i className="material-icons left">cloud</i>button
              </a>
            </div>
            <div className="bg-image" style={img} />
          </div>

        </header>
        {/* END HEADER */}
        <main className="normalize" role="main">
          {/* AUTOMATE SECTION */}
          <section className="section section-automate">
            <article className="content row">
              <div className="col s12 m6">
                <h3 className="land-title-2">Automate Your Tasks</h3>
                <p>
                  Stop, eating up your time manually following up on abandoned carts and new subscription.
                  Free up time for the fun stuff like a new product or service.
                </p>
              </div>
              <div className="col s12 automate-img">
                <img
                  className="responsive-img"
                  alt="Automate Emails"
                  src={Automate}
                />

              </div>
            </article>
            <div className="bg-image" style={blueBlob} />
          </section>
          {/* END AUTOMATE SECTION */}
          {/* SOCIAL SECTION */}
          <section className="section section-social">
            <article className="content">
              <div
                className="bg-image hide-on-med-and-down"
                style={Triangles}
              />
              <div className="row">
                <div className="col s12 m6 offset-m6">
                  <h3 className="land-title-2">Track Your Success</h3>
                  <p>
                    Find them on any channel, and show them what you got.
                    Track the success rate of your campaigns. See how much revenue
                    us coming from automation.
                  </p>
                </div>
              </div>
              <div className="row  ">
                <figure className="img ig-card">
                  <img
                    alt="advertise on instagram"
                    className="shadow"
                    src={igCard}
                  />
                </figure>
                <figure className="img google-card">
                  <img
                    alt="advertise on google"
                    className="shadow"
                    src={googleCard}
                  />
                </figure>
                <figure className="img fb-card">
                  <img
                    alt="advertise on facebook"
                    className="shadow"
                    src={fbCard}
                  />
                </figure>
              </div>
            </article>
          </section>
          {/* END SOCIAL SECTION */}
        </main>

      </div>
    );
  }
}
function mapStateToProps (state) {
  return {
    emaily: state.landingTitle.emaily,
    is: state.landingTitle.is,
    shit: state.landingTitle.shit,
    displayed: state.landingTitle.displayed,
    loading: state.landingWrapper,
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators (
    {
      nextTitle: nextTitle,
      nextLoad: nextLoad,
    },
    dispatch
  );
}

export default connect (mapStateToProps, mapDispatchToProps) (Landing);
