import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

export enum Nature {
  POLITICAL = "POLITICAL",
  ECONOMIC = "ECONOMIC",
  SOCIAL = "SOCIAL",
  CIVIL = "CIVIL",
  INTERNATIONAL = "INTERNATIONAL",
  ENVIRONMENTANDRESOURCE = "ENVIRONMENTANDRESOURCE",
  HEALTH = "HEALTH"
}

export enum ConflictStatus {
  IMPROVING = "IMPROVING",
  WORSENING = "WORSENING",
  UNCHANGED = "UNCHANGED"
}



type EagerLatestNews = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LatestNews, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Headline?: string | null;
  readonly Content?: string | null;
  readonly Conflicts?: (Conflict | null)[] | null;
  readonly Images?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLatestNews = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LatestNews, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Headline?: string | null;
  readonly Content?: string | null;
  readonly Conflicts: AsyncCollection<Conflict>;
  readonly Images?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type LatestNews = LazyLoading extends LazyLoadingDisabled ? EagerLatestNews : LazyLatestNews

export declare const LatestNews: (new (init: ModelInit<LatestNews>) => LatestNews) & {
  copyOf(source: LatestNews, mutator: (draft: MutableModel<LatestNews>) => MutableModel<LatestNews> | void): LatestNews;
}

type EagerPeople = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<People, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Description?: string | null;
  readonly Role?: string | null;
  readonly Conflicts?: (Conflict | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPeople = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<People, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Description?: string | null;
  readonly Role?: string | null;
  readonly Conflicts: AsyncCollection<Conflict>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type People = LazyLoading extends LazyLoadingDisabled ? EagerPeople : LazyPeople

export declare const People: (new (init: ModelInit<People>) => People) & {
  copyOf(source: People, mutator: (draft: MutableModel<People>) => MutableModel<People> | void): People;
}

type EagerCommodities = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Commodities, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Image?: string | null;
  readonly conflictID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCommodities = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Commodities, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Image?: string | null;
  readonly conflictID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Commodities = LazyLoading extends LazyLoadingDisabled ? EagerCommodities : LazyCommodities

export declare const Commodities: (new (init: ModelInit<Commodities>) => Commodities) & {
  copyOf(source: Commodities, mutator: (draft: MutableModel<Commodities>) => MutableModel<Commodities> | void): Commodities;
}

type EagerConflict = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Conflict, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Countries?: (Country | null)[] | null;
  readonly Description?: string | null;
  readonly Travel?: string | null;
  readonly Images?: (string | null)[] | null;
  readonly Status?: ConflictStatus | keyof typeof ConflictStatus | null;
  readonly Nature?: Nature | keyof typeof Nature | null;
  readonly Commodities?: (Commodities | null)[] | null;
  readonly peopleID?: string | null;
  readonly latestnewsID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyConflict = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Conflict, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Countries: AsyncCollection<Country>;
  readonly Description?: string | null;
  readonly Travel?: string | null;
  readonly Images?: (string | null)[] | null;
  readonly Status?: ConflictStatus | keyof typeof ConflictStatus | null;
  readonly Nature?: Nature | keyof typeof Nature | null;
  readonly Commodities: AsyncCollection<Commodities>;
  readonly peopleID?: string | null;
  readonly latestnewsID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Conflict = LazyLoading extends LazyLoadingDisabled ? EagerConflict : LazyConflict

export declare const Conflict: (new (init: ModelInit<Conflict>) => Conflict) & {
  copyOf(source: Conflict, mutator: (draft: MutableModel<Conflict>) => MutableModel<Conflict> | void): Conflict;
}

type EagerCountry = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Country, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Flag?: string | null;
  readonly Name?: string | null;
  readonly Code?: string | null;
  readonly Population?: string | null;
  readonly conflictID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCountry = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Country, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Flag?: string | null;
  readonly Name?: string | null;
  readonly Code?: string | null;
  readonly Population?: string | null;
  readonly conflictID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Country = LazyLoading extends LazyLoadingDisabled ? EagerCountry : LazyCountry

export declare const Country: (new (init: ModelInit<Country>) => Country) & {
  copyOf(source: Country, mutator: (draft: MutableModel<Country>) => MutableModel<Country> | void): Country;
}

type EagerTodo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Todo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTodo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Todo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Todo = LazyLoading extends LazyLoadingDisabled ? EagerTodo : LazyTodo

export declare const Todo: (new (init: ModelInit<Todo>) => Todo) & {
  copyOf(source: Todo, mutator: (draft: MutableModel<Todo>) => MutableModel<Todo> | void): Todo;
}

type EagerTestTable = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TestTable, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Flag?: string | null;
  readonly Name?: string | null;
  readonly Code?: string | null;
  readonly Population?: string | null;
  readonly conflictID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTestTable = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TestTable, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Flag?: string | null;
  readonly Name?: string | null;
  readonly Code?: string | null;
  readonly Population?: string | null;
  readonly conflictID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TestTable = LazyLoading extends LazyLoadingDisabled ? EagerTestTable : LazyTestTable

export declare const TestTable: (new (init: ModelInit<TestTable>) => TestTable) & {
  copyOf(source: TestTable, mutator: (draft: MutableModel<TestTable>) => MutableModel<TestTable> | void): TestTable;
}