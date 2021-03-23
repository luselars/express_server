var express = require('express');
var router = express.Router();
var xml = require('xml');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.set('Content-Type', 'text/xml');
  res.sendFile('express_server/routes/xmlfile.xml');
  console.log(req.connection.remoteAddress);
});

module.exports = router;
