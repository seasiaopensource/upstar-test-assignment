/*
@status: Boolean
@data: Object
@message: String
@code: Integer
@httpCode: Integer
*/

let jsonResponse = (res, status, data, message, code, httpCode = 200) => {
	return res.status(httpCode).json({
		code: code,
		success: status,
		message: message,
		data: data

	});
};

module.exports = {
	jsonResponse
};
