'use strict'

const {
	index: securityGroupsHandler
} = require('../../handler/securityGroupsList');
const {
	EC2Client,
	DescribeSecurityGroupsCommand
} = require("@aws-sdk/client-ec2");
const { mockClient } = require("aws-sdk-client-mock");
const ec2Mock = mockClient(EC2Client);
const {
	awsSecurityGroupsListResponse
} = require('../../data/sample');

describe('securityGroupsHandler', () => {
	beforeEach(() => {
		ec2Mock.reset();
	});

	test('securityGroupsHandler.HTTP.200', async() => {
		ec2Mock
			.on(DescribeSecurityGroupsCommand, { NextToken: undefined })
			.resolves(awsSecurityGroupsListResponse)

		const successResponse = await securityGroupsHandler();
		expect(successResponse).toMatchSnapshot();
	});

	test('securityGroupsHandler.HTTP.500', async() => {
		ec2Mock
			.on(DescribeSecurityGroupsCommand, { NextToken: undefined })
			.rejects({
				Code: 'AuthFailure',
				'$fault': 'client',
				'$metadata': {
					httpStatusCode: 401,
					requestId: 'b02554e9-82a9-4b63-8c75-6eae22f7446e',
					extendedRequestId: undefined,
					cfId: undefined,
					attempts: 3,
					totalRetryDelay: 564
				}
			})

		const successResponse = await securityGroupsHandler();
		expect(successResponse).toMatchSnapshot();
	});
});
