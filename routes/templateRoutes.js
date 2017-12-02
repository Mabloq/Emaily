const fs = require ('fs');
const util = require ('util');
module.exports = app => {
  app.post ('/api/template/upload', (req, res) => {
    console.log (req.body.json);
    data = JSON.stringify (req.body.json);
    file = `templates/${req.body.name}.json`;
    fs.writeFileSync (file, data);
    res.send (data);
  });

  app.get ('/api/template/:name', (req, res) => {
    const name = req.params.name;
    let template = fs.readFileSync (`templates/${name}.json`);

    res.send (template);
  });
};
