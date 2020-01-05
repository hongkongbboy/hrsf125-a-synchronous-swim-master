const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);

  // If request method is options, we will return an empty string
  if (req.method === 'OPTIONS') {
    res.writeHead(200, headers);
    res.end();
  }

  if (req.method === 'GET') {
    const commands = ['up', 'down', 'left', 'right'];
    var index = Math.floor(Math.random() * commands.length);
    res.writeHead(200, headers);
    res.end(commands[index]);
  }


  next(); // invoke next() at the end of a request to help with testing!
};

// Continue in solution 5:24