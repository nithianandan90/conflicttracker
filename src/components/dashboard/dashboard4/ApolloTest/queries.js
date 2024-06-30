import { gql } from '@apollo/client';

export const listTodos = gql`
  query ListTodos($filter: ModelTodoFilterInput, $limit: Int, $nextToken: String) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;

export const createCountryBatch = gql`
  mutation CreateCountryBatch($input: CreateCountryInput!, $condition: ModelCountryConditionInput) {
    createCountryBatch(input: $input, condition: $condition) {
      id
      Flag
      Name
      Code
      Population
      conflictID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;

export const createCountry = gql`
  mutation CreateCountry($input: CreateCountryInput!, $condition: ModelCountryConditionInput) {
    createCountry(input: $input, condition: $condition) {
      id
      Flag
      Name
      Code
      Population
      conflictID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;

export const testFunction = gql`
  mutation TestFunction($input: CreateCountryInput!, $condition: ModelCountryConditionInput) {
    testFunction(input: $input, condition: $condition) {
      id
      Flag
      Name
      Code
      Population
      conflictID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;

export const batchTest = gql`
  mutation BatchTest($input: [CreateCountryInput]!) {
    batchTest(input: $input) {
      id
      Flag
      Name
      Code
      Population
      conflictID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;

export const listTestTables = gql`
  query ListTestTables($filter: ModelTestTableFilterInput, $limit: Int, $nextToken: String) {
    listTestTables(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Flag
        Name
        Code
        Population
        conflictID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
