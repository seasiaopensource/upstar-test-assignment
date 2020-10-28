const db = require('../models/index');

exports.checkDbConnection = () => new Promise((resolve, reject) => {
  db.sequelize
    .authenticate()
    .then(() => {
       resolve();
    })
    .catch(err => {
      reject();
    });
});