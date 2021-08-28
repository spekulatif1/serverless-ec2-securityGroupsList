'use strict'

const FALLBACK_ERROR_CODE = 500000;
const SUCCESS_RESPONSE_CODE = 200;

const errorResponses = {
	500000: {
		title: 'Internal Server Error',
		statusCode: 500,
	}
};

function build(body, statusCode) {
	return {
		statusCode,
		body: JSON.stringify(body)
	};
}

function buildErrorResponse(errorMessage, responseCode) {
	const { title, statusCode } = errorResponses
		.hasOwnProperty(responseCode) ?
			errorResponses[responseCode] :
				errorResponses[FALLBACK_ERROR_CODE]

	const errorResponseObject = {
		errors: [{
			detail: errorMessage,
			title
		}]
	}

	return build(errorResponseObject, statusCode)
}

function buildSuccessResponse(data) {
	const responseBody = {
		data
	}

	return build(responseBody, SUCCESS_RESPONSE_CODE);
}

module.exports = {
	buildSuccessResponse,
	buildErrorResponse
}
