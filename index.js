const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.use(express.static(__dirname));

app.get('/', function(req, res) {
	res.sendFile('/index.html');
});

app.get('/myinfo', function(req, res) {
	const myInfo = {
		"ipaddress":  req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.ip,
		"language": req.headers['accept-language'].split(',')[0],
		"os": req.headers['user-agent'].split('(')[1].split(')')[0]
	};
  res.json(myInfo);

});
app.on('error', function (err) {
	console.error('server couldn\'t start', err);
});

//listen for requests
const listener = app.listen(port,  function (err) {
  console.log('Your app is listening on port ', listener.address().port);
});
