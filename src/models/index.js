// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Nature = {
  "POLITICAL": "POLITICAL",
  "ECONOMIC": "ECONOMIC",
  "SOCIAL": "SOCIAL",
  "CIVIL": "CIVIL",
  "INTERNATIONAL": "INTERNATIONAL",
  "ENVIRONMENTANDRESOURCE": "ENVIRONMENTANDRESOURCE",
  "HEALTH": "HEALTH"
};

const ConflictStatus = {
  "IMPROVING": "IMPROVING",
  "WORSENING": "WORSENING",
  "UNCHANGED": "UNCHANGED"
};

const { LatestNews, People, Commodities, Conflict, Country, Todo, TestTable } = initSchema(schema);

export {
  LatestNews,
  People,
  Commodities,
  Conflict,
  Country,
  Todo,
  TestTable,
  Nature,
  ConflictStatus
};