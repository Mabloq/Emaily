const _ = require ('lodash');
const Path = require ('path-parser');
const fs = require ('fs');
const {URL} = require ('url');
const mongoose = require ('mongoose');
mongoose.Promise = require ('bluebird');
const requireLogin = require ('../middlewares/requireLogin');
const requireCredits = require ('../middlewares/requireCredits');
const Survey = mongoose.model ('surveys');
const Template = mongoose.model ('templates');
const Mailer = require ('../services/mailer');
const surveyTemplate = require ('../services/emailTemplates');

module.exports = app => {
  app.get ('/api/surveys', requireLogin, async (req, res) => {
    const surveys = await Survey.find ({_user: req.user.id}).select ({
      recipients: false,
    });

    res.send (surveys);
  });
  app.get ('/api/surveys/:surveyId/:choice', requireLogin, (req, res) => {
    res.send ('Thanks for voting');
  });

  app.post ('/api/surveys', requireLogin, requireCredits, async (req, res) => {
    const {title, subject, body, recipients, template} = req.body;
    console.log (template);
    const survey = new Survey ({
      title,
      subject,
      body,
      recipients: recipients
        .split (',')
        .map (email => ({email: email.trim ()})),
      _user: req.user.id,
      dateSent: Date.now (),
    });

    const temPlate = await Template.findOne ({name: template});
    const htmlTemplate = fs.readFileSync (
      `templates/html/${temPlate.name}.html`,
      'utf8'
    );
    const mailer = new Mailer (survey, htmlTemplate);

    try {
      await mailer.send ();
      await survey.save ();
      req.user.credits -= 1;
      const user = await req.user.save ();

      res.send (user);
    } catch (err) {
      res.status (422).send (err);
    }
  });

  app.post ('/api/surveys/webhooks', (req, res) => {
    const p = new Path ('/api/surveys/:surveyId/:choice'); // extracts surveyId and choice from webhook

    _.chain (req.body)
      .map (({email, url}) => {
        // iterate though all survey votes in webhook
        const match = p.test (new URL (url).pathname); // apply extraction defined above on each url
        if (match) {
          return {email, surveyId: match.surveyId, choice: match.choice}; // return the
        }
      })
      .compact () // remove null and undefined events (those which dont "match")
      .uniqBy ('email', 'surveyId') // filter our double votes in (only in current req.body)
      .each (({surveyId, email, choice}) => {
        Survey.updateOne (
          {
            _id: surveyId,
            recipients: {
              $elemMatch: {email: email, responded: false},
            },
          },
          {
            $inc: {[choice]: 1}, //key interpolate yes / no in survey shcema using choice webhook
            $set: {'recipients.$.responded': true},
            lastResponded: new Date (),
          }
        ).exec ();
      })
      .value ();
    //dont leave sendgrid hanging
    res.send ({});
  });
};
