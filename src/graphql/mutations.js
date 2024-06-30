/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const batchTest = /* GraphQL */ `
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
export const createLatestNews = /* GraphQL */ `
  mutation CreateLatestNews(
    $input: CreateLatestNewsInput!
    $condition: ModelLatestNewsConditionInput
  ) {
    createLatestNews(input: $input, condition: $condition) {
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
export const updateLatestNews = /* GraphQL */ `
  mutation UpdateLatestNews(
    $input: UpdateLatestNewsInput!
    $condition: ModelLatestNewsConditionInput
  ) {
    updateLatestNews(input: $input, condition: $condition) {
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
export const deleteLatestNews = /* GraphQL */ `
  mutation DeleteLatestNews(
    $input: DeleteLatestNewsInput!
    $condition: ModelLatestNewsConditionInput
  ) {
    deleteLatestNews(input: $input, condition: $condition) {
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
export const createPeople = /* GraphQL */ `
  mutation CreatePeople(
    $input: CreatePeopleInput!
    $condition: ModelPeopleConditionInput
  ) {
    createPeople(input: $input, condition: $condition) {
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
export const updatePeople = /* GraphQL */ `
  mutation UpdatePeople(
    $input: UpdatePeopleInput!
    $condition: ModelPeopleConditionInput
  ) {
    updatePeople(input: $input, condition: $condition) {
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
export const deletePeople = /* GraphQL */ `
  mutation DeletePeople(
    $input: DeletePeopleInput!
    $condition: ModelPeopleConditionInput
  ) {
    deletePeople(input: $input, condition: $condition) {
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
export const createCommodities = /* GraphQL */ `
  mutation CreateCommodities(
    $input: CreateCommoditiesInput!
    $condition: ModelCommoditiesConditionInput
  ) {
    createCommodities(input: $input, condition: $condition) {
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
export const updateCommodities = /* GraphQL */ `
  mutation UpdateCommodities(
    $input: UpdateCommoditiesInput!
    $condition: ModelCommoditiesConditionInput
  ) {
    updateCommodities(input: $input, condition: $condition) {
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
export const deleteCommodities = /* GraphQL */ `
  mutation DeleteCommodities(
    $input: DeleteCommoditiesInput!
    $condition: ModelCommoditiesConditionInput
  ) {
    deleteCommodities(input: $input, condition: $condition) {
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
export const createConflict = /* GraphQL */ `
  mutation CreateConflict(
    $input: CreateConflictInput!
    $condition: ModelConflictConditionInput
  ) {
    createConflict(input: $input, condition: $condition) {
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
export const updateConflict = /* GraphQL */ `
  mutation UpdateConflict(
    $input: UpdateConflictInput!
    $condition: ModelConflictConditionInput
  ) {
    updateConflict(input: $input, condition: $condition) {
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
export const deleteConflict = /* GraphQL */ `
  mutation DeleteConflict(
    $input: DeleteConflictInput!
    $condition: ModelConflictConditionInput
  ) {
    deleteConflict(input: $input, condition: $condition) {
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
export const createCountry = /* GraphQL */ `
  mutation CreateCountry(
    $input: CreateCountryInput!
    $condition: ModelCountryConditionInput
  ) {
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
export const updateCountry = /* GraphQL */ `
  mutation UpdateCountry(
    $input: UpdateCountryInput!
    $condition: ModelCountryConditionInput
  ) {
    updateCountry(input: $input, condition: $condition) {
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
export const deleteCountry = /* GraphQL */ `
  mutation DeleteCountry(
    $input: DeleteCountryInput!
    $condition: ModelCountryConditionInput
  ) {
    deleteCountry(input: $input, condition: $condition) {
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
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
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
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
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
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
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
export const createTestTable = /* GraphQL */ `
  mutation CreateTestTable(
    $input: CreateTestTableInput!
    $condition: ModelTestTableConditionInput
  ) {
    createTestTable(input: $input, condition: $condition) {
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
export const updateTestTable = /* GraphQL */ `
  mutation UpdateTestTable(
    $input: UpdateTestTableInput!
    $condition: ModelTestTableConditionInput
  ) {
    updateTestTable(input: $input, condition: $condition) {
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
export const deleteTestTable = /* GraphQL */ `
  mutation DeleteTestTable(
    $input: DeleteTestTableInput!
    $condition: ModelTestTableConditionInput
  ) {
    deleteTestTable(input: $input, condition: $condition) {
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
