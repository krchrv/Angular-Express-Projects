const express = require("express");
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static( __dirname + '/public/dist/public' ));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

var server = app.listen(3000, function() {
	console.log("listening on port 3000");
})

require('./server/config/database.js')
require('./server/config/routes.js')(app, server);