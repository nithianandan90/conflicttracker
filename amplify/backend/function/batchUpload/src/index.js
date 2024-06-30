/* Amplify Params - DO NOT EDIT
	API_CONFLICTTRACKER_GRAPHQLAPIENDPOINTOUTPUT
	API_CONFLICTTRACKER_GRAPHQLAPIIDOUTPUT
	API_CONFLICTTRACKER_GRAPHQLAPIKEYOUTPUT
	AUTH_CONFLICTTRACKER4566C943_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const batchUploadCountries = require('./batchUploadCountries');

exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  console.log(`EVENT: ${JSON.stringify(event)}`);

  await batchUploadCountries(event.arguments.input);

  // for (const record of event.Records) {
  //   console.log(record.eventID);
  //   console.log(record.eventName);
  //   console.log('DynamoDB Record: %j', record.dynamodb);
  // }
  return Promise.resolve('Successfully processed DynamoDB record');
};
