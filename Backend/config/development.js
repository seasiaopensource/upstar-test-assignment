const db = require('./db');

module.exports = {
  db: db.development,
  appPort: 8069,
  boxImages: '/images/box/',
  categoryImages: '/images/category/',
  productImages: '/images/product/',
  jwtToken: 'PGSGFUISBHS=^$#*(%^#',
  baseUrl: '',
  expiresIn: 8640000
};
