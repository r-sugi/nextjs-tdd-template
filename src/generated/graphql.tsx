import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  name: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "table_tennis_tables" */
  delete_table_tennis_tables?: Maybe<Table_Tennis_Tables_Mutation_Response>;
  /** delete single row from the table: "table_tennis_tables" */
  delete_table_tennis_tables_by_pk?: Maybe<Table_Tennis_Tables>;
  /** insert data into the table: "table_tennis_tables" */
  insert_table_tennis_tables?: Maybe<Table_Tennis_Tables_Mutation_Response>;
  /** insert a single row into the table: "table_tennis_tables" */
  insert_table_tennis_tables_one?: Maybe<Table_Tennis_Tables>;
  /** update data of the table: "table_tennis_tables" */
  update_table_tennis_tables?: Maybe<Table_Tennis_Tables_Mutation_Response>;
  /** update single row of the table: "table_tennis_tables" */
  update_table_tennis_tables_by_pk?: Maybe<Table_Tennis_Tables>;
  /** update multiples rows of table: "table_tennis_tables" */
  update_table_tennis_tables_many?: Maybe<Array<Maybe<Table_Tennis_Tables_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_Table_Tennis_TablesArgs = {
  where: Table_Tennis_Tables_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Table_Tennis_Tables_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootInsert_Table_Tennis_TablesArgs = {
  objects: Array<Table_Tennis_Tables_Insert_Input>;
  on_conflict?: InputMaybe<Table_Tennis_Tables_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Table_Tennis_Tables_OneArgs = {
  object: Table_Tennis_Tables_Insert_Input;
  on_conflict?: InputMaybe<Table_Tennis_Tables_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Table_Tennis_TablesArgs = {
  _inc?: InputMaybe<Table_Tennis_Tables_Inc_Input>;
  _set?: InputMaybe<Table_Tennis_Tables_Set_Input>;
  where: Table_Tennis_Tables_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Table_Tennis_Tables_By_PkArgs = {
  _inc?: InputMaybe<Table_Tennis_Tables_Inc_Input>;
  _set?: InputMaybe<Table_Tennis_Tables_Set_Input>;
  pk_columns: Table_Tennis_Tables_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Table_Tennis_Tables_ManyArgs = {
  updates: Array<Table_Tennis_Tables_Updates>;
};

/** Boolean expression to compare columns of type "name". All fields are combined with logical 'AND'. */
export type Name_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['name']['input']>;
  _gt?: InputMaybe<Scalars['name']['input']>;
  _gte?: InputMaybe<Scalars['name']['input']>;
  _in?: InputMaybe<Array<Scalars['name']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['name']['input']>;
  _lte?: InputMaybe<Scalars['name']['input']>;
  _neq?: InputMaybe<Scalars['name']['input']>;
  _nin?: InputMaybe<Array<Scalars['name']['input']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "table_tennis_tables" */
  table_tennis_tables: Array<Table_Tennis_Tables>;
  /** fetch aggregated fields from the table: "table_tennis_tables" */
  table_tennis_tables_aggregate: Table_Tennis_Tables_Aggregate;
  /** fetch data from the table: "table_tennis_tables" using primary key columns */
  table_tennis_tables_by_pk?: Maybe<Table_Tennis_Tables>;
};


export type Query_RootTable_Tennis_TablesArgs = {
  distinct_on?: InputMaybe<Array<Table_Tennis_Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Table_Tennis_Tables_Order_By>>;
  where?: InputMaybe<Table_Tennis_Tables_Bool_Exp>;
};


export type Query_RootTable_Tennis_Tables_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Table_Tennis_Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Table_Tennis_Tables_Order_By>>;
  where?: InputMaybe<Table_Tennis_Tables_Bool_Exp>;
};


export type Query_RootTable_Tennis_Tables_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "table_tennis_tables" */
  table_tennis_tables: Array<Table_Tennis_Tables>;
  /** fetch aggregated fields from the table: "table_tennis_tables" */
  table_tennis_tables_aggregate: Table_Tennis_Tables_Aggregate;
  /** fetch data from the table: "table_tennis_tables" using primary key columns */
  table_tennis_tables_by_pk?: Maybe<Table_Tennis_Tables>;
  /** fetch data from the table in a streaming manner: "table_tennis_tables" */
  table_tennis_tables_stream: Array<Table_Tennis_Tables>;
};


export type Subscription_RootTable_Tennis_TablesArgs = {
  distinct_on?: InputMaybe<Array<Table_Tennis_Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Table_Tennis_Tables_Order_By>>;
  where?: InputMaybe<Table_Tennis_Tables_Bool_Exp>;
};


export type Subscription_RootTable_Tennis_Tables_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Table_Tennis_Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Table_Tennis_Tables_Order_By>>;
  where?: InputMaybe<Table_Tennis_Tables_Bool_Exp>;
};


export type Subscription_RootTable_Tennis_Tables_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootTable_Tennis_Tables_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Table_Tennis_Tables_Stream_Cursor_Input>>;
  where?: InputMaybe<Table_Tennis_Tables_Bool_Exp>;
};

/** columns and relationships of "table_tennis_tables" */
export type Table_Tennis_Tables = {
  __typename?: 'table_tennis_tables';
  id: Scalars['Int']['output'];
  name: Scalars['name']['output'];
};

/** aggregated selection of "table_tennis_tables" */
export type Table_Tennis_Tables_Aggregate = {
  __typename?: 'table_tennis_tables_aggregate';
  aggregate?: Maybe<Table_Tennis_Tables_Aggregate_Fields>;
  nodes: Array<Table_Tennis_Tables>;
};

/** aggregate fields of "table_tennis_tables" */
export type Table_Tennis_Tables_Aggregate_Fields = {
  __typename?: 'table_tennis_tables_aggregate_fields';
  avg?: Maybe<Table_Tennis_Tables_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Table_Tennis_Tables_Max_Fields>;
  min?: Maybe<Table_Tennis_Tables_Min_Fields>;
  stddev?: Maybe<Table_Tennis_Tables_Stddev_Fields>;
  stddev_pop?: Maybe<Table_Tennis_Tables_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Table_Tennis_Tables_Stddev_Samp_Fields>;
  sum?: Maybe<Table_Tennis_Tables_Sum_Fields>;
  var_pop?: Maybe<Table_Tennis_Tables_Var_Pop_Fields>;
  var_samp?: Maybe<Table_Tennis_Tables_Var_Samp_Fields>;
  variance?: Maybe<Table_Tennis_Tables_Variance_Fields>;
};


/** aggregate fields of "table_tennis_tables" */
export type Table_Tennis_Tables_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Table_Tennis_Tables_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Table_Tennis_Tables_Avg_Fields = {
  __typename?: 'table_tennis_tables_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "table_tennis_tables". All fields are combined with a logical 'AND'. */
export type Table_Tennis_Tables_Bool_Exp = {
  _and?: InputMaybe<Array<Table_Tennis_Tables_Bool_Exp>>;
  _not?: InputMaybe<Table_Tennis_Tables_Bool_Exp>;
  _or?: InputMaybe<Array<Table_Tennis_Tables_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<Name_Comparison_Exp>;
};

/** unique or primary key constraints on table "table_tennis_tables" */
export enum Table_Tennis_Tables_Constraint {
  /** unique or primary key constraint on columns "id" */
  TableTennisTablesPkey = 'table_tennis_tables_pkey'
}

/** input type for incrementing numeric columns in table "table_tennis_tables" */
export type Table_Tennis_Tables_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "table_tennis_tables" */
export type Table_Tennis_Tables_Insert_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['name']['input']>;
};

/** aggregate max on columns */
export type Table_Tennis_Tables_Max_Fields = {
  __typename?: 'table_tennis_tables_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Table_Tennis_Tables_Min_Fields = {
  __typename?: 'table_tennis_tables_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "table_tennis_tables" */
export type Table_Tennis_Tables_Mutation_Response = {
  __typename?: 'table_tennis_tables_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Table_Tennis_Tables>;
};

/** on_conflict condition type for table "table_tennis_tables" */
export type Table_Tennis_Tables_On_Conflict = {
  constraint: Table_Tennis_Tables_Constraint;
  update_columns?: Array<Table_Tennis_Tables_Update_Column>;
  where?: InputMaybe<Table_Tennis_Tables_Bool_Exp>;
};

/** Ordering options when selecting data from "table_tennis_tables". */
export type Table_Tennis_Tables_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: table_tennis_tables */
export type Table_Tennis_Tables_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "table_tennis_tables" */
export enum Table_Tennis_Tables_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "table_tennis_tables" */
export type Table_Tennis_Tables_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['name']['input']>;
};

/** aggregate stddev on columns */
export type Table_Tennis_Tables_Stddev_Fields = {
  __typename?: 'table_tennis_tables_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Table_Tennis_Tables_Stddev_Pop_Fields = {
  __typename?: 'table_tennis_tables_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Table_Tennis_Tables_Stddev_Samp_Fields = {
  __typename?: 'table_tennis_tables_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "table_tennis_tables" */
export type Table_Tennis_Tables_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Table_Tennis_Tables_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Table_Tennis_Tables_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['name']['input']>;
};

/** aggregate sum on columns */
export type Table_Tennis_Tables_Sum_Fields = {
  __typename?: 'table_tennis_tables_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "table_tennis_tables" */
export enum Table_Tennis_Tables_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type Table_Tennis_Tables_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Table_Tennis_Tables_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Table_Tennis_Tables_Set_Input>;
  /** filter the rows which have to be updated */
  where: Table_Tennis_Tables_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Table_Tennis_Tables_Var_Pop_Fields = {
  __typename?: 'table_tennis_tables_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Table_Tennis_Tables_Var_Samp_Fields = {
  __typename?: 'table_tennis_tables_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Table_Tennis_Tables_Variance_Fields = {
  __typename?: 'table_tennis_tables_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type GetTableTennisTablesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTableTennisTablesQuery = (
  { __typename?: 'query_root' }
  & { table_tennis_tables: Array<(
    { __typename?: 'table_tennis_tables' }
    & Pick<Table_Tennis_Tables, 'id' | 'name'>
  )> }
);


export const GetTableTennisTablesDocument = gql`
    query GetTableTennisTables {
  table_tennis_tables {
    id
    name
  }
}
    `;

/**
 * __useGetTableTennisTablesQuery__
 *
 * To run a query within a React component, call `useGetTableTennisTablesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTableTennisTablesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTableTennisTablesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTableTennisTablesQuery(baseOptions?: Apollo.QueryHookOptions<GetTableTennisTablesQuery, GetTableTennisTablesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTableTennisTablesQuery, GetTableTennisTablesQueryVariables>(GetTableTennisTablesDocument, options);
      }
export function useGetTableTennisTablesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTableTennisTablesQuery, GetTableTennisTablesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTableTennisTablesQuery, GetTableTennisTablesQueryVariables>(GetTableTennisTablesDocument, options);
        }
export function useGetTableTennisTablesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTableTennisTablesQuery, GetTableTennisTablesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTableTennisTablesQuery, GetTableTennisTablesQueryVariables>(GetTableTennisTablesDocument, options);
        }
export type GetTableTennisTablesQueryHookResult = ReturnType<typeof useGetTableTennisTablesQuery>;
export type GetTableTennisTablesLazyQueryHookResult = ReturnType<typeof useGetTableTennisTablesLazyQuery>;
export type GetTableTennisTablesSuspenseQueryHookResult = ReturnType<typeof useGetTableTennisTablesSuspenseQuery>;
export type GetTableTennisTablesQueryResult = Apollo.QueryResult<GetTableTennisTablesQuery, GetTableTennisTablesQueryVariables>;