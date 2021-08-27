'use strict'

const {
	awsAuthoriserPolicy: {
		generatePolicy
}} = require('../../helpers');

const testPayload = {
	principalId: 'user',
	resource: 'arn:aws:execute-api:us-east-1:test-api/dev/GET'
}

describe('generatePolicy', () => {
	test('generate.allow.policy', (done) => {
		const allowPayload = {
			...testPayload,
			effect: 'Allow',
		}

		const successResponse = generatePolicy(allowPayload);
		expect(successResponse).toMatchSnapshot();

		done();
	});

	test('generate.deny.policy', (done) => {
		const denyPayload = {
			...testPayload,
			effect: 'Deny',
		}

		const successResponse = generatePolicy(denyPayload);
		expect(successResponse).toMatchSnapshot();

		done();
	});
});
