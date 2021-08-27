'use strict'

const {
	responder
} = require('../../helpers');

describe('responder', () => {
	test('responder.generates.HTTP.200.response', (done) => {
		const succesPayload = [
			{
				"type": "articles",
				"id": "1",
				"attributes": {
					"title": "JSON:API paints my bikeshed!"
				}
			}
		];

		const successResponse = responder.buildSuccessResponse(succesPayload);
		expect(successResponse).toMatchSnapshot();

		done();
	});

	test('responder.generates.HTTP.500.response', (done) => {
		const errorMessage = 'testing.purposes';

		const errorResponse = responder.buildErrorResponse(errorMessage);
		expect(errorResponse).toMatchSnapshot();

		done();
	});

	test('responder.fallbacks.to.HTTP.500.with.not.defined.error.code', (done) => {
		const errorMessage = 'testing.with.not.defined.error.code';
		const notDefinedErrorCode = 'NotDefinedErrorCode';

		const errorResponse = responder.buildErrorResponse(
			errorMessage,
			notDefinedErrorCode
		);

		expect(errorResponse).toMatchSnapshot();

		done();
	});
});
