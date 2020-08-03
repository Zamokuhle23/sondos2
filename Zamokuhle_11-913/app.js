var express = require('express');

var todoController = require('./controllers/todoController');

var app = express();
 app.set('view engine','ejs');

var bodyParser = require('body-parser');

app.use(express.static('./public'));

todoController(app);

  app.listen(1000)
  console.log('Listening port 1000');