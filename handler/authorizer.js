'use strict';

const {
	awsAuthoriserPolicy: {
		generatePolicy
}} = require('../helper');

exports.index = async(event) => {
	const token = event.authorizationToken;

	console.log(
		'handler.authorizer.start',
		{ token }
	);

	switch (token) {
		case 'allow':
			return generatePolicy('user', 'Allow', event.methodArn);
		case 'deny':
			return generatePolicy('user', 'Deny', event.methodArn);
		case 'unauthorized':
			return "Unauthorized";   // Return a 401 Unauthorized response
		default:
			return "Error: Invalid token"; // Return a 500 Invalid token response
	}
};
