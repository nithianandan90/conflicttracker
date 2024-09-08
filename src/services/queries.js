import { gql } from '@apollo/client';

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
