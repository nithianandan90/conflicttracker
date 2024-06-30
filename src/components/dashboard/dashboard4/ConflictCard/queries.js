import { gql } from '@apollo/client';

export const getConflict = gql`
  query GetConflict($id: ID!) {
    getConflict(id: $id) {
      id
      Name
      Countries {
        nextToken
        startedAt
        __typename
      }
      Description
      Travel
      Images
      Status
      Nature
      Commodities {
        nextToken
        startedAt
        __typename
      }
      peopleID
      latestnewsID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
