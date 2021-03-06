const express = require('express');
const network = require('network');
const debug = require('debug')('qrf:server');
const zip = require('express-easy-zip');
const app = express();

const {
  FILE,
  FILES,
  DIRECTORY,
} = require('./constants');
const tunnel = require("./tunnel");
const PORT = process.env.PORT || 7030;

function startServer({ type, source }) {
  
  app.use(zip());
  
  if (type === FILE) {
    app.get('/', (req, res) => {
      res.sendFile(source);
      console.log(`Sent file: ${source}`);
    });
  }
  
  if (type === FILES || type === DIRECTORY) {
    const files = [];
    source.forEach(function(item){
      files.push({
        path: item,
        name: item,
      })
    })
    app.get('/', (req, res) => {
      res.zip({ 
        files:files
      });
    });
  }
   
  app.listen(PORT, () => {
    network.get_private_ip( function(err, ip) {
      if (err) {
        console.log(err);
      }
      const url = `http://${ip || process.env.IP}:${PORT}`;
      tunnel(PORT, url);
    });
  });
}

module.exports = startServer;