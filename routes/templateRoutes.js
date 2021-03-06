const fs = require ('fs');
const util = require ('util');
const mongoose = require ('mongoose');
mongoose.Promise = require ('bluebird');
const Template = mongoose.model ('templates');
const requireLogin = require ('../middlewares/requireLogin');
const NAME_TAG = '${firstName}';
module.exports = app => {
  //UPLOAD DRAG AND DROP TEMPLATES
  app.post ('/api/template/upload', requireLogin, async (req, res) => {
    const {json, html} = req.body;
    const {name, category} = req.body.form;
    const design = `${name}.json`;
    const htmlString = `${name}.html`;
    const template = new Template ({
      name,
      category,
      design,
      html: htmlString,
      _user: req.user.id,
      createdAt: Date.now (),
    });

    await template.save ();

    //create Design File Template
    const jsonData = JSON.stringify (json);
    const jsonFile = `templates/json/${name}.json`;
    fs.writeFileSync (jsonFile, jsonData);

    //create HTML file Template
    const htmlFile = `templates/html/${name}.html`;
    fs.writeFileSync (htmlFile, html);
    res.send (template);
  });

  // GET SINGLE TEMPLATE
  app.get ('/api/template/:id/:name', async (req, res) => {
    const id = req.params.id;
    const name = req.params.name;

    const template = await Template.findById (id, (err, template) => {
      if (err) {
        res.status (200).send (err);
      }
      return template;
    });

    //read json file
    let jsonTemplate = await fs.readFileSync (`templates/json/${name}.json`);
    //parse json binary
    jsonTemplate = JSON.parse (jsonTemplate);
    //spread json object into template opject
    const response = Object.assign ({json: jsonTemplate}, template);

    res.send (response);
  });

  //GET ALL THE TEMPLATES
  app.get ('/api/templates', async (req, res) => {
    const templates = await Template.find ({_user: req.user.id});

    res.send (templates);
  });

  // DELETE TEMPLATE
  app.delete ('/api/template/:id/:name', async (req, res) => {
    const template = await Template.findByIdAndRemove (
      req.params.id,
      (err, template) => {
        if (err) {
          throw err;
        }
        res.json (template);
      }
    );
    //check for path json
    const jsonPath = `templates/json/${req.params.name}.json`;
    const jsonExists = await fs.statSync (jsonPath);
    //check for path html
    const htmlPath = `templates/html/${req.params.name}.html`;
    const htmlExists = await fs.statSync (htmlPath);
    await fs.unlink (jsonPath, (err, template) => {
      if (jsonExists) {
        if (err) {
          console.log ('failed to delete local json:' + err);
        } else {
          console.log ('succesfully deleted json file');
        }
      }
    });

    await fs.unlink (htmlPath, err => {
      if (htmlExists) {
        if (err) {
          console.log ('failed to delete html: ' + err);
        }
      }
    });
  });
  // GET DROPDOWN
  app.get ('/api/templates/dropdown', async (req, res) => {
    const templates = await Template.find ({_user: req.user.id});

    const dropdown = templates.map (template => {
      return {value: template.name, label: template.name};
    });

    res.send (dropdown);
  });
};
