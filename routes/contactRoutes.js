const _ = require ('lodash');
const Path = require ('path-parser');
const fs = require ('fs');
const mongoose = require ('mongoose');
const Contact = mongoose.model ('contacts');
mongoose.Promise = require ('bluebird');
const requireLogin = require ('../middlewares/requireLogin');

module.exports = app => {
  app.get ('/api/contacts', requireLogin, async (req, res) => {
    const contacts = await Contact.find ({_user: req.user.id});

    res.send (contacts);
  });

  app.get ('/api/contact/:id', requireLogin, async (req, res) => {
    const contact = await Contact.findById (req.params.id);
    console.log (contact);
    res.send (contact);
  });

  app.post ('/api/contacts', requireLogin, async (req, res) => {
    //create a contact
    console.log (req.body);
    const {first, last, email, company} = req.body;
    const contact = new Contact ({
      firstName: first,
      lastName: last,
      name: `${first} ${last}`,
      email,
      company,
      created: Date.now (),
      _user: req.user.id,
    });

    try {
      await contact.save ();
      res.send (contact);
    } catch (err) {
      res.status (422).send (err);
    }
  });

  app.get ('/api/contacts/dropdown', requireLogin, async (req, res) => {
    console.log (req.body);
    const contacts = await Contact.find ({_user: req.user.id});

    const dropdown = contacts.map (contact => {
      return {
        value: {email: contact.email, name: contact.name},
        label: contact.name,
      };
    });
    res.send (dropdown);
  });

  app.delete ('/api/contacts/:id', async (req, res) => {
    const contact = await Contact.findByIdAndRemove (
      req.params.id,
      (err, contact) => {
        if (err) {
          throw err;
        }
        res.json (contact);
      }
    );
  });
  // app.get ('/api/contacts/:id', (req, res) => {
  //   //get single contact
  // });

  // app.delete ('/api/contacts/:id', (req, res) => {
  //   //delete contact
  // });
};
