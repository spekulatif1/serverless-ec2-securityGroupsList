const awsSecurityGroupsListResponse = {
		"$metadata": {
			"httpStatusCode": 200,
			"requestId": "test.request.id",
			"attempts": 1,
			"totalRetryDelay": 0
		},
		"SecurityGroups": [{
			"Description": "TrendMicro-Assignment-Test",
			"GroupName": "TrendMicro-Assignment-Test",
			"IpPermissions": [{
				"FromPort": 80,
				"IpProtocol": "tcp",
				"IpRanges": [{
					"CidrIp": "0.0.0.0/0"
				}],
				"Ipv6Ranges": [{
					"CidrIpv6": "::/0"
				}],
				"PrefixListIds": [],
				"ToPort": 80,
				"UserIdGroupPairs": []
			}],
			"OwnerId": "TrendMicro",
			"GroupId": "sg-trendMicro",
			"IpPermissionsEgress": [{
				"IpProtocol": "-1",
				"IpRanges": [{
					"CidrIp": "0.0.0.0/0"
				}],
				"Ipv6Ranges": [],
				"PrefixListIds": [],
				"UserIdGroupPairs": []
			}],
			"VpcId": "vpc-trendMicro"
		}]
	}

module.exports = {
	"$metadata": {
		"httpStatusCode": 200,
		"requestId": "test.request.id",
		"attempts": 1,
		"totalRetryDelay": 0
	},
	"SecurityGroups": [{
		"Description": "TrendMicro-Assignment-Test",
		"GroupName": "TrendMicro-Assignment-Test",
		"IpPermissions": [{
			"FromPort": 80,
			"IpProtocol": "tcp",
			"IpRanges": [{
				"CidrIp": "0.0.0.0/0"
			}],
			"Ipv6Ranges": [{
				"CidrIpv6": "::/0"
			}],
			"PrefixListIds": [],
			"ToPort": 80,
			"UserIdGroupPairs": []
		}],
		"OwnerId": "TrendMicro",
		"GroupId": "sg-trendMicro",
		"IpPermissionsEgress": [{
			"IpProtocol": "-1",
			"IpRanges": [{
				"CidrIp": "0.0.0.0/0"
			}],
			"Ipv6Ranges": [],
			"PrefixListIds": [],
			"UserIdGroupPairs": []
		}],
		"VpcId": "vpc-trendMicro"
	}]
}

module.exports = {
	awsSecurityGroupsListResponse
}
