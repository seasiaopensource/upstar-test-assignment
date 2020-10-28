/* Import NPM Modules*/
const http = require("http"),
	express = require("express"),
	app = express(),
	path = require('path'),
	bodyParser = require("body-parser"),
	config = require("config"),
	cors = require('cors'),
	fileUpload = require('express-fileupload'),
	server = http.createServer(app);
// Import Own Defined Modules
const routes = require("./routes");
const checkConn = require('./helpers/checkConn');

// App Configuration
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true,limit:'50mb' }));
app.use(cors());
app.use(fileUpload());
app.use("/api", routes); // Assigning Api Routes
app.use(express.static(path.join(__dirname, 'public')));

// Assign Port
const port = process.env.PORT || config.appPort;

// Check Database Connectivity
const healthCheck = async () => {
	try {
		await checkConn.checkDbConnection();
		server.listen(port, async () => {
			console.log(`Listening on port ${port}`);
		});

	} catch (error) {
		console.log('unable to connect to database',error)
	}
};

healthCheck();

module.exports = app;

