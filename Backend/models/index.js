const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const config = require("config");
let db = {};

const sequelize = new Sequelize(
	config.db.database,
	config.db.username,
	config.db.password,
	{
		host: config.db.host,
		port: config.db.port,
		dialect: "mysql",
	}
);

//  let models = {};

// let modules = [
//     require('./users.js'),
// 	require('./benefits.js'),
// 	require('./boxBenefits.js'),
// 	require('./userDetail.js'),
//     require('./boxTypes.js'),
// 	require('./categories.js'),
// 	require('./products.js'),
// 	require('./orders.js'),
// 	require('./orderDetail.js')
//     ];
  
//   // Initialize models
//   modules.forEach((module) => {
// 	const model = module(sequelize, Sequelize, config);
// 	model.sync(true);
// 	models[model.name] = model;
//   });

fs.readdirSync(__dirname)
	.filter(file => file.indexOf(".") !== 0 && file !== "index.js")
	.forEach(file => {
		let model = sequelize.import(path.join(__dirname, file));
		db[model.name] = model;
	});

Object.keys(db).forEach(modelName => {
	if ("associate" in db[modelName]) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
