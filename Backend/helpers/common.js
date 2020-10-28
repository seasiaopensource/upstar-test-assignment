const config = require('config');
const jwt = require('jsonwebtoken');
const moment = require('moment');

const userId = (token) => {
    const decoded = jwt.verify(token, config.jwtToken);
    return decoded.id;
}

const timestamp = () => {
	return time = moment.utc().format('X');
}

module.exports = {
    timestamp,
    userId
}