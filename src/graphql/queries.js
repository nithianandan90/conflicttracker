/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLatestNews = /* GraphQL */ `
  query GetLatestNews($id: ID!) {
    getLatestNews(id: $id) {
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
export const listLatestNews = /* GraphQL */ `
  query ListLatestNews($filter: ModelLatestNewsFilterInput, $limit: Int, $nextToken: String) {
    listLatestNews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Headline
        Content
        Images
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
export const syncLatestNews = /* GraphQL */ `
  query SyncLatestNews(
    $filter: ModelLatestNewsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLatestNews(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
      items {
        id
        Headline
        Content
        Images
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
export const getPeople = /* GraphQL */ `
  query GetPeople($id: ID!) {
    getPeople(id: $id) {
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
export const listPeople = /* GraphQL */ `
  query ListPeople($filter: ModelPeopleFilterInput, $limit: Int, $nextToken: String) {
    listPeople(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Name
        Description
        Role
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
export const syncPeople = /* GraphQL */ `
  query SyncPeople(
    $filter: ModelPeopleFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPeople(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
      items {
        id
        Name
        Description
        Role
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
export const getCommodities = /* GraphQL */ `
  query GetCommodities($id: ID!) {
    getCommodities(id: $id) {
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
export const listCommodities = /* GraphQL */ `
  query ListCommodities($filter: ModelCommoditiesFilterInput, $limit: Int, $nextToken: String) {
    listCommodities(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncCommodities = /* GraphQL */ `
  query SyncCommodities(
    $filter: ModelCommoditiesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCommodities(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const commoditiesByConflictID = /* GraphQL */ `
  query CommoditiesByConflictID(
    $conflictID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCommoditiesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commoditiesByConflictID(
      conflictID: $conflictID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getConflict = /* GraphQL */ `
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
export const listConflicts = /* GraphQL */ `
  query ListConflicts($filter: ModelConflictFilterInput, $limit: Int, $nextToken: String) {
    listConflicts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Name
        Description
        Travel
        Images
        Status
        Nature
        peopleID
        latestnewsID
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
export const syncConflicts = /* GraphQL */ `
  query SyncConflicts(
    $filter: ModelConflictFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncConflicts(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
      items {
        id
        Name
        Description
        Travel
        Images
        Status
        Nature
        peopleID
        latestnewsID
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
export const conflictsByPeopleID = /* GraphQL */ `
  query ConflictsByPeopleID(
    $peopleID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelConflictFilterInput
    $limit: Int
    $nextToken: String
  ) {
    conflictsByPeopleID(
      peopleID: $peopleID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        Name
        Description
        Travel
        Images
        Status
        Nature
        peopleID
        latestnewsID
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
export const conflictsByLatestnewsID = /* GraphQL */ `
  query ConflictsByLatestnewsID(
    $latestnewsID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelConflictFilterInput
    $limit: Int
    $nextToken: String
  ) {
    conflictsByLatestnewsID(
      latestnewsID: $latestnewsID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        Name
        Description
        Travel
        Images
        Status
        Nature
        peopleID
        latestnewsID
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
export const getCountry = /* GraphQL */ `
  query GetCountry($id: ID!) {
    getCountry(id: $id) {
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
export const listCountries = /* GraphQL */ `
  query ListCountries($filter: ModelCountryFilterInput, $limit: Int, $nextToken: String) {
    listCountries(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
export const syncCountries = /* GraphQL */ `
  query SyncCountries(
    $filter: ModelCountryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCountries(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
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
export const countriesByConflictID = /* GraphQL */ `
  query CountriesByConflictID(
    $conflictID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCountryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    countriesByConflictID(
      conflictID: $conflictID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
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
export const listTodos = /* GraphQL */ `
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
export const syncTodos = /* GraphQL */ `
  query SyncTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTodos(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
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
export const getTestTable = /* GraphQL */ `
  query GetTestTable($id: ID!) {
    getTestTable(id: $id) {
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
export const listTestTables = /* GraphQL */ `
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
export const syncTestTables = /* GraphQL */ `
  query SyncTestTables(
    $filter: ModelTestTableFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTestTables(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
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
