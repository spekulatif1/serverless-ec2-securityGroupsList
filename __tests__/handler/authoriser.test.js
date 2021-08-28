'use strict'

const {
	index: authorizerHandler
} = require('../../handler/authorizer');

const handlerTestEvent = {
	methodArn: 'arn:aws:execute-api:us-east-1:test-api/dev/GET'
}

describe('authorizerHandler', () => {
	test('authorizerHandler.allows.requests', async() => {
		const allowEvent = {
			...handlerTestEvent,
			authorizationToken: 'allow'
		}

		const successResponse = await authorizerHandler(allowEvent);
		expect(successResponse).toMatchSnapshot();
	});

	test('authorizerHandler.denies.requests', async() => {
		const allowEvent = {
			...handlerTestEvent,
			authorizationToken: 'deny'
		}

		const successResponse = await authorizerHandler(allowEvent);
		expect(successResponse).toMatchSnapshot();
	});

	test('authorizerHandler.unauthorize.requests', async() => {
		const allowEvent = {
			...handlerTestEvent,
			authorizationToken: 'unauthorized'
		}

		const successResponse = await authorizerHandler(allowEvent);
		expect(successResponse).toMatchSnapshot();
	});

	test('authorizerHandler.returns.error.with.invalid.token', async() => {
		const allowEvent = {
			...handlerTestEvent,
			authorizationToken: 'InvalidToken'
		}

		const successResponse = await authorizerHandler(allowEvent);
		expect(successResponse).toMatchSnapshot();
	});
});
