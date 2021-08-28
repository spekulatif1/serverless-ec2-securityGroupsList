
# EC2 Security Groups List API

Server APIs for fetching and listing ec2 security groups.

## Usage

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure.

    $ node --version
    v14.X

    $ npm --version
    7.X

### Install
    $ git clone https://github.com/spekulatif1/serverless-ec2-securityGroupsList.git
    $ cd PROJECT
    $ npm install -g serverless
    $ npm install

### Run
    $ sls offline

### Run Tests
    $ npm install -g jest
    $ npm test


### Deployment

This example is made to work with the Serverless Framework dashboard which includes advanced features like CI/CD, monitoring, metrics, etc.

```
$ serverless login
$ serverless deploy
```

To deploy without the dashboard you will need to remove `org` and `app` fields from the `serverless.yml`, and you won’t have to run `sls login` before deploying.

After running deploy, you should see output similar to:

```bash
Serverless: Packaging service...
Serverless: Excluding development dependencies...
Serverless: Creating Stack...
Serverless: Checking Stack create progress...
........
Serverless: Stack create finished...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading artifacts...
Serverless: Uploading service aws-node-rest-api.zip file to S3 (711.23 KB)...
Serverless: Validating template...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
.................................
Serverless: Stack update finished...
Service Information
service: aws-node-rest-api
stage: dev
region: us-east-1
stack: aws-node-rest-api-dev
resources: 12
api keys:
  None
endpoints:
  ANY - https://xxxxxxx.execute-api.us-east-1.amazonaws.com/dev/
functions:
  api: aws-node-rest-api-dev-hello
layers:
  None
```

### Invocation

After successful deployment, you can call the created application via HTTP:
Lambda handlers are protected by an authorizer;

```bash
curl -i -H "Authorization: allow" https://xxxxxxx.execute-api.us-east-1.amazonaws.com/dev/
```

Which should result in response similar to the following

```json
{
  "data": {
    ...
  }
}
```
