/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLatestNews = /* GraphQL */ `
  subscription OnCreateLatestNews(
    $filter: ModelSubscriptionLatestNewsFilterInput
  ) {
    onCreateLatestNews(filter: $filter) {
      id
      Headline
      Content
      Conflicts {
        nextToken
        startedAt
        __typename
      }
      Images
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateLatestNews = /* GraphQL */ `
  subscription OnUpdateLatestNews(
    $filter: ModelSubscriptionLatestNewsFilterInput
  ) {
    onUpdateLatestNews(filter: $filter) {
      id
      Headline
      Content
      Conflicts {
        nextToken
        startedAt
        __typename
      }
      Images
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteLatestNews = /* GraphQL */ `
  subscription OnDeleteLatestNews(
    $filter: ModelSubscriptionLatestNewsFilterInput
  ) {
    onDeleteLatestNews(filter: $filter) {
      id
      Headline
      Content
      Conflicts {
        nextToken
        startedAt
        __typename
      }
      Images
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreatePeople = /* GraphQL */ `
  subscription OnCreatePeople($filter: ModelSubscriptionPeopleFilterInput) {
    onCreatePeople(filter: $filter) {
      id
      Name
      Description
      Role
      Conflicts {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdatePeople = /* GraphQL */ `
  subscription OnUpdatePeople($filter: ModelSubscriptionPeopleFilterInput) {
    onUpdatePeople(filter: $filter) {
      id
      Name
      Description
      Role
      Conflicts {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeletePeople = /* GraphQL */ `
  subscription OnDeletePeople($filter: ModelSubscriptionPeopleFilterInput) {
    onDeletePeople(filter: $filter) {
      id
      Name
      Description
      Role
      Conflicts {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateCommodities = /* GraphQL */ `
  subscription OnCreateCommodities(
    $filter: ModelSubscriptionCommoditiesFilterInput
  ) {
    onCreateCommodities(filter: $filter) {
      id
      Name
      Image
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
export const onUpdateCommodities = /* GraphQL */ `
  subscription OnUpdateCommodities(
    $filter: ModelSubscriptionCommoditiesFilterInput
  ) {
    onUpdateCommodities(filter: $filter) {
      id
      Name
      Image
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
export const onDeleteCommodities = /* GraphQL */ `
  subscription OnDeleteCommodities(
    $filter: ModelSubscriptionCommoditiesFilterInput
  ) {
    onDeleteCommodities(filter: $filter) {
      id
      Name
      Image
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
export const onCreateConflict = /* GraphQL */ `
  subscription OnCreateConflict($filter: ModelSubscriptionConflictFilterInput) {
    onCreateConflict(filter: $filter) {
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
export const onUpdateConflict = /* GraphQL */ `
  subscription OnUpdateConflict($filter: ModelSubscriptionConflictFilterInput) {
    onUpdateConflict(filter: $filter) {
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
export const onDeleteConflict = /* GraphQL */ `
  subscription OnDeleteConflict($filter: ModelSubscriptionConflictFilterInput) {
    onDeleteConflict(filter: $filter) {
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
export const onCreateCountry = /* GraphQL */ `
  subscription OnCreateCountry($filter: ModelSubscriptionCountryFilterInput) {
    onCreateCountry(filter: $filter) {
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
export const onUpdateCountry = /* GraphQL */ `
  subscription OnUpdateCountry($filter: ModelSubscriptionCountryFilterInput) {
    onUpdateCountry(filter: $filter) {
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
export const onDeleteCountry = /* GraphQL */ `
  subscription OnDeleteCountry($filter: ModelSubscriptionCountryFilterInput) {
    onDeleteCountry(filter: $filter) {
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
export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onCreateTodo(filter: $filter) {
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
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onUpdateTodo(filter: $filter) {
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
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
    onDeleteTodo(filter: $filter) {
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
  }
`;
export const onCreateTestTable = /* GraphQL */ `
  subscription OnCreateTestTable(
    $filter: ModelSubscriptionTestTableFilterInput
  ) {
    onCreateTestTable(filter: $filter) {
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
export const onUpdateTestTable = /* GraphQL */ `
  subscription OnUpdateTestTable(
    $filter: ModelSubscriptionTestTableFilterInput
  ) {
    onUpdateTestTable(filter: $filter) {
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
export const onDeleteTestTable = /* GraphQL */ `
  subscription OnDeleteTestTable(
    $filter: ModelSubscriptionTestTableFilterInput
  ) {
    onDeleteTestTable(filter: $filter) {
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
