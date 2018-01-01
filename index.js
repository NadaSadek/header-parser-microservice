const express = require('express');
const app = express();
const PORT = 8000;
let myInfo = {};

app.use(express.static(__dirname + '/public'));

app.use(express.static(__dirname + '/views'));

app.get('/myinfo', function(req, res) {
	myInfo.ipaddress = req.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	myInfo.language = req.headers['accept-language'].split(',')[0];
	myInfo.system = req.headers['user-agent'];

	console.log(req.headers);
    res.json(myInfo);

});

//listen for requests
var listener = app.listen(PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});