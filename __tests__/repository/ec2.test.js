'use strict'

const {
	EC2Client,
	DescribeSecurityGroupsCommand
} = require("@aws-sdk/client-ec2");
const { mockClient } = require("aws-sdk-client-mock");
const ec2Mock = mockClient(EC2Client);

const { ec2 } = require('../../repository');
const { awsSecurityGroupsListResponse } = require('../../data/sample');

describe('ec2.repository', () => {
	afterEach(jest.clearAllMocks);

	test('ec2.repository.securityGroups.success', async () => {
		ec2Mock.on(DescribeSecurityGroupsCommand)
			.resolves(awsSecurityGroupsListResponse);

		const successResponse = await ec2.getSecurityGroups();
		expect(successResponse).toMatchSnapshot();
	});
});
