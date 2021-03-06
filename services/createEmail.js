'use strict';
const fs = require ('fs');
const Path = require ('path');

const React = require ('react');
const ReactDOMServer = require ('react-dom/server');

const NAME = '{{ name }}';
const DATE = '{{ date }}';
const BALANCE = '{{ balance }}';
/**
 * Get the file from a relative path
 * @param {String} relativePath
 * @return {Promise.<string>}
 */
function getFile (relativePath) {
  return new Promise ((resolve, reject) => {
    const path = Path.join (__dirname, relativePath);

    return fs.readFile (path, {encoding: 'utf8'}, (err, file) => {
      if (err) return reject (err);
      return resolve (file);
    });
  });
}

function createEmail (data) {
  return Promise.all ([getFile (data.html)]).then (([template]) => {
    const emailElement = React.createElement (Email, {data});
    const content = ReactDOMServer.renderToStaticMarkup (emailElement);

    // Replace the template tags with the content
    let emailHTML = template;
    emailHTML = emailHTML.replace (CONTENT_TAG, content);
    emailHTML = emailHTML.replace (STYLE_TAG, style);

    return emailHTML;
  });
}
