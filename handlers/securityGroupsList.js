'use strict'

const { ec2: {
	listSecurityGroups
}} = require('../service');

const {
	responder: {
		buildErrorResponse
}} = require('../helpers');

exports.index = async(event, context) => {
	try {
		console.log('handler.list.start');

		return await listSecurityGroups();
	} catch (e) {
		console.log(
			'handler.list.error.occured',
			{ e }
		);

		return buildErrorResponse(e.message);
	}
};
