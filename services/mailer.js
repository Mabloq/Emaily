const sendgrid = require ('sendgrid');
const helper = sendgrid.mail;
const keys = require ('../config/keys');

class Mailer extends helper.Mail {
  constructor ({subject, recipients}, content) {
    super ();
    this.sgApi = sendgrid (keys.sendGridKey);
    this.from_email = new helper.Email ('no-reply@emaily.com');
    this.subject = subject;
    this.recipients = recipients;
    // this.names = recipients;
    this.body = new helper.Content ('text/html', content);

    this.addContent (this.body);
    this.addClickTracking ();
    this.addPersonalizations ();
    // this.addSubstitutions ();
  }

  formatAddresses (recipients) {
    return recipients.map (({email}) => {
      return new helper.Email (email);
    });
  }
  addClickTracking () {
    const trackingSettings = new helper.TrackingSettings ();
    const clickTracking = new helper.ClickTracking (true, true);

    trackingSettings.setClickTracking (clickTracking);
    this.addTrackingSettings (trackingSettings);
  }
  addPersonalizations () {
    const firstName = '{{firstName}}';

    this.recipients.forEach (recipient => {
      const personalize = new helper.Personalization ();
      const email = new helper.Email (recipient.email);
      const name = new helper.Substitution (firstName, recipient.name);
      personalize.addTo (email);
      personalize.addSubstitution (name);
      this.addPersonalization (personalize);
    });
    // this.names.forEach (recipient => {
    //   personalize.addSubstitution (
    //     new helper.Substitution (firstName, recipient.name)
    //   );
    // });
  }

  // addSubstitutions (substitions, recipients) {
  //   const sub = new helper.Substitution ();

  //   const names = this.recipients.map (recipient => recipient.name);
  //   this.substitions = sub.addSubstitutions (firstName, names);
  // }

  async send () {
    const request = this.sgApi.emptyRequest ({
      method: 'POST',
      path: '/v3/mail/send',
      body: this.toJSON (),
    });
    const response = await this.sgApi.API (request, (error, response) => {
      if (error) {
        console.log ('Error response received');
        console.log (response.statusCode);
        console.log (response.body);
        console.log (response.headers);
      }
    });
    return response;
  }
}

module.exports = Mailer;
