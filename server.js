var express = require('express');
var app = express();

app.get('/store', function (req, res) {
	res.send('Tutaj jest sklep');
});

app.get('/store', function (req, res, next) {
	console.log('Jestem posrednikiem przy zadaniu do endpointa /store');
	next();
});

app.listen(3000);

app.use(function (req, res, next) {
	res.status(404).send('Przepraszamy, ale zasoby nie zostały odnalezione.');
});
