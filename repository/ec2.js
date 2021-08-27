'use strict'

const {
	EC2Client,
	DescribeSecurityGroupsCommand
} = require("@aws-sdk/client-ec2");
const MAX_AWS_CLI_ATTEMPTS = 3;

const config = {
	maxAttempts: MAX_AWS_CLI_ATTEMPTS
}

const client = new EC2Client(config);

async function getSecurityGroups(nextToken) {
	const input = {
		DryRun: false,
		NextToken: nextToken
	}

	const command = new DescribeSecurityGroupsCommand(input);
	const response = await client.send(command);

	return response;
}

module.exports = {
	getSecurityGroups
}
