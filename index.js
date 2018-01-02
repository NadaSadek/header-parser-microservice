const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
let myInfo = {};

app.use(express.static(__dirname + '/public'));

app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res) {
	res.sendFile('/index.html');
});

app.get('/myinfo', function(req, res) {
	myInfo.ipaddress =  req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.ip;
	myInfo.language = req.headers['accept-language'].split(',')[0];
	myInfo.system = req.headers['user-agent'].split('(')[1].split(')')[0];

	console.log(req.headers);
    res.json(myInfo);

});

//listen for requests
var listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
