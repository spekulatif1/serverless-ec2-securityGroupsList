'use strict'

const {
	EC2Client,
	DescribeSecurityGroupsCommand
} = require("@aws-sdk/client-ec2");
const { mockClient } = require("aws-sdk-client-mock");
const ec2Mock = mockClient(EC2Client);
const { ec2 } = require('../../service');
const { awsSecurityGroupsListResponse } = require('../../data/sample');

describe('ec2.service', () => {
	beforeEach(() => {
		ec2Mock.reset();
	});

	const TEST_TOKEN = 'TEST';
	test('ec2.service.securityGroups.success', async () => {
		ec2Mock
			.on(DescribeSecurityGroupsCommand, { NextToken: undefined })
			.resolves(awsSecurityGroupsListResponse)

		const successResponse = await ec2.listSecurityGroups();

		expect(successResponse).toMatchSnapshot();
		expect(ec2Mock.calls()).toHaveLength(1);
	});

	test('ec2.service.securityGroups.success.with.NextToken', async () => {
		ec2Mock
			.on(DescribeSecurityGroupsCommand, { NextToken: undefined })
			.resolves({...awsSecurityGroupsListResponse, NextToken: TEST_TOKEN })
			.on(DescribeSecurityGroupsCommand, { NextToken: TEST_TOKEN })
			.resolves({...awsSecurityGroupsListResponse, NextToken: undefined });

		const successResponse = await ec2.listSecurityGroups();

		expect(successResponse).toMatchSnapshot();
		expect(ec2Mock.calls()).toHaveLength(2);
	});
});
