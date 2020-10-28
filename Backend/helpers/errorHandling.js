function handleError(message, code) {
	this.code = code
	this.message = (message)
}

handleError.prototype = Error.prototype

module.exports = {
	handleError
}
