const express = require('express');
const app = express();
const Model = require('./models/Post');

app.get('/api/post', (req, res) => {
  new Model.Post()
		.fetchAll()
		.then(post => {
      res.json(post)
    })
		.catch(function (error) {
			 console.log(error);
			 res.send('An error occured');
		});
});

app.get('/api/post/:id', (req, res) => {
  new Model.Post({
    'id': req.params.id
  })
		.fetch()
		.then(post => {
      res.json(post)
    })
		.catch(function (error) {
			 console.log(error);
			 res.send('An error occured');
		});
});

app.listen(8080, function() {
  console.log('Listening on 8080');
});

module.exports = app;
