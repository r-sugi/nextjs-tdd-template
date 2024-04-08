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
  bigint: { input: any; output: any; }
  name: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
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

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "member_active_test" */
export type Member_Active_Test = {
  __typename?: 'member_active_test';
  address: Scalars['String']['output'];
  birthday: Scalars['timestamptz']['output'];
  created_at: Scalars['timestamptz']['output'];
  member_id: Scalars['bigint']['output'];
  postal_code: Scalars['String']['output'];
  status_activity_id: Scalars['bigint']['output'];
};

/** aggregated selection of "member_active_test" */
export type Member_Active_Test_Aggregate = {
  __typename?: 'member_active_test_aggregate';
  aggregate?: Maybe<Member_Active_Test_Aggregate_Fields>;
  nodes: Array<Member_Active_Test>;
};

export type Member_Active_Test_Aggregate_Bool_Exp = {
  count?: InputMaybe<Member_Active_Test_Aggregate_Bool_Exp_Count>;
};

export type Member_Active_Test_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Member_Active_Test_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Member_Active_Test_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "member_active_test" */
export type Member_Active_Test_Aggregate_Fields = {
  __typename?: 'member_active_test_aggregate_fields';
  avg?: Maybe<Member_Active_Test_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Member_Active_Test_Max_Fields>;
  min?: Maybe<Member_Active_Test_Min_Fields>;
  stddev?: Maybe<Member_Active_Test_Stddev_Fields>;
  stddev_pop?: Maybe<Member_Active_Test_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Member_Active_Test_Stddev_Samp_Fields>;
  sum?: Maybe<Member_Active_Test_Sum_Fields>;
  var_pop?: Maybe<Member_Active_Test_Var_Pop_Fields>;
  var_samp?: Maybe<Member_Active_Test_Var_Samp_Fields>;
  variance?: Maybe<Member_Active_Test_Variance_Fields>;
};


/** aggregate fields of "member_active_test" */
export type Member_Active_Test_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Member_Active_Test_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "member_active_test" */
export type Member_Active_Test_Aggregate_Order_By = {
  avg?: InputMaybe<Member_Active_Test_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Member_Active_Test_Max_Order_By>;
  min?: InputMaybe<Member_Active_Test_Min_Order_By>;
  stddev?: InputMaybe<Member_Active_Test_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Member_Active_Test_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Member_Active_Test_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Member_Active_Test_Sum_Order_By>;
  var_pop?: InputMaybe<Member_Active_Test_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Member_Active_Test_Var_Samp_Order_By>;
  variance?: InputMaybe<Member_Active_Test_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "member_active_test" */
export type Member_Active_Test_Arr_Rel_Insert_Input = {
  data: Array<Member_Active_Test_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Member_Active_Test_On_Conflict>;
};

/** aggregate avg on columns */
export type Member_Active_Test_Avg_Fields = {
  __typename?: 'member_active_test_avg_fields';
  member_id?: Maybe<Scalars['Float']['output']>;
  status_activity_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "member_active_test" */
export type Member_Active_Test_Avg_Order_By = {
  member_id?: InputMaybe<Order_By>;
  status_activity_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "member_active_test". All fields are combined with a logical 'AND'. */
export type Member_Active_Test_Bool_Exp = {
  _and?: InputMaybe<Array<Member_Active_Test_Bool_Exp>>;
  _not?: InputMaybe<Member_Active_Test_Bool_Exp>;
  _or?: InputMaybe<Array<Member_Active_Test_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  birthday?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  member_id?: InputMaybe<Bigint_Comparison_Exp>;
  postal_code?: InputMaybe<String_Comparison_Exp>;
  status_activity_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "member_active_test" */
export enum Member_Active_Test_Constraint {
  /** unique or primary key constraint on columns "created_at" */
  MemberActiveTestPkey = 'member_active_test_pkey'
}

/** input type for incrementing numeric columns in table "member_active_test" */
export type Member_Active_Test_Inc_Input = {
  member_id?: InputMaybe<Scalars['bigint']['input']>;
  status_activity_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "member_active_test" */
export type Member_Active_Test_Insert_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  birthday?: InputMaybe<Scalars['timestamptz']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  member_id?: InputMaybe<Scalars['bigint']['input']>;
  postal_code?: InputMaybe<Scalars['String']['input']>;
  status_activity_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Member_Active_Test_Max_Fields = {
  __typename?: 'member_active_test_max_fields';
  address?: Maybe<Scalars['String']['output']>;
  birthday?: Maybe<Scalars['timestamptz']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  member_id?: Maybe<Scalars['bigint']['output']>;
  postal_code?: Maybe<Scalars['String']['output']>;
  status_activity_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "member_active_test" */
export type Member_Active_Test_Max_Order_By = {
  address?: InputMaybe<Order_By>;
  birthday?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  member_id?: InputMaybe<Order_By>;
  postal_code?: InputMaybe<Order_By>;
  status_activity_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Member_Active_Test_Min_Fields = {
  __typename?: 'member_active_test_min_fields';
  address?: Maybe<Scalars['String']['output']>;
  birthday?: Maybe<Scalars['timestamptz']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  member_id?: Maybe<Scalars['bigint']['output']>;
  postal_code?: Maybe<Scalars['String']['output']>;
  status_activity_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "member_active_test" */
export type Member_Active_Test_Min_Order_By = {
  address?: InputMaybe<Order_By>;
  birthday?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  member_id?: InputMaybe<Order_By>;
  postal_code?: InputMaybe<Order_By>;
  status_activity_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "member_active_test" */
export type Member_Active_Test_Mutation_Response = {
  __typename?: 'member_active_test_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Member_Active_Test>;
};

/** on_conflict condition type for table "member_active_test" */
export type Member_Active_Test_On_Conflict = {
  constraint: Member_Active_Test_Constraint;
  update_columns?: Array<Member_Active_Test_Update_Column>;
  where?: InputMaybe<Member_Active_Test_Bool_Exp>;
};

/** Ordering options when selecting data from "member_active_test". */
export type Member_Active_Test_Order_By = {
  address?: InputMaybe<Order_By>;
  birthday?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  member_id?: InputMaybe<Order_By>;
  postal_code?: InputMaybe<Order_By>;
  status_activity_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: member_active_test */
export type Member_Active_Test_Pk_Columns_Input = {
  created_at: Scalars['timestamptz']['input'];
};

/** select columns of table "member_active_test" */
export enum Member_Active_Test_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Birthday = 'birthday',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  MemberId = 'member_id',
  /** column name */
  PostalCode = 'postal_code',
  /** column name */
  StatusActivityId = 'status_activity_id'
}

/** input type for updating data in table "member_active_test" */
export type Member_Active_Test_Set_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  birthday?: InputMaybe<Scalars['timestamptz']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  member_id?: InputMaybe<Scalars['bigint']['input']>;
  postal_code?: InputMaybe<Scalars['String']['input']>;
  status_activity_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Member_Active_Test_Stddev_Fields = {
  __typename?: 'member_active_test_stddev_fields';
  member_id?: Maybe<Scalars['Float']['output']>;
  status_activity_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "member_active_test" */
export type Member_Active_Test_Stddev_Order_By = {
  member_id?: InputMaybe<Order_By>;
  status_activity_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Member_Active_Test_Stddev_Pop_Fields = {
  __typename?: 'member_active_test_stddev_pop_fields';
  member_id?: Maybe<Scalars['Float']['output']>;
  status_activity_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "member_active_test" */
export type Member_Active_Test_Stddev_Pop_Order_By = {
  member_id?: InputMaybe<Order_By>;
  status_activity_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Member_Active_Test_Stddev_Samp_Fields = {
  __typename?: 'member_active_test_stddev_samp_fields';
  member_id?: Maybe<Scalars['Float']['output']>;
  status_activity_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "member_active_test" */
export type Member_Active_Test_Stddev_Samp_Order_By = {
  member_id?: InputMaybe<Order_By>;
  status_activity_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "member_active_test" */
export type Member_Active_Test_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Member_Active_Test_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Member_Active_Test_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  birthday?: InputMaybe<Scalars['timestamptz']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  member_id?: InputMaybe<Scalars['bigint']['input']>;
  postal_code?: InputMaybe<Scalars['String']['input']>;
  status_activity_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Member_Active_Test_Sum_Fields = {
  __typename?: 'member_active_test_sum_fields';
  member_id?: Maybe<Scalars['bigint']['output']>;
  status_activity_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "member_active_test" */
export type Member_Active_Test_Sum_Order_By = {
  member_id?: InputMaybe<Order_By>;
  status_activity_id?: InputMaybe<Order_By>;
};

/** update columns of table "member_active_test" */
export enum Member_Active_Test_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Birthday = 'birthday',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  MemberId = 'member_id',
  /** column name */
  PostalCode = 'postal_code',
  /** column name */
  StatusActivityId = 'status_activity_id'
}

export type Member_Active_Test_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Member_Active_Test_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Member_Active_Test_Set_Input>;
  /** filter the rows which have to be updated */
  where: Member_Active_Test_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Member_Active_Test_Var_Pop_Fields = {
  __typename?: 'member_active_test_var_pop_fields';
  member_id?: Maybe<Scalars['Float']['output']>;
  status_activity_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "member_active_test" */
export type Member_Active_Test_Var_Pop_Order_By = {
  member_id?: InputMaybe<Order_By>;
  status_activity_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Member_Active_Test_Var_Samp_Fields = {
  __typename?: 'member_active_test_var_samp_fields';
  member_id?: Maybe<Scalars['Float']['output']>;
  status_activity_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "member_active_test" */
export type Member_Active_Test_Var_Samp_Order_By = {
  member_id?: InputMaybe<Order_By>;
  status_activity_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Member_Active_Test_Variance_Fields = {
  __typename?: 'member_active_test_variance_fields';
  member_id?: Maybe<Scalars['Float']['output']>;
  status_activity_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "member_active_test" */
export type Member_Active_Test_Variance_Order_By = {
  member_id?: InputMaybe<Order_By>;
  status_activity_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "member_banned" */
export type Member_Banned = {
  __typename?: 'member_banned';
  created_at: Scalars['timestamptz']['output'];
  member_id: Scalars['bigint']['output'];
  operated_by: Scalars['bigint']['output'];
  reason: Scalars['String']['output'];
  status_activity_id: Scalars['bigint']['output'];
};

/** aggregated selection of "member_banned" */
export type Member_Banned_Aggregate = {
  __typename?: 'member_banned_aggregate';
  aggregate?: Maybe<Member_Banned_Aggregate_Fields>;
  nodes: Array<Member_Banned>;
};

/** aggregate fields of "member_banned" */
export type Member_Banned_Aggregate_Fields = {
  __typename?: 'member_banned_aggregate_fields';
  avg?: Maybe<Member_Banned_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Member_Banned_Max_Fields>;
  min?: Maybe<Member_Banned_Min_Fields>;
  stddev?: Maybe<Member_Banned_Stddev_Fields>;
  stddev_pop?: Maybe<Member_Banned_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Member_Banned_Stddev_Samp_Fields>;
  sum?: Maybe<Member_Banned_Sum_Fields>;
  var_pop?: Maybe<Member_Banned_Var_Pop_Fields>;
  var_samp?: Maybe<Member_Banned_Var_Samp_Fields>;
  variance?: Maybe<Member_Banned_Variance_Fields>;
};


/** aggregate fields of "member_banned" */
export type Member_Banned_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Member_Banned_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Member_Banned_Avg_Fields = {
  __typename?: 'member_banned_avg_fields';
  member_id?: Maybe<Scalars['Float']['output']>;
  operated_by?: Maybe<Scalars['Float']['output']>;
  status_activity_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "member_banned". All fields are combined with a logical 'AND'. */
export type Member_Banned_Bool_Exp = {
  _and?: InputMaybe<Array<Member_Banned_Bool_Exp>>;
  _not?: InputMaybe<Member_Banned_Bool_Exp>;
  _or?: InputMaybe<Array<Member_Banned_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  member_id?: InputMaybe<Bigint_Comparison_Exp>;
  operated_by?: InputMaybe<Bigint_Comparison_Exp>;
  reason?: InputMaybe<String_Comparison_Exp>;
  status_activity_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "member_banned" */
export enum Member_Banned_Constraint {
  /** unique or primary key constraint on columns "created_at" */
  MemberBannedPkey = 'member_banned_pkey'
}

/** input type for incrementing numeric columns in table "member_banned" */
export type Member_Banned_Inc_Input = {
  member_id?: InputMaybe<Scalars['bigint']['input']>;
  operated_by?: InputMaybe<Scalars['bigint']['input']>;
  status_activity_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "member_banned" */
export type Member_Banned_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  member_id?: InputMaybe<Scalars['bigint']['input']>;
  operated_by?: InputMaybe<Scalars['bigint']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
  status_activity_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Member_Banned_Max_Fields = {
  __typename?: 'member_banned_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  member_id?: Maybe<Scalars['bigint']['output']>;
  operated_by?: Maybe<Scalars['bigint']['output']>;
  reason?: Maybe<Scalars['String']['output']>;
  status_activity_id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Member_Banned_Min_Fields = {
  __typename?: 'member_banned_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  member_id?: Maybe<Scalars['bigint']['output']>;
  operated_by?: Maybe<Scalars['bigint']['output']>;
  reason?: Maybe<Scalars['String']['output']>;
  status_activity_id?: Maybe<Scalars['bigint']['output']>;
};

/** response of any mutation on the table "member_banned" */
export type Member_Banned_Mutation_Response = {
  __typename?: 'member_banned_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Member_Banned>;
};

/** on_conflict condition type for table "member_banned" */
export type Member_Banned_On_Conflict = {
  constraint: Member_Banned_Constraint;
  update_columns?: Array<Member_Banned_Update_Column>;
  where?: InputMaybe<Member_Banned_Bool_Exp>;
};

/** Ordering options when selecting data from "member_banned". */
export type Member_Banned_Order_By = {
  created_at?: InputMaybe<Order_By>;
  member_id?: InputMaybe<Order_By>;
  operated_by?: InputMaybe<Order_By>;
  reason?: InputMaybe<Order_By>;
  status_activity_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: member_banned */
export type Member_Banned_Pk_Columns_Input = {
  created_at: Scalars['timestamptz']['input'];
};

/** select columns of table "member_banned" */
export enum Member_Banned_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  MemberId = 'member_id',
  /** column name */
  OperatedBy = 'operated_by',
  /** column name */
  Reason = 'reason',
  /** column name */
  StatusActivityId = 'status_activity_id'
}

/** input type for updating data in table "member_banned" */
export type Member_Banned_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  member_id?: InputMaybe<Scalars['bigint']['input']>;
  operated_by?: InputMaybe<Scalars['bigint']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
  status_activity_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Member_Banned_Stddev_Fields = {
  __typename?: 'member_banned_stddev_fields';
  member_id?: Maybe<Scalars['Float']['output']>;
  operated_by?: Maybe<Scalars['Float']['output']>;
  status_activity_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Member_Banned_Stddev_Pop_Fields = {
  __typename?: 'member_banned_stddev_pop_fields';
  member_id?: Maybe<Scalars['Float']['output']>;
  operated_by?: Maybe<Scalars['Float']['output']>;
  status_activity_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Member_Banned_Stddev_Samp_Fields = {
  __typename?: 'member_banned_stddev_samp_fields';
  member_id?: Maybe<Scalars['Float']['output']>;
  operated_by?: Maybe<Scalars['Float']['output']>;
  status_activity_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "member_banned" */
export type Member_Banned_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Member_Banned_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Member_Banned_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  member_id?: InputMaybe<Scalars['bigint']['input']>;
  operated_by?: InputMaybe<Scalars['bigint']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
  status_activity_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Member_Banned_Sum_Fields = {
  __typename?: 'member_banned_sum_fields';
  member_id?: Maybe<Scalars['bigint']['output']>;
  operated_by?: Maybe<Scalars['bigint']['output']>;
  status_activity_id?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "member_banned" */
export enum Member_Banned_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  MemberId = 'member_id',
  /** column name */
  OperatedBy = 'operated_by',
  /** column name */
  Reason = 'reason',
  /** column name */
  StatusActivityId = 'status_activity_id'
}

export type Member_Banned_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Member_Banned_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Member_Banned_Set_Input>;
  /** filter the rows which have to be updated */
  where: Member_Banned_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Member_Banned_Var_Pop_Fields = {
  __typename?: 'member_banned_var_pop_fields';
  member_id?: Maybe<Scalars['Float']['output']>;
  operated_by?: Maybe<Scalars['Float']['output']>;
  status_activity_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Member_Banned_Var_Samp_Fields = {
  __typename?: 'member_banned_var_samp_fields';
  member_id?: Maybe<Scalars['Float']['output']>;
  operated_by?: Maybe<Scalars['Float']['output']>;
  status_activity_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Member_Banned_Variance_Fields = {
  __typename?: 'member_banned_variance_fields';
  member_id?: Maybe<Scalars['Float']['output']>;
  operated_by?: Maybe<Scalars['Float']['output']>;
  status_activity_id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "member_pending_activations_test" */
export type Member_Pending_Activations_Test = {
  __typename?: 'member_pending_activations_test';
  created_at: Scalars['timestamptz']['output'];
  member_id: Scalars['bigint']['output'];
  status_activity_id: Scalars['bigint']['output'];
};

/** aggregated selection of "member_pending_activations_test" */
export type Member_Pending_Activations_Test_Aggregate = {
  __typename?: 'member_pending_activations_test_aggregate';
  aggregate?: Maybe<Member_Pending_Activations_Test_Aggregate_Fields>;
  nodes: Array<Member_Pending_Activations_Test>;
};

/** aggregate fields of "member_pending_activations_test" */
export type Member_Pending_Activations_Test_Aggregate_Fields = {
  __typename?: 'member_pending_activations_test_aggregate_fields';
  avg?: Maybe<Member_Pending_Activations_Test_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Member_Pending_Activations_Test_Max_Fields>;
  min?: Maybe<Member_Pending_Activations_Test_Min_Fields>;
  stddev?: Maybe<Member_Pending_Activations_Test_Stddev_Fields>;
  stddev_pop?: Maybe<Member_Pending_Activations_Test_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Member_Pending_Activations_Test_Stddev_Samp_Fields>;
  sum?: Maybe<Member_Pending_Activations_Test_Sum_Fields>;
  var_pop?: Maybe<Member_Pending_Activations_Test_Var_Pop_Fields>;
  var_samp?: Maybe<Member_Pending_Activations_Test_Var_Samp_Fields>;
  variance?: Maybe<Member_Pending_Activations_Test_Variance_Fields>;
};


/** aggregate fields of "member_pending_activations_test" */
export type Member_Pending_Activations_Test_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Member_Pending_Activations_Test_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Member_Pending_Activations_Test_Avg_Fields = {
  __typename?: 'member_pending_activations_test_avg_fields';
  member_id?: Maybe<Scalars['Float']['output']>;
  status_activity_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "member_pending_activations_test". All fields are combined with a logical 'AND'. */
export type Member_Pending_Activations_Test_Bool_Exp = {
  _and?: InputMaybe<Array<Member_Pending_Activations_Test_Bool_Exp>>;
  _not?: InputMaybe<Member_Pending_Activations_Test_Bool_Exp>;
  _or?: InputMaybe<Array<Member_Pending_Activations_Test_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  member_id?: InputMaybe<Bigint_Comparison_Exp>;
  status_activity_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "member_pending_activations_test" */
export enum Member_Pending_Activations_Test_Constraint {
  /** unique or primary key constraint on columns "created_at" */
  MemberPendingActivationsTestCreatedAtKey = 'member_pending_activations_test_created_at_key',
  /** unique or primary key constraint on columns "created_at" */
  MemberPendingActivationsTestPkey = 'member_pending_activations_test_pkey'
}

/** input type for incrementing numeric columns in table "member_pending_activations_test" */
export type Member_Pending_Activations_Test_Inc_Input = {
  member_id?: InputMaybe<Scalars['bigint']['input']>;
  status_activity_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "member_pending_activations_test" */
export type Member_Pending_Activations_Test_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  member_id?: InputMaybe<Scalars['bigint']['input']>;
  status_activity_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Member_Pending_Activations_Test_Max_Fields = {
  __typename?: 'member_pending_activations_test_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  member_id?: Maybe<Scalars['bigint']['output']>;
  status_activity_id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Member_Pending_Activations_Test_Min_Fields = {
  __typename?: 'member_pending_activations_test_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  member_id?: Maybe<Scalars['bigint']['output']>;
  status_activity_id?: Maybe<Scalars['bigint']['output']>;
};

/** response of any mutation on the table "member_pending_activations_test" */
export type Member_Pending_Activations_Test_Mutation_Response = {
  __typename?: 'member_pending_activations_test_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Member_Pending_Activations_Test>;
};

/** on_conflict condition type for table "member_pending_activations_test" */
export type Member_Pending_Activations_Test_On_Conflict = {
  constraint: Member_Pending_Activations_Test_Constraint;
  update_columns?: Array<Member_Pending_Activations_Test_Update_Column>;
  where?: InputMaybe<Member_Pending_Activations_Test_Bool_Exp>;
};

/** Ordering options when selecting data from "member_pending_activations_test". */
export type Member_Pending_Activations_Test_Order_By = {
  created_at?: InputMaybe<Order_By>;
  member_id?: InputMaybe<Order_By>;
  status_activity_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: member_pending_activations_test */
export type Member_Pending_Activations_Test_Pk_Columns_Input = {
  created_at: Scalars['timestamptz']['input'];
};

/** select columns of table "member_pending_activations_test" */
export enum Member_Pending_Activations_Test_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  MemberId = 'member_id',
  /** column name */
  StatusActivityId = 'status_activity_id'
}

/** input type for updating data in table "member_pending_activations_test" */
export type Member_Pending_Activations_Test_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  member_id?: InputMaybe<Scalars['bigint']['input']>;
  status_activity_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Member_Pending_Activations_Test_Stddev_Fields = {
  __typename?: 'member_pending_activations_test_stddev_fields';
  member_id?: Maybe<Scalars['Float']['output']>;
  status_activity_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Member_Pending_Activations_Test_Stddev_Pop_Fields = {
  __typename?: 'member_pending_activations_test_stddev_pop_fields';
  member_id?: Maybe<Scalars['Float']['output']>;
  status_activity_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Member_Pending_Activations_Test_Stddev_Samp_Fields = {
  __typename?: 'member_pending_activations_test_stddev_samp_fields';
  member_id?: Maybe<Scalars['Float']['output']>;
  status_activity_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "member_pending_activations_test" */
export type Member_Pending_Activations_Test_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Member_Pending_Activations_Test_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Member_Pending_Activations_Test_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  member_id?: InputMaybe<Scalars['bigint']['input']>;
  status_activity_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Member_Pending_Activations_Test_Sum_Fields = {
  __typename?: 'member_pending_activations_test_sum_fields';
  member_id?: Maybe<Scalars['bigint']['output']>;
  status_activity_id?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "member_pending_activations_test" */
export enum Member_Pending_Activations_Test_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  MemberId = 'member_id',
  /** column name */
  StatusActivityId = 'status_activity_id'
}

export type Member_Pending_Activations_Test_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Member_Pending_Activations_Test_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Member_Pending_Activations_Test_Set_Input>;
  /** filter the rows which have to be updated */
  where: Member_Pending_Activations_Test_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Member_Pending_Activations_Test_Var_Pop_Fields = {
  __typename?: 'member_pending_activations_test_var_pop_fields';
  member_id?: Maybe<Scalars['Float']['output']>;
  status_activity_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Member_Pending_Activations_Test_Var_Samp_Fields = {
  __typename?: 'member_pending_activations_test_var_samp_fields';
  member_id?: Maybe<Scalars['Float']['output']>;
  status_activity_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Member_Pending_Activations_Test_Variance_Fields = {
  __typename?: 'member_pending_activations_test_variance_fields';
  member_id?: Maybe<Scalars['Float']['output']>;
  status_activity_id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "member_resigned_test" */
export type Member_Resigned_Test = {
  __typename?: 'member_resigned_test';
  created_at: Scalars['timestamptz']['output'];
  member_id: Scalars['bigint']['output'];
  reason: Scalars['String']['output'];
  status_activity_id: Scalars['bigint']['output'];
};

/** aggregated selection of "member_resigned_test" */
export type Member_Resigned_Test_Aggregate = {
  __typename?: 'member_resigned_test_aggregate';
  aggregate?: Maybe<Member_Resigned_Test_Aggregate_Fields>;
  nodes: Array<Member_Resigned_Test>;
};

/** aggregate fields of "member_resigned_test" */
export type Member_Resigned_Test_Aggregate_Fields = {
  __typename?: 'member_resigned_test_aggregate_fields';
  avg?: Maybe<Member_Resigned_Test_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Member_Resigned_Test_Max_Fields>;
  min?: Maybe<Member_Resigned_Test_Min_Fields>;
  stddev?: Maybe<Member_Resigned_Test_Stddev_Fields>;
  stddev_pop?: Maybe<Member_Resigned_Test_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Member_Resigned_Test_Stddev_Samp_Fields>;
  sum?: Maybe<Member_Resigned_Test_Sum_Fields>;
  var_pop?: Maybe<Member_Resigned_Test_Var_Pop_Fields>;
  var_samp?: Maybe<Member_Resigned_Test_Var_Samp_Fields>;
  variance?: Maybe<Member_Resigned_Test_Variance_Fields>;
};


/** aggregate fields of "member_resigned_test" */
export type Member_Resigned_Test_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Member_Resigned_Test_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Member_Resigned_Test_Avg_Fields = {
  __typename?: 'member_resigned_test_avg_fields';
  member_id?: Maybe<Scalars['Float']['output']>;
  status_activity_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "member_resigned_test". All fields are combined with a logical 'AND'. */
export type Member_Resigned_Test_Bool_Exp = {
  _and?: InputMaybe<Array<Member_Resigned_Test_Bool_Exp>>;
  _not?: InputMaybe<Member_Resigned_Test_Bool_Exp>;
  _or?: InputMaybe<Array<Member_Resigned_Test_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  member_id?: InputMaybe<Bigint_Comparison_Exp>;
  reason?: InputMaybe<String_Comparison_Exp>;
  status_activity_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "member_resigned_test" */
export enum Member_Resigned_Test_Constraint {
  /** unique or primary key constraint on columns "created_at" */
  MemberResignedTestPkey = 'member_resigned_test_pkey'
}

/** input type for incrementing numeric columns in table "member_resigned_test" */
export type Member_Resigned_Test_Inc_Input = {
  member_id?: InputMaybe<Scalars['bigint']['input']>;
  status_activity_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "member_resigned_test" */
export type Member_Resigned_Test_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  member_id?: InputMaybe<Scalars['bigint']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
  status_activity_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Member_Resigned_Test_Max_Fields = {
  __typename?: 'member_resigned_test_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  member_id?: Maybe<Scalars['bigint']['output']>;
  reason?: Maybe<Scalars['String']['output']>;
  status_activity_id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Member_Resigned_Test_Min_Fields = {
  __typename?: 'member_resigned_test_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  member_id?: Maybe<Scalars['bigint']['output']>;
  reason?: Maybe<Scalars['String']['output']>;
  status_activity_id?: Maybe<Scalars['bigint']['output']>;
};

/** response of any mutation on the table "member_resigned_test" */
export type Member_Resigned_Test_Mutation_Response = {
  __typename?: 'member_resigned_test_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Member_Resigned_Test>;
};

/** on_conflict condition type for table "member_resigned_test" */
export type Member_Resigned_Test_On_Conflict = {
  constraint: Member_Resigned_Test_Constraint;
  update_columns?: Array<Member_Resigned_Test_Update_Column>;
  where?: InputMaybe<Member_Resigned_Test_Bool_Exp>;
};

/** Ordering options when selecting data from "member_resigned_test". */
export type Member_Resigned_Test_Order_By = {
  created_at?: InputMaybe<Order_By>;
  member_id?: InputMaybe<Order_By>;
  reason?: InputMaybe<Order_By>;
  status_activity_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: member_resigned_test */
export type Member_Resigned_Test_Pk_Columns_Input = {
  created_at: Scalars['timestamptz']['input'];
};

/** select columns of table "member_resigned_test" */
export enum Member_Resigned_Test_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  MemberId = 'member_id',
  /** column name */
  Reason = 'reason',
  /** column name */
  StatusActivityId = 'status_activity_id'
}

/** input type for updating data in table "member_resigned_test" */
export type Member_Resigned_Test_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  member_id?: InputMaybe<Scalars['bigint']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
  status_activity_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Member_Resigned_Test_Stddev_Fields = {
  __typename?: 'member_resigned_test_stddev_fields';
  member_id?: Maybe<Scalars['Float']['output']>;
  status_activity_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Member_Resigned_Test_Stddev_Pop_Fields = {
  __typename?: 'member_resigned_test_stddev_pop_fields';
  member_id?: Maybe<Scalars['Float']['output']>;
  status_activity_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Member_Resigned_Test_Stddev_Samp_Fields = {
  __typename?: 'member_resigned_test_stddev_samp_fields';
  member_id?: Maybe<Scalars['Float']['output']>;
  status_activity_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "member_resigned_test" */
export type Member_Resigned_Test_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Member_Resigned_Test_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Member_Resigned_Test_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  member_id?: InputMaybe<Scalars['bigint']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
  status_activity_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Member_Resigned_Test_Sum_Fields = {
  __typename?: 'member_resigned_test_sum_fields';
  member_id?: Maybe<Scalars['bigint']['output']>;
  status_activity_id?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "member_resigned_test" */
export enum Member_Resigned_Test_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  MemberId = 'member_id',
  /** column name */
  Reason = 'reason',
  /** column name */
  StatusActivityId = 'status_activity_id'
}

export type Member_Resigned_Test_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Member_Resigned_Test_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Member_Resigned_Test_Set_Input>;
  /** filter the rows which have to be updated */
  where: Member_Resigned_Test_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Member_Resigned_Test_Var_Pop_Fields = {
  __typename?: 'member_resigned_test_var_pop_fields';
  member_id?: Maybe<Scalars['Float']['output']>;
  status_activity_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Member_Resigned_Test_Var_Samp_Fields = {
  __typename?: 'member_resigned_test_var_samp_fields';
  member_id?: Maybe<Scalars['Float']['output']>;
  status_activity_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Member_Resigned_Test_Variance_Fields = {
  __typename?: 'member_resigned_test_variance_fields';
  member_id?: Maybe<Scalars['Float']['output']>;
  status_activity_id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "member_restored" */
export type Member_Restored = {
  __typename?: 'member_restored';
  created_at: Scalars['timestamptz']['output'];
  member_id: Scalars['bigint']['output'];
  operated_by: Scalars['bigint']['output'];
  reason: Scalars['String']['output'];
  status_activity_id: Scalars['bigint']['output'];
};

/** aggregated selection of "member_restored" */
export type Member_Restored_Aggregate = {
  __typename?: 'member_restored_aggregate';
  aggregate?: Maybe<Member_Restored_Aggregate_Fields>;
  nodes: Array<Member_Restored>;
};

/** aggregate fields of "member_restored" */
export type Member_Restored_Aggregate_Fields = {
  __typename?: 'member_restored_aggregate_fields';
  avg?: Maybe<Member_Restored_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Member_Restored_Max_Fields>;
  min?: Maybe<Member_Restored_Min_Fields>;
  stddev?: Maybe<Member_Restored_Stddev_Fields>;
  stddev_pop?: Maybe<Member_Restored_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Member_Restored_Stddev_Samp_Fields>;
  sum?: Maybe<Member_Restored_Sum_Fields>;
  var_pop?: Maybe<Member_Restored_Var_Pop_Fields>;
  var_samp?: Maybe<Member_Restored_Var_Samp_Fields>;
  variance?: Maybe<Member_Restored_Variance_Fields>;
};


/** aggregate fields of "member_restored" */
export type Member_Restored_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Member_Restored_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Member_Restored_Avg_Fields = {
  __typename?: 'member_restored_avg_fields';
  member_id?: Maybe<Scalars['Float']['output']>;
  operated_by?: Maybe<Scalars['Float']['output']>;
  status_activity_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "member_restored". All fields are combined with a logical 'AND'. */
export type Member_Restored_Bool_Exp = {
  _and?: InputMaybe<Array<Member_Restored_Bool_Exp>>;
  _not?: InputMaybe<Member_Restored_Bool_Exp>;
  _or?: InputMaybe<Array<Member_Restored_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  member_id?: InputMaybe<Bigint_Comparison_Exp>;
  operated_by?: InputMaybe<Bigint_Comparison_Exp>;
  reason?: InputMaybe<String_Comparison_Exp>;
  status_activity_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "member_restored" */
export enum Member_Restored_Constraint {
  /** unique or primary key constraint on columns "created_at" */
  MemberRestoredPkey = 'member_restored_pkey'
}

/** input type for incrementing numeric columns in table "member_restored" */
export type Member_Restored_Inc_Input = {
  member_id?: InputMaybe<Scalars['bigint']['input']>;
  operated_by?: InputMaybe<Scalars['bigint']['input']>;
  status_activity_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "member_restored" */
export type Member_Restored_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  member_id?: InputMaybe<Scalars['bigint']['input']>;
  operated_by?: InputMaybe<Scalars['bigint']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
  status_activity_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Member_Restored_Max_Fields = {
  __typename?: 'member_restored_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  member_id?: Maybe<Scalars['bigint']['output']>;
  operated_by?: Maybe<Scalars['bigint']['output']>;
  reason?: Maybe<Scalars['String']['output']>;
  status_activity_id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Member_Restored_Min_Fields = {
  __typename?: 'member_restored_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  member_id?: Maybe<Scalars['bigint']['output']>;
  operated_by?: Maybe<Scalars['bigint']['output']>;
  reason?: Maybe<Scalars['String']['output']>;
  status_activity_id?: Maybe<Scalars['bigint']['output']>;
};

/** response of any mutation on the table "member_restored" */
export type Member_Restored_Mutation_Response = {
  __typename?: 'member_restored_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Member_Restored>;
};

/** on_conflict condition type for table "member_restored" */
export type Member_Restored_On_Conflict = {
  constraint: Member_Restored_Constraint;
  update_columns?: Array<Member_Restored_Update_Column>;
  where?: InputMaybe<Member_Restored_Bool_Exp>;
};

/** Ordering options when selecting data from "member_restored". */
export type Member_Restored_Order_By = {
  created_at?: InputMaybe<Order_By>;
  member_id?: InputMaybe<Order_By>;
  operated_by?: InputMaybe<Order_By>;
  reason?: InputMaybe<Order_By>;
  status_activity_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: member_restored */
export type Member_Restored_Pk_Columns_Input = {
  created_at: Scalars['timestamptz']['input'];
};

/** select columns of table "member_restored" */
export enum Member_Restored_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  MemberId = 'member_id',
  /** column name */
  OperatedBy = 'operated_by',
  /** column name */
  Reason = 'reason',
  /** column name */
  StatusActivityId = 'status_activity_id'
}

/** input type for updating data in table "member_restored" */
export type Member_Restored_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  member_id?: InputMaybe<Scalars['bigint']['input']>;
  operated_by?: InputMaybe<Scalars['bigint']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
  status_activity_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Member_Restored_Stddev_Fields = {
  __typename?: 'member_restored_stddev_fields';
  member_id?: Maybe<Scalars['Float']['output']>;
  operated_by?: Maybe<Scalars['Float']['output']>;
  status_activity_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Member_Restored_Stddev_Pop_Fields = {
  __typename?: 'member_restored_stddev_pop_fields';
  member_id?: Maybe<Scalars['Float']['output']>;
  operated_by?: Maybe<Scalars['Float']['output']>;
  status_activity_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Member_Restored_Stddev_Samp_Fields = {
  __typename?: 'member_restored_stddev_samp_fields';
  member_id?: Maybe<Scalars['Float']['output']>;
  operated_by?: Maybe<Scalars['Float']['output']>;
  status_activity_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "member_restored" */
export type Member_Restored_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Member_Restored_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Member_Restored_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  member_id?: InputMaybe<Scalars['bigint']['input']>;
  operated_by?: InputMaybe<Scalars['bigint']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
  status_activity_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Member_Restored_Sum_Fields = {
  __typename?: 'member_restored_sum_fields';
  member_id?: Maybe<Scalars['bigint']['output']>;
  operated_by?: Maybe<Scalars['bigint']['output']>;
  status_activity_id?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "member_restored" */
export enum Member_Restored_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  MemberId = 'member_id',
  /** column name */
  OperatedBy = 'operated_by',
  /** column name */
  Reason = 'reason',
  /** column name */
  StatusActivityId = 'status_activity_id'
}

export type Member_Restored_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Member_Restored_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Member_Restored_Set_Input>;
  /** filter the rows which have to be updated */
  where: Member_Restored_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Member_Restored_Var_Pop_Fields = {
  __typename?: 'member_restored_var_pop_fields';
  member_id?: Maybe<Scalars['Float']['output']>;
  operated_by?: Maybe<Scalars['Float']['output']>;
  status_activity_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Member_Restored_Var_Samp_Fields = {
  __typename?: 'member_restored_var_samp_fields';
  member_id?: Maybe<Scalars['Float']['output']>;
  operated_by?: Maybe<Scalars['Float']['output']>;
  status_activity_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Member_Restored_Variance_Fields = {
  __typename?: 'member_restored_variance_fields';
  member_id?: Maybe<Scalars['Float']['output']>;
  operated_by?: Maybe<Scalars['Float']['output']>;
  status_activity_id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "member_status_activities_test" */
export type Member_Status_Activities_Test = {
  __typename?: 'member_status_activities_test';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['bigint']['output'];
  /** An array relationship */
  member_actives: Array<Member_Active_Test>;
  /** An aggregate relationship */
  member_actives_aggregate: Member_Active_Test_Aggregate;
  member_id: Scalars['bigint']['output'];
  status: Scalars['String']['output'];
};


/** columns and relationships of "member_status_activities_test" */
export type Member_Status_Activities_TestMember_ActivesArgs = {
  distinct_on?: InputMaybe<Array<Member_Active_Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Active_Test_Order_By>>;
  where?: InputMaybe<Member_Active_Test_Bool_Exp>;
};


/** columns and relationships of "member_status_activities_test" */
export type Member_Status_Activities_TestMember_Actives_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Active_Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Active_Test_Order_By>>;
  where?: InputMaybe<Member_Active_Test_Bool_Exp>;
};

/** aggregated selection of "member_status_activities_test" */
export type Member_Status_Activities_Test_Aggregate = {
  __typename?: 'member_status_activities_test_aggregate';
  aggregate?: Maybe<Member_Status_Activities_Test_Aggregate_Fields>;
  nodes: Array<Member_Status_Activities_Test>;
};

/** aggregate fields of "member_status_activities_test" */
export type Member_Status_Activities_Test_Aggregate_Fields = {
  __typename?: 'member_status_activities_test_aggregate_fields';
  avg?: Maybe<Member_Status_Activities_Test_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Member_Status_Activities_Test_Max_Fields>;
  min?: Maybe<Member_Status_Activities_Test_Min_Fields>;
  stddev?: Maybe<Member_Status_Activities_Test_Stddev_Fields>;
  stddev_pop?: Maybe<Member_Status_Activities_Test_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Member_Status_Activities_Test_Stddev_Samp_Fields>;
  sum?: Maybe<Member_Status_Activities_Test_Sum_Fields>;
  var_pop?: Maybe<Member_Status_Activities_Test_Var_Pop_Fields>;
  var_samp?: Maybe<Member_Status_Activities_Test_Var_Samp_Fields>;
  variance?: Maybe<Member_Status_Activities_Test_Variance_Fields>;
};


/** aggregate fields of "member_status_activities_test" */
export type Member_Status_Activities_Test_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Member_Status_Activities_Test_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Member_Status_Activities_Test_Avg_Fields = {
  __typename?: 'member_status_activities_test_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  member_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "member_status_activities_test". All fields are combined with a logical 'AND'. */
export type Member_Status_Activities_Test_Bool_Exp = {
  _and?: InputMaybe<Array<Member_Status_Activities_Test_Bool_Exp>>;
  _not?: InputMaybe<Member_Status_Activities_Test_Bool_Exp>;
  _or?: InputMaybe<Array<Member_Status_Activities_Test_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  member_actives?: InputMaybe<Member_Active_Test_Bool_Exp>;
  member_actives_aggregate?: InputMaybe<Member_Active_Test_Aggregate_Bool_Exp>;
  member_id?: InputMaybe<Bigint_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "member_status_activities_test" */
export enum Member_Status_Activities_Test_Constraint {
  /** unique or primary key constraint on columns "id" */
  MemberStatusActivitiesTestPkey = 'member_status_activities_test_pkey'
}

/** input type for incrementing numeric columns in table "member_status_activities_test" */
export type Member_Status_Activities_Test_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  member_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "member_status_activities_test" */
export type Member_Status_Activities_Test_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  member_actives?: InputMaybe<Member_Active_Test_Arr_Rel_Insert_Input>;
  member_id?: InputMaybe<Scalars['bigint']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Member_Status_Activities_Test_Max_Fields = {
  __typename?: 'member_status_activities_test_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  member_id?: Maybe<Scalars['bigint']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Member_Status_Activities_Test_Min_Fields = {
  __typename?: 'member_status_activities_test_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  member_id?: Maybe<Scalars['bigint']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "member_status_activities_test" */
export type Member_Status_Activities_Test_Mutation_Response = {
  __typename?: 'member_status_activities_test_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Member_Status_Activities_Test>;
};

/** on_conflict condition type for table "member_status_activities_test" */
export type Member_Status_Activities_Test_On_Conflict = {
  constraint: Member_Status_Activities_Test_Constraint;
  update_columns?: Array<Member_Status_Activities_Test_Update_Column>;
  where?: InputMaybe<Member_Status_Activities_Test_Bool_Exp>;
};

/** Ordering options when selecting data from "member_status_activities_test". */
export type Member_Status_Activities_Test_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  member_actives_aggregate?: InputMaybe<Member_Active_Test_Aggregate_Order_By>;
  member_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** primary key columns input for table: member_status_activities_test */
export type Member_Status_Activities_Test_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "member_status_activities_test" */
export enum Member_Status_Activities_Test_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MemberId = 'member_id',
  /** column name */
  Status = 'status'
}

/** input type for updating data in table "member_status_activities_test" */
export type Member_Status_Activities_Test_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  member_id?: InputMaybe<Scalars['bigint']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Member_Status_Activities_Test_Stddev_Fields = {
  __typename?: 'member_status_activities_test_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  member_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Member_Status_Activities_Test_Stddev_Pop_Fields = {
  __typename?: 'member_status_activities_test_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  member_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Member_Status_Activities_Test_Stddev_Samp_Fields = {
  __typename?: 'member_status_activities_test_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  member_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "member_status_activities_test" */
export type Member_Status_Activities_Test_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Member_Status_Activities_Test_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Member_Status_Activities_Test_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  member_id?: InputMaybe<Scalars['bigint']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Member_Status_Activities_Test_Sum_Fields = {
  __typename?: 'member_status_activities_test_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  member_id?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "member_status_activities_test" */
export enum Member_Status_Activities_Test_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MemberId = 'member_id',
  /** column name */
  Status = 'status'
}

export type Member_Status_Activities_Test_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Member_Status_Activities_Test_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Member_Status_Activities_Test_Set_Input>;
  /** filter the rows which have to be updated */
  where: Member_Status_Activities_Test_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Member_Status_Activities_Test_Var_Pop_Fields = {
  __typename?: 'member_status_activities_test_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  member_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Member_Status_Activities_Test_Var_Samp_Fields = {
  __typename?: 'member_status_activities_test_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  member_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Member_Status_Activities_Test_Variance_Fields = {
  __typename?: 'member_status_activities_test_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  member_id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "members_test" */
export type Members_Test = {
  __typename?: 'members_test';
  id: Scalars['bigint']['output'];
  name: Scalars['String']['output'];
  user_id: Scalars['bigint']['output'];
};

/** aggregated selection of "members_test" */
export type Members_Test_Aggregate = {
  __typename?: 'members_test_aggregate';
  aggregate?: Maybe<Members_Test_Aggregate_Fields>;
  nodes: Array<Members_Test>;
};

/** aggregate fields of "members_test" */
export type Members_Test_Aggregate_Fields = {
  __typename?: 'members_test_aggregate_fields';
  avg?: Maybe<Members_Test_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Members_Test_Max_Fields>;
  min?: Maybe<Members_Test_Min_Fields>;
  stddev?: Maybe<Members_Test_Stddev_Fields>;
  stddev_pop?: Maybe<Members_Test_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Members_Test_Stddev_Samp_Fields>;
  sum?: Maybe<Members_Test_Sum_Fields>;
  var_pop?: Maybe<Members_Test_Var_Pop_Fields>;
  var_samp?: Maybe<Members_Test_Var_Samp_Fields>;
  variance?: Maybe<Members_Test_Variance_Fields>;
};


/** aggregate fields of "members_test" */
export type Members_Test_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Members_Test_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Members_Test_Avg_Fields = {
  __typename?: 'members_test_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "members_test". All fields are combined with a logical 'AND'. */
export type Members_Test_Bool_Exp = {
  _and?: InputMaybe<Array<Members_Test_Bool_Exp>>;
  _not?: InputMaybe<Members_Test_Bool_Exp>;
  _or?: InputMaybe<Array<Members_Test_Bool_Exp>>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "members_test" */
export enum Members_Test_Constraint {
  /** unique or primary key constraint on columns "id" */
  MembersTestIdKey = 'members_test_id_key',
  /** unique or primary key constraint on columns "id" */
  MembersTestPkey = 'members_test_pkey'
}

/** input type for incrementing numeric columns in table "members_test" */
export type Members_Test_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "members_test" */
export type Members_Test_Insert_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Members_Test_Max_Fields = {
  __typename?: 'members_test_max_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Members_Test_Min_Fields = {
  __typename?: 'members_test_min_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** response of any mutation on the table "members_test" */
export type Members_Test_Mutation_Response = {
  __typename?: 'members_test_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Members_Test>;
};

/** on_conflict condition type for table "members_test" */
export type Members_Test_On_Conflict = {
  constraint: Members_Test_Constraint;
  update_columns?: Array<Members_Test_Update_Column>;
  where?: InputMaybe<Members_Test_Bool_Exp>;
};

/** Ordering options when selecting data from "members_test". */
export type Members_Test_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: members_test */
export type Members_Test_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "members_test" */
export enum Members_Test_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "members_test" */
export type Members_Test_Set_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Members_Test_Stddev_Fields = {
  __typename?: 'members_test_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Members_Test_Stddev_Pop_Fields = {
  __typename?: 'members_test_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Members_Test_Stddev_Samp_Fields = {
  __typename?: 'members_test_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "members_test" */
export type Members_Test_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Members_Test_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Members_Test_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Members_Test_Sum_Fields = {
  __typename?: 'members_test_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "members_test" */
export enum Members_Test_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UserId = 'user_id'
}

export type Members_Test_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Members_Test_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Members_Test_Set_Input>;
  /** filter the rows which have to be updated */
  where: Members_Test_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Members_Test_Var_Pop_Fields = {
  __typename?: 'members_test_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Members_Test_Var_Samp_Fields = {
  __typename?: 'members_test_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Members_Test_Variance_Fields = {
  __typename?: 'members_test_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "member_active_test" */
  delete_member_active_test?: Maybe<Member_Active_Test_Mutation_Response>;
  /** delete single row from the table: "member_active_test" */
  delete_member_active_test_by_pk?: Maybe<Member_Active_Test>;
  /** delete data from the table: "member_banned" */
  delete_member_banned?: Maybe<Member_Banned_Mutation_Response>;
  /** delete single row from the table: "member_banned" */
  delete_member_banned_by_pk?: Maybe<Member_Banned>;
  /** delete data from the table: "member_pending_activations_test" */
  delete_member_pending_activations_test?: Maybe<Member_Pending_Activations_Test_Mutation_Response>;
  /** delete single row from the table: "member_pending_activations_test" */
  delete_member_pending_activations_test_by_pk?: Maybe<Member_Pending_Activations_Test>;
  /** delete data from the table: "member_resigned_test" */
  delete_member_resigned_test?: Maybe<Member_Resigned_Test_Mutation_Response>;
  /** delete single row from the table: "member_resigned_test" */
  delete_member_resigned_test_by_pk?: Maybe<Member_Resigned_Test>;
  /** delete data from the table: "member_restored" */
  delete_member_restored?: Maybe<Member_Restored_Mutation_Response>;
  /** delete single row from the table: "member_restored" */
  delete_member_restored_by_pk?: Maybe<Member_Restored>;
  /** delete data from the table: "member_status_activities_test" */
  delete_member_status_activities_test?: Maybe<Member_Status_Activities_Test_Mutation_Response>;
  /** delete single row from the table: "member_status_activities_test" */
  delete_member_status_activities_test_by_pk?: Maybe<Member_Status_Activities_Test>;
  /** delete data from the table: "members_test" */
  delete_members_test?: Maybe<Members_Test_Mutation_Response>;
  /** delete single row from the table: "members_test" */
  delete_members_test_by_pk?: Maybe<Members_Test>;
  /** delete data from the table: "operators_test" */
  delete_operators_test?: Maybe<Operators_Test_Mutation_Response>;
  /** delete single row from the table: "operators_test" */
  delete_operators_test_by_pk?: Maybe<Operators_Test>;
  /** delete data from the table: "table_tennis_tables" */
  delete_table_tennis_tables?: Maybe<Table_Tennis_Tables_Mutation_Response>;
  /** delete single row from the table: "table_tennis_tables" */
  delete_table_tennis_tables_by_pk?: Maybe<Table_Tennis_Tables>;
  /** delete data from the table: "users_test" */
  delete_users_test?: Maybe<Users_Test_Mutation_Response>;
  /** delete single row from the table: "users_test" */
  delete_users_test_by_pk?: Maybe<Users_Test>;
  /** insert data into the table: "member_active_test" */
  insert_member_active_test?: Maybe<Member_Active_Test_Mutation_Response>;
  /** insert a single row into the table: "member_active_test" */
  insert_member_active_test_one?: Maybe<Member_Active_Test>;
  /** insert data into the table: "member_banned" */
  insert_member_banned?: Maybe<Member_Banned_Mutation_Response>;
  /** insert a single row into the table: "member_banned" */
  insert_member_banned_one?: Maybe<Member_Banned>;
  /** insert data into the table: "member_pending_activations_test" */
  insert_member_pending_activations_test?: Maybe<Member_Pending_Activations_Test_Mutation_Response>;
  /** insert a single row into the table: "member_pending_activations_test" */
  insert_member_pending_activations_test_one?: Maybe<Member_Pending_Activations_Test>;
  /** insert data into the table: "member_resigned_test" */
  insert_member_resigned_test?: Maybe<Member_Resigned_Test_Mutation_Response>;
  /** insert a single row into the table: "member_resigned_test" */
  insert_member_resigned_test_one?: Maybe<Member_Resigned_Test>;
  /** insert data into the table: "member_restored" */
  insert_member_restored?: Maybe<Member_Restored_Mutation_Response>;
  /** insert a single row into the table: "member_restored" */
  insert_member_restored_one?: Maybe<Member_Restored>;
  /** insert data into the table: "member_status_activities_test" */
  insert_member_status_activities_test?: Maybe<Member_Status_Activities_Test_Mutation_Response>;
  /** insert a single row into the table: "member_status_activities_test" */
  insert_member_status_activities_test_one?: Maybe<Member_Status_Activities_Test>;
  /** insert data into the table: "members_test" */
  insert_members_test?: Maybe<Members_Test_Mutation_Response>;
  /** insert a single row into the table: "members_test" */
  insert_members_test_one?: Maybe<Members_Test>;
  /** insert data into the table: "operators_test" */
  insert_operators_test?: Maybe<Operators_Test_Mutation_Response>;
  /** insert a single row into the table: "operators_test" */
  insert_operators_test_one?: Maybe<Operators_Test>;
  /** insert data into the table: "table_tennis_tables" */
  insert_table_tennis_tables?: Maybe<Table_Tennis_Tables_Mutation_Response>;
  /** insert a single row into the table: "table_tennis_tables" */
  insert_table_tennis_tables_one?: Maybe<Table_Tennis_Tables>;
  /** insert data into the table: "users_test" */
  insert_users_test?: Maybe<Users_Test_Mutation_Response>;
  /** insert a single row into the table: "users_test" */
  insert_users_test_one?: Maybe<Users_Test>;
  /** update data of the table: "member_active_test" */
  update_member_active_test?: Maybe<Member_Active_Test_Mutation_Response>;
  /** update single row of the table: "member_active_test" */
  update_member_active_test_by_pk?: Maybe<Member_Active_Test>;
  /** update multiples rows of table: "member_active_test" */
  update_member_active_test_many?: Maybe<Array<Maybe<Member_Active_Test_Mutation_Response>>>;
  /** update data of the table: "member_banned" */
  update_member_banned?: Maybe<Member_Banned_Mutation_Response>;
  /** update single row of the table: "member_banned" */
  update_member_banned_by_pk?: Maybe<Member_Banned>;
  /** update multiples rows of table: "member_banned" */
  update_member_banned_many?: Maybe<Array<Maybe<Member_Banned_Mutation_Response>>>;
  /** update data of the table: "member_pending_activations_test" */
  update_member_pending_activations_test?: Maybe<Member_Pending_Activations_Test_Mutation_Response>;
  /** update single row of the table: "member_pending_activations_test" */
  update_member_pending_activations_test_by_pk?: Maybe<Member_Pending_Activations_Test>;
  /** update multiples rows of table: "member_pending_activations_test" */
  update_member_pending_activations_test_many?: Maybe<Array<Maybe<Member_Pending_Activations_Test_Mutation_Response>>>;
  /** update data of the table: "member_resigned_test" */
  update_member_resigned_test?: Maybe<Member_Resigned_Test_Mutation_Response>;
  /** update single row of the table: "member_resigned_test" */
  update_member_resigned_test_by_pk?: Maybe<Member_Resigned_Test>;
  /** update multiples rows of table: "member_resigned_test" */
  update_member_resigned_test_many?: Maybe<Array<Maybe<Member_Resigned_Test_Mutation_Response>>>;
  /** update data of the table: "member_restored" */
  update_member_restored?: Maybe<Member_Restored_Mutation_Response>;
  /** update single row of the table: "member_restored" */
  update_member_restored_by_pk?: Maybe<Member_Restored>;
  /** update multiples rows of table: "member_restored" */
  update_member_restored_many?: Maybe<Array<Maybe<Member_Restored_Mutation_Response>>>;
  /** update data of the table: "member_status_activities_test" */
  update_member_status_activities_test?: Maybe<Member_Status_Activities_Test_Mutation_Response>;
  /** update single row of the table: "member_status_activities_test" */
  update_member_status_activities_test_by_pk?: Maybe<Member_Status_Activities_Test>;
  /** update multiples rows of table: "member_status_activities_test" */
  update_member_status_activities_test_many?: Maybe<Array<Maybe<Member_Status_Activities_Test_Mutation_Response>>>;
  /** update data of the table: "members_test" */
  update_members_test?: Maybe<Members_Test_Mutation_Response>;
  /** update single row of the table: "members_test" */
  update_members_test_by_pk?: Maybe<Members_Test>;
  /** update multiples rows of table: "members_test" */
  update_members_test_many?: Maybe<Array<Maybe<Members_Test_Mutation_Response>>>;
  /** update data of the table: "operators_test" */
  update_operators_test?: Maybe<Operators_Test_Mutation_Response>;
  /** update single row of the table: "operators_test" */
  update_operators_test_by_pk?: Maybe<Operators_Test>;
  /** update multiples rows of table: "operators_test" */
  update_operators_test_many?: Maybe<Array<Maybe<Operators_Test_Mutation_Response>>>;
  /** update data of the table: "table_tennis_tables" */
  update_table_tennis_tables?: Maybe<Table_Tennis_Tables_Mutation_Response>;
  /** update single row of the table: "table_tennis_tables" */
  update_table_tennis_tables_by_pk?: Maybe<Table_Tennis_Tables>;
  /** update multiples rows of table: "table_tennis_tables" */
  update_table_tennis_tables_many?: Maybe<Array<Maybe<Table_Tennis_Tables_Mutation_Response>>>;
  /** update data of the table: "users_test" */
  update_users_test?: Maybe<Users_Test_Mutation_Response>;
  /** update single row of the table: "users_test" */
  update_users_test_by_pk?: Maybe<Users_Test>;
  /** update multiples rows of table: "users_test" */
  update_users_test_many?: Maybe<Array<Maybe<Users_Test_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_Member_Active_TestArgs = {
  where: Member_Active_Test_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Member_Active_Test_By_PkArgs = {
  created_at: Scalars['timestamptz']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Member_BannedArgs = {
  where: Member_Banned_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Member_Banned_By_PkArgs = {
  created_at: Scalars['timestamptz']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Member_Pending_Activations_TestArgs = {
  where: Member_Pending_Activations_Test_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Member_Pending_Activations_Test_By_PkArgs = {
  created_at: Scalars['timestamptz']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Member_Resigned_TestArgs = {
  where: Member_Resigned_Test_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Member_Resigned_Test_By_PkArgs = {
  created_at: Scalars['timestamptz']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Member_RestoredArgs = {
  where: Member_Restored_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Member_Restored_By_PkArgs = {
  created_at: Scalars['timestamptz']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Member_Status_Activities_TestArgs = {
  where: Member_Status_Activities_Test_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Member_Status_Activities_Test_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Members_TestArgs = {
  where: Members_Test_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Members_Test_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Operators_TestArgs = {
  where: Operators_Test_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Operators_Test_By_PkArgs = {
  id: Scalars['bigint']['input'];
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
export type Mutation_RootDelete_Users_TestArgs = {
  where: Users_Test_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_Test_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootInsert_Member_Active_TestArgs = {
  objects: Array<Member_Active_Test_Insert_Input>;
  on_conflict?: InputMaybe<Member_Active_Test_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Member_Active_Test_OneArgs = {
  object: Member_Active_Test_Insert_Input;
  on_conflict?: InputMaybe<Member_Active_Test_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Member_BannedArgs = {
  objects: Array<Member_Banned_Insert_Input>;
  on_conflict?: InputMaybe<Member_Banned_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Member_Banned_OneArgs = {
  object: Member_Banned_Insert_Input;
  on_conflict?: InputMaybe<Member_Banned_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Member_Pending_Activations_TestArgs = {
  objects: Array<Member_Pending_Activations_Test_Insert_Input>;
  on_conflict?: InputMaybe<Member_Pending_Activations_Test_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Member_Pending_Activations_Test_OneArgs = {
  object: Member_Pending_Activations_Test_Insert_Input;
  on_conflict?: InputMaybe<Member_Pending_Activations_Test_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Member_Resigned_TestArgs = {
  objects: Array<Member_Resigned_Test_Insert_Input>;
  on_conflict?: InputMaybe<Member_Resigned_Test_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Member_Resigned_Test_OneArgs = {
  object: Member_Resigned_Test_Insert_Input;
  on_conflict?: InputMaybe<Member_Resigned_Test_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Member_RestoredArgs = {
  objects: Array<Member_Restored_Insert_Input>;
  on_conflict?: InputMaybe<Member_Restored_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Member_Restored_OneArgs = {
  object: Member_Restored_Insert_Input;
  on_conflict?: InputMaybe<Member_Restored_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Member_Status_Activities_TestArgs = {
  objects: Array<Member_Status_Activities_Test_Insert_Input>;
  on_conflict?: InputMaybe<Member_Status_Activities_Test_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Member_Status_Activities_Test_OneArgs = {
  object: Member_Status_Activities_Test_Insert_Input;
  on_conflict?: InputMaybe<Member_Status_Activities_Test_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Members_TestArgs = {
  objects: Array<Members_Test_Insert_Input>;
  on_conflict?: InputMaybe<Members_Test_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Members_Test_OneArgs = {
  object: Members_Test_Insert_Input;
  on_conflict?: InputMaybe<Members_Test_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Operators_TestArgs = {
  objects: Array<Operators_Test_Insert_Input>;
  on_conflict?: InputMaybe<Operators_Test_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Operators_Test_OneArgs = {
  object: Operators_Test_Insert_Input;
  on_conflict?: InputMaybe<Operators_Test_On_Conflict>;
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
export type Mutation_RootInsert_Users_TestArgs = {
  objects: Array<Users_Test_Insert_Input>;
  on_conflict?: InputMaybe<Users_Test_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_Test_OneArgs = {
  object: Users_Test_Insert_Input;
  on_conflict?: InputMaybe<Users_Test_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Member_Active_TestArgs = {
  _inc?: InputMaybe<Member_Active_Test_Inc_Input>;
  _set?: InputMaybe<Member_Active_Test_Set_Input>;
  where: Member_Active_Test_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Member_Active_Test_By_PkArgs = {
  _inc?: InputMaybe<Member_Active_Test_Inc_Input>;
  _set?: InputMaybe<Member_Active_Test_Set_Input>;
  pk_columns: Member_Active_Test_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Member_Active_Test_ManyArgs = {
  updates: Array<Member_Active_Test_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Member_BannedArgs = {
  _inc?: InputMaybe<Member_Banned_Inc_Input>;
  _set?: InputMaybe<Member_Banned_Set_Input>;
  where: Member_Banned_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Member_Banned_By_PkArgs = {
  _inc?: InputMaybe<Member_Banned_Inc_Input>;
  _set?: InputMaybe<Member_Banned_Set_Input>;
  pk_columns: Member_Banned_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Member_Banned_ManyArgs = {
  updates: Array<Member_Banned_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Member_Pending_Activations_TestArgs = {
  _inc?: InputMaybe<Member_Pending_Activations_Test_Inc_Input>;
  _set?: InputMaybe<Member_Pending_Activations_Test_Set_Input>;
  where: Member_Pending_Activations_Test_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Member_Pending_Activations_Test_By_PkArgs = {
  _inc?: InputMaybe<Member_Pending_Activations_Test_Inc_Input>;
  _set?: InputMaybe<Member_Pending_Activations_Test_Set_Input>;
  pk_columns: Member_Pending_Activations_Test_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Member_Pending_Activations_Test_ManyArgs = {
  updates: Array<Member_Pending_Activations_Test_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Member_Resigned_TestArgs = {
  _inc?: InputMaybe<Member_Resigned_Test_Inc_Input>;
  _set?: InputMaybe<Member_Resigned_Test_Set_Input>;
  where: Member_Resigned_Test_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Member_Resigned_Test_By_PkArgs = {
  _inc?: InputMaybe<Member_Resigned_Test_Inc_Input>;
  _set?: InputMaybe<Member_Resigned_Test_Set_Input>;
  pk_columns: Member_Resigned_Test_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Member_Resigned_Test_ManyArgs = {
  updates: Array<Member_Resigned_Test_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Member_RestoredArgs = {
  _inc?: InputMaybe<Member_Restored_Inc_Input>;
  _set?: InputMaybe<Member_Restored_Set_Input>;
  where: Member_Restored_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Member_Restored_By_PkArgs = {
  _inc?: InputMaybe<Member_Restored_Inc_Input>;
  _set?: InputMaybe<Member_Restored_Set_Input>;
  pk_columns: Member_Restored_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Member_Restored_ManyArgs = {
  updates: Array<Member_Restored_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Member_Status_Activities_TestArgs = {
  _inc?: InputMaybe<Member_Status_Activities_Test_Inc_Input>;
  _set?: InputMaybe<Member_Status_Activities_Test_Set_Input>;
  where: Member_Status_Activities_Test_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Member_Status_Activities_Test_By_PkArgs = {
  _inc?: InputMaybe<Member_Status_Activities_Test_Inc_Input>;
  _set?: InputMaybe<Member_Status_Activities_Test_Set_Input>;
  pk_columns: Member_Status_Activities_Test_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Member_Status_Activities_Test_ManyArgs = {
  updates: Array<Member_Status_Activities_Test_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Members_TestArgs = {
  _inc?: InputMaybe<Members_Test_Inc_Input>;
  _set?: InputMaybe<Members_Test_Set_Input>;
  where: Members_Test_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Members_Test_By_PkArgs = {
  _inc?: InputMaybe<Members_Test_Inc_Input>;
  _set?: InputMaybe<Members_Test_Set_Input>;
  pk_columns: Members_Test_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Members_Test_ManyArgs = {
  updates: Array<Members_Test_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Operators_TestArgs = {
  _inc?: InputMaybe<Operators_Test_Inc_Input>;
  _set?: InputMaybe<Operators_Test_Set_Input>;
  where: Operators_Test_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Operators_Test_By_PkArgs = {
  _inc?: InputMaybe<Operators_Test_Inc_Input>;
  _set?: InputMaybe<Operators_Test_Set_Input>;
  pk_columns: Operators_Test_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Operators_Test_ManyArgs = {
  updates: Array<Operators_Test_Updates>;
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


/** mutation root */
export type Mutation_RootUpdate_Users_TestArgs = {
  _inc?: InputMaybe<Users_Test_Inc_Input>;
  _set?: InputMaybe<Users_Test_Set_Input>;
  where: Users_Test_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_Test_By_PkArgs = {
  _inc?: InputMaybe<Users_Test_Inc_Input>;
  _set?: InputMaybe<Users_Test_Set_Input>;
  pk_columns: Users_Test_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_Test_ManyArgs = {
  updates: Array<Users_Test_Updates>;
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

/** columns and relationships of "operators_test" */
export type Operators_Test = {
  __typename?: 'operators_test';
  id: Scalars['bigint']['output'];
  name: Scalars['String']['output'];
  user_id: Scalars['bigint']['output'];
};

/** aggregated selection of "operators_test" */
export type Operators_Test_Aggregate = {
  __typename?: 'operators_test_aggregate';
  aggregate?: Maybe<Operators_Test_Aggregate_Fields>;
  nodes: Array<Operators_Test>;
};

/** aggregate fields of "operators_test" */
export type Operators_Test_Aggregate_Fields = {
  __typename?: 'operators_test_aggregate_fields';
  avg?: Maybe<Operators_Test_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Operators_Test_Max_Fields>;
  min?: Maybe<Operators_Test_Min_Fields>;
  stddev?: Maybe<Operators_Test_Stddev_Fields>;
  stddev_pop?: Maybe<Operators_Test_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Operators_Test_Stddev_Samp_Fields>;
  sum?: Maybe<Operators_Test_Sum_Fields>;
  var_pop?: Maybe<Operators_Test_Var_Pop_Fields>;
  var_samp?: Maybe<Operators_Test_Var_Samp_Fields>;
  variance?: Maybe<Operators_Test_Variance_Fields>;
};


/** aggregate fields of "operators_test" */
export type Operators_Test_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Operators_Test_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Operators_Test_Avg_Fields = {
  __typename?: 'operators_test_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "operators_test". All fields are combined with a logical 'AND'. */
export type Operators_Test_Bool_Exp = {
  _and?: InputMaybe<Array<Operators_Test_Bool_Exp>>;
  _not?: InputMaybe<Operators_Test_Bool_Exp>;
  _or?: InputMaybe<Array<Operators_Test_Bool_Exp>>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "operators_test" */
export enum Operators_Test_Constraint {
  /** unique or primary key constraint on columns "id" */
  OperatorsTestPkey = 'operators_test_pkey'
}

/** input type for incrementing numeric columns in table "operators_test" */
export type Operators_Test_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "operators_test" */
export type Operators_Test_Insert_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Operators_Test_Max_Fields = {
  __typename?: 'operators_test_max_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Operators_Test_Min_Fields = {
  __typename?: 'operators_test_min_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** response of any mutation on the table "operators_test" */
export type Operators_Test_Mutation_Response = {
  __typename?: 'operators_test_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Operators_Test>;
};

/** on_conflict condition type for table "operators_test" */
export type Operators_Test_On_Conflict = {
  constraint: Operators_Test_Constraint;
  update_columns?: Array<Operators_Test_Update_Column>;
  where?: InputMaybe<Operators_Test_Bool_Exp>;
};

/** Ordering options when selecting data from "operators_test". */
export type Operators_Test_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: operators_test */
export type Operators_Test_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "operators_test" */
export enum Operators_Test_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "operators_test" */
export type Operators_Test_Set_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Operators_Test_Stddev_Fields = {
  __typename?: 'operators_test_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Operators_Test_Stddev_Pop_Fields = {
  __typename?: 'operators_test_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Operators_Test_Stddev_Samp_Fields = {
  __typename?: 'operators_test_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "operators_test" */
export type Operators_Test_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Operators_Test_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Operators_Test_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Operators_Test_Sum_Fields = {
  __typename?: 'operators_test_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "operators_test" */
export enum Operators_Test_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UserId = 'user_id'
}

export type Operators_Test_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Operators_Test_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Operators_Test_Set_Input>;
  /** filter the rows which have to be updated */
  where: Operators_Test_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Operators_Test_Var_Pop_Fields = {
  __typename?: 'operators_test_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Operators_Test_Var_Samp_Fields = {
  __typename?: 'operators_test_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Operators_Test_Variance_Fields = {
  __typename?: 'operators_test_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
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
  /** fetch data from the table: "member_active_test" */
  member_active_test: Array<Member_Active_Test>;
  /** fetch aggregated fields from the table: "member_active_test" */
  member_active_test_aggregate: Member_Active_Test_Aggregate;
  /** fetch data from the table: "member_active_test" using primary key columns */
  member_active_test_by_pk?: Maybe<Member_Active_Test>;
  /** fetch data from the table: "member_banned" */
  member_banned: Array<Member_Banned>;
  /** fetch aggregated fields from the table: "member_banned" */
  member_banned_aggregate: Member_Banned_Aggregate;
  /** fetch data from the table: "member_banned" using primary key columns */
  member_banned_by_pk?: Maybe<Member_Banned>;
  /** fetch data from the table: "member_pending_activations_test" */
  member_pending_activations_test: Array<Member_Pending_Activations_Test>;
  /** fetch aggregated fields from the table: "member_pending_activations_test" */
  member_pending_activations_test_aggregate: Member_Pending_Activations_Test_Aggregate;
  /** fetch data from the table: "member_pending_activations_test" using primary key columns */
  member_pending_activations_test_by_pk?: Maybe<Member_Pending_Activations_Test>;
  /** fetch data from the table: "member_resigned_test" */
  member_resigned_test: Array<Member_Resigned_Test>;
  /** fetch aggregated fields from the table: "member_resigned_test" */
  member_resigned_test_aggregate: Member_Resigned_Test_Aggregate;
  /** fetch data from the table: "member_resigned_test" using primary key columns */
  member_resigned_test_by_pk?: Maybe<Member_Resigned_Test>;
  /** fetch data from the table: "member_restored" */
  member_restored: Array<Member_Restored>;
  /** fetch aggregated fields from the table: "member_restored" */
  member_restored_aggregate: Member_Restored_Aggregate;
  /** fetch data from the table: "member_restored" using primary key columns */
  member_restored_by_pk?: Maybe<Member_Restored>;
  /** fetch data from the table: "member_status_activities_test" */
  member_status_activities_test: Array<Member_Status_Activities_Test>;
  /** fetch aggregated fields from the table: "member_status_activities_test" */
  member_status_activities_test_aggregate: Member_Status_Activities_Test_Aggregate;
  /** fetch data from the table: "member_status_activities_test" using primary key columns */
  member_status_activities_test_by_pk?: Maybe<Member_Status_Activities_Test>;
  /** fetch data from the table: "members_test" */
  members_test: Array<Members_Test>;
  /** fetch aggregated fields from the table: "members_test" */
  members_test_aggregate: Members_Test_Aggregate;
  /** fetch data from the table: "members_test" using primary key columns */
  members_test_by_pk?: Maybe<Members_Test>;
  /** fetch data from the table: "operators_test" */
  operators_test: Array<Operators_Test>;
  /** fetch aggregated fields from the table: "operators_test" */
  operators_test_aggregate: Operators_Test_Aggregate;
  /** fetch data from the table: "operators_test" using primary key columns */
  operators_test_by_pk?: Maybe<Operators_Test>;
  /** fetch data from the table: "table_tennis_tables" */
  table_tennis_tables: Array<Table_Tennis_Tables>;
  /** fetch aggregated fields from the table: "table_tennis_tables" */
  table_tennis_tables_aggregate: Table_Tennis_Tables_Aggregate;
  /** fetch data from the table: "table_tennis_tables" using primary key columns */
  table_tennis_tables_by_pk?: Maybe<Table_Tennis_Tables>;
  /** fetch data from the table: "users_test" */
  users_test: Array<Users_Test>;
  /** fetch aggregated fields from the table: "users_test" */
  users_test_aggregate: Users_Test_Aggregate;
  /** fetch data from the table: "users_test" using primary key columns */
  users_test_by_pk?: Maybe<Users_Test>;
};


export type Query_RootMember_Active_TestArgs = {
  distinct_on?: InputMaybe<Array<Member_Active_Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Active_Test_Order_By>>;
  where?: InputMaybe<Member_Active_Test_Bool_Exp>;
};


export type Query_RootMember_Active_Test_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Active_Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Active_Test_Order_By>>;
  where?: InputMaybe<Member_Active_Test_Bool_Exp>;
};


export type Query_RootMember_Active_Test_By_PkArgs = {
  created_at: Scalars['timestamptz']['input'];
};


export type Query_RootMember_BannedArgs = {
  distinct_on?: InputMaybe<Array<Member_Banned_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Banned_Order_By>>;
  where?: InputMaybe<Member_Banned_Bool_Exp>;
};


export type Query_RootMember_Banned_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Banned_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Banned_Order_By>>;
  where?: InputMaybe<Member_Banned_Bool_Exp>;
};


export type Query_RootMember_Banned_By_PkArgs = {
  created_at: Scalars['timestamptz']['input'];
};


export type Query_RootMember_Pending_Activations_TestArgs = {
  distinct_on?: InputMaybe<Array<Member_Pending_Activations_Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Pending_Activations_Test_Order_By>>;
  where?: InputMaybe<Member_Pending_Activations_Test_Bool_Exp>;
};


export type Query_RootMember_Pending_Activations_Test_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Pending_Activations_Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Pending_Activations_Test_Order_By>>;
  where?: InputMaybe<Member_Pending_Activations_Test_Bool_Exp>;
};


export type Query_RootMember_Pending_Activations_Test_By_PkArgs = {
  created_at: Scalars['timestamptz']['input'];
};


export type Query_RootMember_Resigned_TestArgs = {
  distinct_on?: InputMaybe<Array<Member_Resigned_Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Resigned_Test_Order_By>>;
  where?: InputMaybe<Member_Resigned_Test_Bool_Exp>;
};


export type Query_RootMember_Resigned_Test_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Resigned_Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Resigned_Test_Order_By>>;
  where?: InputMaybe<Member_Resigned_Test_Bool_Exp>;
};


export type Query_RootMember_Resigned_Test_By_PkArgs = {
  created_at: Scalars['timestamptz']['input'];
};


export type Query_RootMember_RestoredArgs = {
  distinct_on?: InputMaybe<Array<Member_Restored_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Restored_Order_By>>;
  where?: InputMaybe<Member_Restored_Bool_Exp>;
};


export type Query_RootMember_Restored_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Restored_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Restored_Order_By>>;
  where?: InputMaybe<Member_Restored_Bool_Exp>;
};


export type Query_RootMember_Restored_By_PkArgs = {
  created_at: Scalars['timestamptz']['input'];
};


export type Query_RootMember_Status_Activities_TestArgs = {
  distinct_on?: InputMaybe<Array<Member_Status_Activities_Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Status_Activities_Test_Order_By>>;
  where?: InputMaybe<Member_Status_Activities_Test_Bool_Exp>;
};


export type Query_RootMember_Status_Activities_Test_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Status_Activities_Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Status_Activities_Test_Order_By>>;
  where?: InputMaybe<Member_Status_Activities_Test_Bool_Exp>;
};


export type Query_RootMember_Status_Activities_Test_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootMembers_TestArgs = {
  distinct_on?: InputMaybe<Array<Members_Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Members_Test_Order_By>>;
  where?: InputMaybe<Members_Test_Bool_Exp>;
};


export type Query_RootMembers_Test_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Members_Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Members_Test_Order_By>>;
  where?: InputMaybe<Members_Test_Bool_Exp>;
};


export type Query_RootMembers_Test_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootOperators_TestArgs = {
  distinct_on?: InputMaybe<Array<Operators_Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Operators_Test_Order_By>>;
  where?: InputMaybe<Operators_Test_Bool_Exp>;
};


export type Query_RootOperators_Test_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Operators_Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Operators_Test_Order_By>>;
  where?: InputMaybe<Operators_Test_Bool_Exp>;
};


export type Query_RootOperators_Test_By_PkArgs = {
  id: Scalars['bigint']['input'];
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


export type Query_RootUsers_TestArgs = {
  distinct_on?: InputMaybe<Array<Users_Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Test_Order_By>>;
  where?: InputMaybe<Users_Test_Bool_Exp>;
};


export type Query_RootUsers_Test_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Test_Order_By>>;
  where?: InputMaybe<Users_Test_Bool_Exp>;
};


export type Query_RootUsers_Test_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "member_active_test" */
  member_active_test: Array<Member_Active_Test>;
  /** fetch aggregated fields from the table: "member_active_test" */
  member_active_test_aggregate: Member_Active_Test_Aggregate;
  /** fetch data from the table: "member_active_test" using primary key columns */
  member_active_test_by_pk?: Maybe<Member_Active_Test>;
  /** fetch data from the table in a streaming manner: "member_active_test" */
  member_active_test_stream: Array<Member_Active_Test>;
  /** fetch data from the table: "member_banned" */
  member_banned: Array<Member_Banned>;
  /** fetch aggregated fields from the table: "member_banned" */
  member_banned_aggregate: Member_Banned_Aggregate;
  /** fetch data from the table: "member_banned" using primary key columns */
  member_banned_by_pk?: Maybe<Member_Banned>;
  /** fetch data from the table in a streaming manner: "member_banned" */
  member_banned_stream: Array<Member_Banned>;
  /** fetch data from the table: "member_pending_activations_test" */
  member_pending_activations_test: Array<Member_Pending_Activations_Test>;
  /** fetch aggregated fields from the table: "member_pending_activations_test" */
  member_pending_activations_test_aggregate: Member_Pending_Activations_Test_Aggregate;
  /** fetch data from the table: "member_pending_activations_test" using primary key columns */
  member_pending_activations_test_by_pk?: Maybe<Member_Pending_Activations_Test>;
  /** fetch data from the table in a streaming manner: "member_pending_activations_test" */
  member_pending_activations_test_stream: Array<Member_Pending_Activations_Test>;
  /** fetch data from the table: "member_resigned_test" */
  member_resigned_test: Array<Member_Resigned_Test>;
  /** fetch aggregated fields from the table: "member_resigned_test" */
  member_resigned_test_aggregate: Member_Resigned_Test_Aggregate;
  /** fetch data from the table: "member_resigned_test" using primary key columns */
  member_resigned_test_by_pk?: Maybe<Member_Resigned_Test>;
  /** fetch data from the table in a streaming manner: "member_resigned_test" */
  member_resigned_test_stream: Array<Member_Resigned_Test>;
  /** fetch data from the table: "member_restored" */
  member_restored: Array<Member_Restored>;
  /** fetch aggregated fields from the table: "member_restored" */
  member_restored_aggregate: Member_Restored_Aggregate;
  /** fetch data from the table: "member_restored" using primary key columns */
  member_restored_by_pk?: Maybe<Member_Restored>;
  /** fetch data from the table in a streaming manner: "member_restored" */
  member_restored_stream: Array<Member_Restored>;
  /** fetch data from the table: "member_status_activities_test" */
  member_status_activities_test: Array<Member_Status_Activities_Test>;
  /** fetch aggregated fields from the table: "member_status_activities_test" */
  member_status_activities_test_aggregate: Member_Status_Activities_Test_Aggregate;
  /** fetch data from the table: "member_status_activities_test" using primary key columns */
  member_status_activities_test_by_pk?: Maybe<Member_Status_Activities_Test>;
  /** fetch data from the table in a streaming manner: "member_status_activities_test" */
  member_status_activities_test_stream: Array<Member_Status_Activities_Test>;
  /** fetch data from the table: "members_test" */
  members_test: Array<Members_Test>;
  /** fetch aggregated fields from the table: "members_test" */
  members_test_aggregate: Members_Test_Aggregate;
  /** fetch data from the table: "members_test" using primary key columns */
  members_test_by_pk?: Maybe<Members_Test>;
  /** fetch data from the table in a streaming manner: "members_test" */
  members_test_stream: Array<Members_Test>;
  /** fetch data from the table: "operators_test" */
  operators_test: Array<Operators_Test>;
  /** fetch aggregated fields from the table: "operators_test" */
  operators_test_aggregate: Operators_Test_Aggregate;
  /** fetch data from the table: "operators_test" using primary key columns */
  operators_test_by_pk?: Maybe<Operators_Test>;
  /** fetch data from the table in a streaming manner: "operators_test" */
  operators_test_stream: Array<Operators_Test>;
  /** fetch data from the table: "table_tennis_tables" */
  table_tennis_tables: Array<Table_Tennis_Tables>;
  /** fetch aggregated fields from the table: "table_tennis_tables" */
  table_tennis_tables_aggregate: Table_Tennis_Tables_Aggregate;
  /** fetch data from the table: "table_tennis_tables" using primary key columns */
  table_tennis_tables_by_pk?: Maybe<Table_Tennis_Tables>;
  /** fetch data from the table in a streaming manner: "table_tennis_tables" */
  table_tennis_tables_stream: Array<Table_Tennis_Tables>;
  /** fetch data from the table: "users_test" */
  users_test: Array<Users_Test>;
  /** fetch aggregated fields from the table: "users_test" */
  users_test_aggregate: Users_Test_Aggregate;
  /** fetch data from the table: "users_test" using primary key columns */
  users_test_by_pk?: Maybe<Users_Test>;
  /** fetch data from the table in a streaming manner: "users_test" */
  users_test_stream: Array<Users_Test>;
};


export type Subscription_RootMember_Active_TestArgs = {
  distinct_on?: InputMaybe<Array<Member_Active_Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Active_Test_Order_By>>;
  where?: InputMaybe<Member_Active_Test_Bool_Exp>;
};


export type Subscription_RootMember_Active_Test_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Active_Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Active_Test_Order_By>>;
  where?: InputMaybe<Member_Active_Test_Bool_Exp>;
};


export type Subscription_RootMember_Active_Test_By_PkArgs = {
  created_at: Scalars['timestamptz']['input'];
};


export type Subscription_RootMember_Active_Test_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Member_Active_Test_Stream_Cursor_Input>>;
  where?: InputMaybe<Member_Active_Test_Bool_Exp>;
};


export type Subscription_RootMember_BannedArgs = {
  distinct_on?: InputMaybe<Array<Member_Banned_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Banned_Order_By>>;
  where?: InputMaybe<Member_Banned_Bool_Exp>;
};


export type Subscription_RootMember_Banned_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Banned_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Banned_Order_By>>;
  where?: InputMaybe<Member_Banned_Bool_Exp>;
};


export type Subscription_RootMember_Banned_By_PkArgs = {
  created_at: Scalars['timestamptz']['input'];
};


export type Subscription_RootMember_Banned_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Member_Banned_Stream_Cursor_Input>>;
  where?: InputMaybe<Member_Banned_Bool_Exp>;
};


export type Subscription_RootMember_Pending_Activations_TestArgs = {
  distinct_on?: InputMaybe<Array<Member_Pending_Activations_Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Pending_Activations_Test_Order_By>>;
  where?: InputMaybe<Member_Pending_Activations_Test_Bool_Exp>;
};


export type Subscription_RootMember_Pending_Activations_Test_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Pending_Activations_Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Pending_Activations_Test_Order_By>>;
  where?: InputMaybe<Member_Pending_Activations_Test_Bool_Exp>;
};


export type Subscription_RootMember_Pending_Activations_Test_By_PkArgs = {
  created_at: Scalars['timestamptz']['input'];
};


export type Subscription_RootMember_Pending_Activations_Test_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Member_Pending_Activations_Test_Stream_Cursor_Input>>;
  where?: InputMaybe<Member_Pending_Activations_Test_Bool_Exp>;
};


export type Subscription_RootMember_Resigned_TestArgs = {
  distinct_on?: InputMaybe<Array<Member_Resigned_Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Resigned_Test_Order_By>>;
  where?: InputMaybe<Member_Resigned_Test_Bool_Exp>;
};


export type Subscription_RootMember_Resigned_Test_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Resigned_Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Resigned_Test_Order_By>>;
  where?: InputMaybe<Member_Resigned_Test_Bool_Exp>;
};


export type Subscription_RootMember_Resigned_Test_By_PkArgs = {
  created_at: Scalars['timestamptz']['input'];
};


export type Subscription_RootMember_Resigned_Test_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Member_Resigned_Test_Stream_Cursor_Input>>;
  where?: InputMaybe<Member_Resigned_Test_Bool_Exp>;
};


export type Subscription_RootMember_RestoredArgs = {
  distinct_on?: InputMaybe<Array<Member_Restored_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Restored_Order_By>>;
  where?: InputMaybe<Member_Restored_Bool_Exp>;
};


export type Subscription_RootMember_Restored_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Restored_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Restored_Order_By>>;
  where?: InputMaybe<Member_Restored_Bool_Exp>;
};


export type Subscription_RootMember_Restored_By_PkArgs = {
  created_at: Scalars['timestamptz']['input'];
};


export type Subscription_RootMember_Restored_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Member_Restored_Stream_Cursor_Input>>;
  where?: InputMaybe<Member_Restored_Bool_Exp>;
};


export type Subscription_RootMember_Status_Activities_TestArgs = {
  distinct_on?: InputMaybe<Array<Member_Status_Activities_Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Status_Activities_Test_Order_By>>;
  where?: InputMaybe<Member_Status_Activities_Test_Bool_Exp>;
};


export type Subscription_RootMember_Status_Activities_Test_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Status_Activities_Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Status_Activities_Test_Order_By>>;
  where?: InputMaybe<Member_Status_Activities_Test_Bool_Exp>;
};


export type Subscription_RootMember_Status_Activities_Test_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootMember_Status_Activities_Test_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Member_Status_Activities_Test_Stream_Cursor_Input>>;
  where?: InputMaybe<Member_Status_Activities_Test_Bool_Exp>;
};


export type Subscription_RootMembers_TestArgs = {
  distinct_on?: InputMaybe<Array<Members_Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Members_Test_Order_By>>;
  where?: InputMaybe<Members_Test_Bool_Exp>;
};


export type Subscription_RootMembers_Test_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Members_Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Members_Test_Order_By>>;
  where?: InputMaybe<Members_Test_Bool_Exp>;
};


export type Subscription_RootMembers_Test_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootMembers_Test_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Members_Test_Stream_Cursor_Input>>;
  where?: InputMaybe<Members_Test_Bool_Exp>;
};


export type Subscription_RootOperators_TestArgs = {
  distinct_on?: InputMaybe<Array<Operators_Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Operators_Test_Order_By>>;
  where?: InputMaybe<Operators_Test_Bool_Exp>;
};


export type Subscription_RootOperators_Test_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Operators_Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Operators_Test_Order_By>>;
  where?: InputMaybe<Operators_Test_Bool_Exp>;
};


export type Subscription_RootOperators_Test_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootOperators_Test_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Operators_Test_Stream_Cursor_Input>>;
  where?: InputMaybe<Operators_Test_Bool_Exp>;
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


export type Subscription_RootUsers_TestArgs = {
  distinct_on?: InputMaybe<Array<Users_Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Test_Order_By>>;
  where?: InputMaybe<Users_Test_Bool_Exp>;
};


export type Subscription_RootUsers_Test_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Test_Order_By>>;
  where?: InputMaybe<Users_Test_Bool_Exp>;
};


export type Subscription_RootUsers_Test_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootUsers_Test_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Test_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Test_Bool_Exp>;
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

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "users_test" */
export type Users_Test = {
  __typename?: 'users_test';
  id: Scalars['bigint']['output'];
  name: Scalars['String']['output'];
};

/** aggregated selection of "users_test" */
export type Users_Test_Aggregate = {
  __typename?: 'users_test_aggregate';
  aggregate?: Maybe<Users_Test_Aggregate_Fields>;
  nodes: Array<Users_Test>;
};

/** aggregate fields of "users_test" */
export type Users_Test_Aggregate_Fields = {
  __typename?: 'users_test_aggregate_fields';
  avg?: Maybe<Users_Test_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Test_Max_Fields>;
  min?: Maybe<Users_Test_Min_Fields>;
  stddev?: Maybe<Users_Test_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Test_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Test_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Test_Sum_Fields>;
  var_pop?: Maybe<Users_Test_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Test_Var_Samp_Fields>;
  variance?: Maybe<Users_Test_Variance_Fields>;
};


/** aggregate fields of "users_test" */
export type Users_Test_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Test_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Users_Test_Avg_Fields = {
  __typename?: 'users_test_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "users_test". All fields are combined with a logical 'AND'. */
export type Users_Test_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Test_Bool_Exp>>;
  _not?: InputMaybe<Users_Test_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Test_Bool_Exp>>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users_test" */
export enum Users_Test_Constraint {
  /** unique or primary key constraint on columns "id" */
  UsersTestPkey = 'users_test_pkey'
}

/** input type for incrementing numeric columns in table "users_test" */
export type Users_Test_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "users_test" */
export type Users_Test_Insert_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Users_Test_Max_Fields = {
  __typename?: 'users_test_max_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Users_Test_Min_Fields = {
  __typename?: 'users_test_min_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "users_test" */
export type Users_Test_Mutation_Response = {
  __typename?: 'users_test_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users_Test>;
};

/** on_conflict condition type for table "users_test" */
export type Users_Test_On_Conflict = {
  constraint: Users_Test_Constraint;
  update_columns?: Array<Users_Test_Update_Column>;
  where?: InputMaybe<Users_Test_Bool_Exp>;
};

/** Ordering options when selecting data from "users_test". */
export type Users_Test_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users_test */
export type Users_Test_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "users_test" */
export enum Users_Test_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "users_test" */
export type Users_Test_Set_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Users_Test_Stddev_Fields = {
  __typename?: 'users_test_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Users_Test_Stddev_Pop_Fields = {
  __typename?: 'users_test_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Users_Test_Stddev_Samp_Fields = {
  __typename?: 'users_test_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "users_test" */
export type Users_Test_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Test_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Test_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Users_Test_Sum_Fields = {
  __typename?: 'users_test_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "users_test" */
export enum Users_Test_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type Users_Test_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Users_Test_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Test_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Test_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Users_Test_Var_Pop_Fields = {
  __typename?: 'users_test_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Users_Test_Var_Samp_Fields = {
  __typename?: 'users_test_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Users_Test_Variance_Fields = {
  __typename?: 'users_test_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type GetActiveMemberQueryVariables = Exact<{
  member_id: Scalars['bigint']['input'];
}>;


export type GetActiveMemberQuery = (
  { __typename?: 'query_root' }
  & { member_status_activities_test: Array<(
    { __typename?: 'member_status_activities_test' }
    & { member_actives: Array<(
      { __typename?: 'member_active_test' }
      & Pick<Member_Active_Test, 'address' | 'birthday' | 'created_at' | 'member_id' | 'postal_code' | 'status_activity_id'>
    )> }
  )> }
);


export const GetActiveMemberDocument = gql`
    query GetActiveMember($member_id: bigint!) {
  member_status_activities_test(
    order_by: {created_at: desc}
    limit: 1
    where: {member_id: {_eq: $member_id}}
  ) {
    member_actives {
      address
      birthday
      created_at
      member_id
      postal_code
      status_activity_id
    }
  }
}
    `;

/**
 * __useGetActiveMemberQuery__
 *
 * To run a query within a React component, call `useGetActiveMemberQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetActiveMemberQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetActiveMemberQuery({
 *   variables: {
 *      member_id: // value for 'member_id'
 *   },
 * });
 */
export function useGetActiveMemberQuery(baseOptions: Apollo.QueryHookOptions<GetActiveMemberQuery, GetActiveMemberQueryVariables> & ({ variables: GetActiveMemberQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetActiveMemberQuery, GetActiveMemberQueryVariables>(GetActiveMemberDocument, options);
      }
export function useGetActiveMemberLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetActiveMemberQuery, GetActiveMemberQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetActiveMemberQuery, GetActiveMemberQueryVariables>(GetActiveMemberDocument, options);
        }
export function useGetActiveMemberSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetActiveMemberQuery, GetActiveMemberQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetActiveMemberQuery, GetActiveMemberQueryVariables>(GetActiveMemberDocument, options);
        }
export type GetActiveMemberQueryHookResult = ReturnType<typeof useGetActiveMemberQuery>;
export type GetActiveMemberLazyQueryHookResult = ReturnType<typeof useGetActiveMemberLazyQuery>;
export type GetActiveMemberSuspenseQueryHookResult = ReturnType<typeof useGetActiveMemberSuspenseQuery>;
export type GetActiveMemberQueryResult = Apollo.QueryResult<GetActiveMemberQuery, GetActiveMemberQueryVariables>;