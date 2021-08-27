'use strict';

const { ec2: {
	getSecurityGroups
}} = require('../repository');

const { responder: {
	buildSuccessResponse
}} = require('../helpers');

async function listSecurityGroups() {
	console.log(
		'service.ec2.listSecurityGroups.start'
	);

	const securityGroupsList = [];
	let nextToken;

	do {
		const awsResponse = await getSecurityGroups();

		const {
			SecurityGroups: awsSecurityGroupsList
		} = awsResponse;

		securityGroupsList.push(...awsSecurityGroupsList);
		({ NextToken: nextToken } = awsResponse);
	} while (nextToken);

	return buildSuccessResponse(
		securityGroupsList
	);
}

module.exports = {
	listSecurityGroups
}
