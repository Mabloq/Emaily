import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import {nextTitle, nextLoad} from '../../actions/UI/nextTitle';
import Footer from '../Footer';

//images
import googleCard from '../../images/card_g-6f5d862e.jpg';
import igCard from '../../images/card_instagram-5c3e39d4.jpg';
import fbCard from '../../images/card_facebook-3f86dea2.jpg';
import HeaderImage from '../../images/HeaderImage.png';
import Automate from '../../images/Automate.png';
import triangles from '../../images/Triangles.png';
import marriot from '../../images/Marriott.png';
import microsoft from '../../images/microsoft.png';
import slack from '../../images/slack.png';
import editorBg from '../../images/hamburg.png';
import editor from '../../images/editor.png';
import {Parallax, Background} from 'react-parallax';

class Landing extends Component {
  constructor (props) {
    super (props);
    this.state = {
      titleTimer: null,
    };
  }

  render () {
    const hamburG = {
      background: 'linear-gradient( rgba(118, 65, 168, .839), rgba(118, 65, 168, .839)), url(' +
        editorBg +
        ')',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    };
    const HeaderImg = {
      background: 'linear-gradient( rgba(118, 65, 168, .839), rgba(118, 65, 168, .839)), url(' +
        HeaderImage +
        ')',
      top: '0',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    };
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
        <Parallax strength={400}>
          <div style={HeaderImg}>
            <div className="title-div">
              <div className="land-title">
                <h1>
                  Easy Marketing Emails
                </h1>
              </div>
              <div>
                <p>
                  Send Emails, automate that shit and revel in the dough
                </p>
              </div>

              <div className="hero-buttons">
                <Link to="/auth/google" className="free-trial-btn">
                  Try Free
                </Link>
                <Link to="/docs" className="learn-more-btn">
                  Docs
                </Link>
              </div>

            </div>
          </div>

        </Parallax>
        <main className="normalize" role="main">
          {/* AUTOMATE SECTION*/}
          <section className="section section-automate">
            <article className="automation">
              <span className="copy">
                <h3 className="land-title-2">Automate Your Tasks</h3>
                <p>
                  Stop, eating up your time manually following up on abandoned carts and new subscription.
                  Free up time for the fun stuff like a new product or service.
                </p>
                <Link to="/auth/google" className="free-trial-btn">
                  Try Free
                </Link>
                <Link to="/automation" className="learn-more-btn">
                  Learn More
                </Link>
              </span>
              <span className="img">
                <img alt="Automate Emails" src={Automate} />
              </span>
            </article>
          </section>
          {/* END AUTOMATE SECTION */}

          {/* TRUST SECTION */}
          {/* ISSUE */}
          <div className="trust-section">
            <img className="slack" src={slack} />
            <img className="microsoft" src={microsoft} />
            <img className="marriot" src={marriot} />

          </div>

          {/* END TRUST SECTION */}

          {/* TRACK SECTION */}
          {/* issue */}
          <section className="section section-track">
            <article className="track">
              <div className="images">
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
              <div className="copy">
                <h3 className="land-title-2">Track Your Success</h3>
                <p>
                  Find them on any channel, and show them what you got.
                  Track the success rate of your campaigns. See how much revenue
                  us coming from automation.
                </p>
                <Link to="/auth/google" className="free-trial-btn">
                  Try Free
                </Link>
                <Link to="/tracking" className="learn-more-btn">
                  Learn More
                </Link>
              </div>
            </article>
          </section>
          {/* END TRACK SECTION */}

          {/* EDITOR SECTION*/}
          {/* Issue */}
          <section className="section section-editor">
            <article className="editor" style={hamburG}>
              <div className="copy">
                <h3 className="land-title-2"> Drag n' Drop HTML Emails</h3>
                <p className="p">
                  Simply drag the content into your html emails, adavance custimization available width
                  embedded html editor
                </p>
                <Link to="/auth/google" className="free-trial-btn">
                  Try Free
                </Link>
                <Link to="template-try" className="learn-more-btn">
                  Learn More
                </Link>
              </div>

              <img className="img" src={editor} style={{maxHeight: '550px'}} />
            </article>

          </section>

          {/* END EDITOR SECTION */}
        </main>
        <Footer />
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
