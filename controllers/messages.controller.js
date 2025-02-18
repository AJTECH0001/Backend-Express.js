const path = require('path');

function getMessages(req, res) {
 
    res.sendFile( path.join(__dirname, '..', 'public', 'skimountain.jpg'));
  }

  function postMessage (req, res)  {
    res.send('Updating messages...');
  }

  module.exports = {
    getMessages,
    postMessage,
  }