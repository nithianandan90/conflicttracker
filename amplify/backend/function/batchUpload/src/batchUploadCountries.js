const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

const env = process.env.ENV;
const AppsyncID = process.env.API_CONFLICTTRACKER_GRAPHQLAPIIDOUTPUT;
const TestTableName = `TestTable-${AppsyncID}-${env}`; // TableName-AppsyncID-env

const BATCH_SIZE = 25;

const handle = async (countryData) => {
  for (let i = 0; i < countryData.length; i += BATCH_SIZE) {
    const chunk = countryData.slice(i, i + BATCH_SIZE);
    await addCountries(chunk);
  }
};

const addCountries = async (items) => {
  const params = {
    RequestItems: {
      [TestTableName]: items.map((data) => generatePutRequest(data)),
    },
  };

  try {
    console.log('params', JSON.stringify(params));

    console.log('writing');

    await docClient.batchWrite(params).promise();

    console.log('completed writing');
  } catch (e) {
    console.log(e);
  }
};

const generatePutRequest = (data) => {
  const date = new Date();
  const dateStr = date.toISOString();
  const timestamp = date.getTime();

  return {
    PutRequest: {
      Item: {
        id: Math.random().toString(36).substring(7),
        Flag: data.Flag,
        Name: data.Name,
        Code: data.Code,
        Population: data.Population,
        conflictID: data.conflictID,
        _lastChangedAt: timestamp,
        createdAt: dateStr,
        updatedAt: dateStr,
        _version: 1,
        __typename: 'TestTable',
      },
    },
  };
};

module.exports = handle;
