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
  timestamptz: { input: string; output: string; }
  uuid: { input: string; output: string; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
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

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "memberActive" */
export type MemberActive = {
  address: Scalars['String']['output'];
  birthday: Scalars['timestamptz']['output'];
  createdAt: Scalars['timestamptz']['output'];
  email: Scalars['String']['output'];
  memberId: Scalars['uuid']['output'];
  postalCode: Scalars['String']['output'];
  statusActivityId: Scalars['uuid']['output'];
};

/** aggregated selection of "memberActive" */
export type MemberActive_Aggregate = {
  aggregate?: Maybe<MemberActive_Aggregate_Fields>;
  nodes: Array<MemberActive>;
};

/** aggregate fields of "memberActive" */
export type MemberActive_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<MemberActive_Max_Fields>;
  min?: Maybe<MemberActive_Min_Fields>;
};


/** aggregate fields of "memberActive" */
export type MemberActive_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<MemberActive_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "memberActive". All fields are combined with a logical 'AND'. */
export type MemberActive_Bool_Exp = {
  _and?: InputMaybe<Array<MemberActive_Bool_Exp>>;
  _not?: InputMaybe<MemberActive_Bool_Exp>;
  _or?: InputMaybe<Array<MemberActive_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  birthday?: InputMaybe<Timestamptz_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  memberId?: InputMaybe<Uuid_Comparison_Exp>;
  postalCode?: InputMaybe<String_Comparison_Exp>;
  statusActivityId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "memberActive" */
export enum MemberActive_Constraint {
  /** unique or primary key constraint on columns "statusActivityId" */
  MemberActivePkey = 'memberActive_pkey'
}

/** input type for inserting data into table "memberActive" */
export type MemberActive_Insert_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  birthday?: InputMaybe<Scalars['timestamptz']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  memberId?: InputMaybe<Scalars['uuid']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  statusActivityId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type MemberActive_Max_Fields = {
  address?: Maybe<Scalars['String']['output']>;
  birthday?: Maybe<Scalars['timestamptz']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  memberId?: Maybe<Scalars['uuid']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  statusActivityId?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type MemberActive_Min_Fields = {
  address?: Maybe<Scalars['String']['output']>;
  birthday?: Maybe<Scalars['timestamptz']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  memberId?: Maybe<Scalars['uuid']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  statusActivityId?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "memberActive" */
export type MemberActive_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<MemberActive>;
};

/** input type for inserting object relation for remote table "memberActive" */
export type MemberActive_Obj_Rel_Insert_Input = {
  data: MemberActive_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<MemberActive_On_Conflict>;
};

/** on_conflict condition type for table "memberActive" */
export type MemberActive_On_Conflict = {
  constraint: MemberActive_Constraint;
  update_columns?: Array<MemberActive_Update_Column>;
  where?: InputMaybe<MemberActive_Bool_Exp>;
};

/** Ordering options when selecting data from "memberActive". */
export type MemberActive_Order_By = {
  address?: InputMaybe<Order_By>;
  birthday?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  memberId?: InputMaybe<Order_By>;
  postalCode?: InputMaybe<Order_By>;
  statusActivityId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: memberActive */
export type MemberActive_Pk_Columns_Input = {
  statusActivityId: Scalars['uuid']['input'];
};

/** select columns of table "memberActive" */
export enum MemberActive_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Birthday = 'birthday',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  MemberId = 'memberId',
  /** column name */
  PostalCode = 'postalCode',
  /** column name */
  StatusActivityId = 'statusActivityId'
}

/** input type for updating data in table "memberActive" */
export type MemberActive_Set_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  birthday?: InputMaybe<Scalars['timestamptz']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  memberId?: InputMaybe<Scalars['uuid']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  statusActivityId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "memberActive" */
export type MemberActive_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: MemberActive_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type MemberActive_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  birthday?: InputMaybe<Scalars['timestamptz']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  memberId?: InputMaybe<Scalars['uuid']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  statusActivityId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "memberActive" */
export enum MemberActive_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Birthday = 'birthday',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  MemberId = 'memberId',
  /** column name */
  PostalCode = 'postalCode',
  /** column name */
  StatusActivityId = 'statusActivityId'
}

export type MemberActive_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<MemberActive_Set_Input>;
  /** filter the rows which have to be updated */
  where: MemberActive_Bool_Exp;
};

/** columns and relationships of "memberBanned" */
export type MemberBanned = {
  createdAt: Scalars['timestamptz']['output'];
  memberId: Scalars['uuid']['output'];
  operatedBy: Scalars['uuid']['output'];
  reason: Scalars['String']['output'];
  statusActivityId: Scalars['uuid']['output'];
};

/** aggregated selection of "memberBanned" */
export type MemberBanned_Aggregate = {
  aggregate?: Maybe<MemberBanned_Aggregate_Fields>;
  nodes: Array<MemberBanned>;
};

/** aggregate fields of "memberBanned" */
export type MemberBanned_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<MemberBanned_Max_Fields>;
  min?: Maybe<MemberBanned_Min_Fields>;
};


/** aggregate fields of "memberBanned" */
export type MemberBanned_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<MemberBanned_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "memberBanned". All fields are combined with a logical 'AND'. */
export type MemberBanned_Bool_Exp = {
  _and?: InputMaybe<Array<MemberBanned_Bool_Exp>>;
  _not?: InputMaybe<MemberBanned_Bool_Exp>;
  _or?: InputMaybe<Array<MemberBanned_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  memberId?: InputMaybe<Uuid_Comparison_Exp>;
  operatedBy?: InputMaybe<Uuid_Comparison_Exp>;
  reason?: InputMaybe<String_Comparison_Exp>;
  statusActivityId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "memberBanned" */
export enum MemberBanned_Constraint {
  /** unique or primary key constraint on columns "statusActivityId" */
  MemberBannedPkey = 'memberBanned_pkey'
}

/** input type for inserting data into table "memberBanned" */
export type MemberBanned_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  memberId?: InputMaybe<Scalars['uuid']['input']>;
  operatedBy?: InputMaybe<Scalars['uuid']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
  statusActivityId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type MemberBanned_Max_Fields = {
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  memberId?: Maybe<Scalars['uuid']['output']>;
  operatedBy?: Maybe<Scalars['uuid']['output']>;
  reason?: Maybe<Scalars['String']['output']>;
  statusActivityId?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type MemberBanned_Min_Fields = {
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  memberId?: Maybe<Scalars['uuid']['output']>;
  operatedBy?: Maybe<Scalars['uuid']['output']>;
  reason?: Maybe<Scalars['String']['output']>;
  statusActivityId?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "memberBanned" */
export type MemberBanned_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<MemberBanned>;
};

/** input type for inserting object relation for remote table "memberBanned" */
export type MemberBanned_Obj_Rel_Insert_Input = {
  data: MemberBanned_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<MemberBanned_On_Conflict>;
};

/** on_conflict condition type for table "memberBanned" */
export type MemberBanned_On_Conflict = {
  constraint: MemberBanned_Constraint;
  update_columns?: Array<MemberBanned_Update_Column>;
  where?: InputMaybe<MemberBanned_Bool_Exp>;
};

/** Ordering options when selecting data from "memberBanned". */
export type MemberBanned_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  memberId?: InputMaybe<Order_By>;
  operatedBy?: InputMaybe<Order_By>;
  reason?: InputMaybe<Order_By>;
  statusActivityId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: memberBanned */
export type MemberBanned_Pk_Columns_Input = {
  statusActivityId: Scalars['uuid']['input'];
};

/** select columns of table "memberBanned" */
export enum MemberBanned_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  MemberId = 'memberId',
  /** column name */
  OperatedBy = 'operatedBy',
  /** column name */
  Reason = 'reason',
  /** column name */
  StatusActivityId = 'statusActivityId'
}

/** input type for updating data in table "memberBanned" */
export type MemberBanned_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  memberId?: InputMaybe<Scalars['uuid']['input']>;
  operatedBy?: InputMaybe<Scalars['uuid']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
  statusActivityId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "memberBanned" */
export type MemberBanned_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: MemberBanned_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type MemberBanned_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  memberId?: InputMaybe<Scalars['uuid']['input']>;
  operatedBy?: InputMaybe<Scalars['uuid']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
  statusActivityId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "memberBanned" */
export enum MemberBanned_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  MemberId = 'memberId',
  /** column name */
  OperatedBy = 'operatedBy',
  /** column name */
  Reason = 'reason',
  /** column name */
  StatusActivityId = 'statusActivityId'
}

export type MemberBanned_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<MemberBanned_Set_Input>;
  /** filter the rows which have to be updated */
  where: MemberBanned_Bool_Exp;
};

/** columns and relationships of "memberLoginGoogle" */
export type MemberLoginGoogle = {
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  email: Scalars['String']['output'];
  /** An object relationship */
  member: Members;
  memberId: Scalars['uuid']['output'];
  uid: Scalars['String']['output'];
};

/** aggregated selection of "memberLoginGoogle" */
export type MemberLoginGoogle_Aggregate = {
  aggregate?: Maybe<MemberLoginGoogle_Aggregate_Fields>;
  nodes: Array<MemberLoginGoogle>;
};

/** aggregate fields of "memberLoginGoogle" */
export type MemberLoginGoogle_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<MemberLoginGoogle_Max_Fields>;
  min?: Maybe<MemberLoginGoogle_Min_Fields>;
};


/** aggregate fields of "memberLoginGoogle" */
export type MemberLoginGoogle_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<MemberLoginGoogle_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "memberLoginGoogle". All fields are combined with a logical 'AND'. */
export type MemberLoginGoogle_Bool_Exp = {
  _and?: InputMaybe<Array<MemberLoginGoogle_Bool_Exp>>;
  _not?: InputMaybe<MemberLoginGoogle_Bool_Exp>;
  _or?: InputMaybe<Array<MemberLoginGoogle_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  member?: InputMaybe<Members_Bool_Exp>;
  memberId?: InputMaybe<Uuid_Comparison_Exp>;
  uid?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "memberLoginGoogle" */
export enum MemberLoginGoogle_Constraint {
  /** unique or primary key constraint on columns "email" */
  MemberLoginGoogleEmailKey = 'memberLoginGoogle_email_key',
  /** unique or primary key constraint on columns "memberId" */
  MemberLoginGoogleMeberIdKey = 'memberLoginGoogle_meberId_key',
  /** unique or primary key constraint on columns "uid" */
  MemberLoginGooglePkey = 'memberLoginGoogle_pkey'
}

/** input type for inserting data into table "memberLoginGoogle" */
export type MemberLoginGoogle_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  member?: InputMaybe<Members_Obj_Rel_Insert_Input>;
  memberId?: InputMaybe<Scalars['uuid']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type MemberLoginGoogle_Max_Fields = {
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  memberId?: Maybe<Scalars['uuid']['output']>;
  uid?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type MemberLoginGoogle_Min_Fields = {
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  memberId?: Maybe<Scalars['uuid']['output']>;
  uid?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "memberLoginGoogle" */
export type MemberLoginGoogle_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<MemberLoginGoogle>;
};

/** input type for inserting object relation for remote table "memberLoginGoogle" */
export type MemberLoginGoogle_Obj_Rel_Insert_Input = {
  data: MemberLoginGoogle_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<MemberLoginGoogle_On_Conflict>;
};

/** on_conflict condition type for table "memberLoginGoogle" */
export type MemberLoginGoogle_On_Conflict = {
  constraint: MemberLoginGoogle_Constraint;
  update_columns?: Array<MemberLoginGoogle_Update_Column>;
  where?: InputMaybe<MemberLoginGoogle_Bool_Exp>;
};

/** Ordering options when selecting data from "memberLoginGoogle". */
export type MemberLoginGoogle_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  member?: InputMaybe<Members_Order_By>;
  memberId?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: memberLoginGoogle */
export type MemberLoginGoogle_Pk_Columns_Input = {
  uid: Scalars['String']['input'];
};

/** select columns of table "memberLoginGoogle" */
export enum MemberLoginGoogle_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  MemberId = 'memberId',
  /** column name */
  Uid = 'uid'
}

/** input type for updating data in table "memberLoginGoogle" */
export type MemberLoginGoogle_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  memberId?: InputMaybe<Scalars['uuid']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "memberLoginGoogle" */
export type MemberLoginGoogle_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: MemberLoginGoogle_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type MemberLoginGoogle_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  memberId?: InputMaybe<Scalars['uuid']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "memberLoginGoogle" */
export enum MemberLoginGoogle_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  MemberId = 'memberId',
  /** column name */
  Uid = 'uid'
}

export type MemberLoginGoogle_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<MemberLoginGoogle_Set_Input>;
  /** filter the rows which have to be updated */
  where: MemberLoginGoogle_Bool_Exp;
};

/** columns and relationships of "memberPendingActivation" */
export type MemberPendingActivation = {
  createdAt: Scalars['timestamptz']['output'];
  email: Scalars['String']['output'];
  memberId: Scalars['uuid']['output'];
  statusActivityId: Scalars['uuid']['output'];
};

/** aggregated selection of "memberPendingActivation" */
export type MemberPendingActivation_Aggregate = {
  aggregate?: Maybe<MemberPendingActivation_Aggregate_Fields>;
  nodes: Array<MemberPendingActivation>;
};

/** aggregate fields of "memberPendingActivation" */
export type MemberPendingActivation_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<MemberPendingActivation_Max_Fields>;
  min?: Maybe<MemberPendingActivation_Min_Fields>;
};


/** aggregate fields of "memberPendingActivation" */
export type MemberPendingActivation_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<MemberPendingActivation_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "memberPendingActivation". All fields are combined with a logical 'AND'. */
export type MemberPendingActivation_Bool_Exp = {
  _and?: InputMaybe<Array<MemberPendingActivation_Bool_Exp>>;
  _not?: InputMaybe<MemberPendingActivation_Bool_Exp>;
  _or?: InputMaybe<Array<MemberPendingActivation_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  memberId?: InputMaybe<Uuid_Comparison_Exp>;
  statusActivityId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "memberPendingActivation" */
export enum MemberPendingActivation_Constraint {
  /** unique or primary key constraint on columns "statusActivityId" */
  MemberPendingActivationPkey = 'memberPendingActivation_pkey'
}

/** input type for inserting data into table "memberPendingActivation" */
export type MemberPendingActivation_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  memberId?: InputMaybe<Scalars['uuid']['input']>;
  statusActivityId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type MemberPendingActivation_Max_Fields = {
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  memberId?: Maybe<Scalars['uuid']['output']>;
  statusActivityId?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type MemberPendingActivation_Min_Fields = {
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  memberId?: Maybe<Scalars['uuid']['output']>;
  statusActivityId?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "memberPendingActivation" */
export type MemberPendingActivation_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<MemberPendingActivation>;
};

/** input type for inserting object relation for remote table "memberPendingActivation" */
export type MemberPendingActivation_Obj_Rel_Insert_Input = {
  data: MemberPendingActivation_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<MemberPendingActivation_On_Conflict>;
};

/** on_conflict condition type for table "memberPendingActivation" */
export type MemberPendingActivation_On_Conflict = {
  constraint: MemberPendingActivation_Constraint;
  update_columns?: Array<MemberPendingActivation_Update_Column>;
  where?: InputMaybe<MemberPendingActivation_Bool_Exp>;
};

/** Ordering options when selecting data from "memberPendingActivation". */
export type MemberPendingActivation_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  memberId?: InputMaybe<Order_By>;
  statusActivityId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: memberPendingActivation */
export type MemberPendingActivation_Pk_Columns_Input = {
  statusActivityId: Scalars['uuid']['input'];
};

/** select columns of table "memberPendingActivation" */
export enum MemberPendingActivation_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  MemberId = 'memberId',
  /** column name */
  StatusActivityId = 'statusActivityId'
}

/** input type for updating data in table "memberPendingActivation" */
export type MemberPendingActivation_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  memberId?: InputMaybe<Scalars['uuid']['input']>;
  statusActivityId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "memberPendingActivation" */
export type MemberPendingActivation_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: MemberPendingActivation_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type MemberPendingActivation_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  memberId?: InputMaybe<Scalars['uuid']['input']>;
  statusActivityId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "memberPendingActivation" */
export enum MemberPendingActivation_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  MemberId = 'memberId',
  /** column name */
  StatusActivityId = 'statusActivityId'
}

export type MemberPendingActivation_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<MemberPendingActivation_Set_Input>;
  /** filter the rows which have to be updated */
  where: MemberPendingActivation_Bool_Exp;
};

/** columns and relationships of "memberResigned" */
export type MemberResigned = {
  agreement: Scalars['Boolean']['output'];
  createdAt: Scalars['timestamptz']['output'];
  memberId: Scalars['uuid']['output'];
  reasonDetail?: Maybe<Scalars['String']['output']>;
  reasonType: Scalars['String']['output'];
  statusActivityId: Scalars['uuid']['output'];
};

/** aggregated selection of "memberResigned" */
export type MemberResigned_Aggregate = {
  aggregate?: Maybe<MemberResigned_Aggregate_Fields>;
  nodes: Array<MemberResigned>;
};

/** aggregate fields of "memberResigned" */
export type MemberResigned_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<MemberResigned_Max_Fields>;
  min?: Maybe<MemberResigned_Min_Fields>;
};


/** aggregate fields of "memberResigned" */
export type MemberResigned_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<MemberResigned_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "memberResigned". All fields are combined with a logical 'AND'. */
export type MemberResigned_Bool_Exp = {
  _and?: InputMaybe<Array<MemberResigned_Bool_Exp>>;
  _not?: InputMaybe<MemberResigned_Bool_Exp>;
  _or?: InputMaybe<Array<MemberResigned_Bool_Exp>>;
  agreement?: InputMaybe<Boolean_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  memberId?: InputMaybe<Uuid_Comparison_Exp>;
  reasonDetail?: InputMaybe<String_Comparison_Exp>;
  reasonType?: InputMaybe<String_Comparison_Exp>;
  statusActivityId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "memberResigned" */
export enum MemberResigned_Constraint {
  /** unique or primary key constraint on columns "statusActivityId" */
  MemberResignedPkey = 'memberResigned_pkey'
}

/** input type for inserting data into table "memberResigned" */
export type MemberResigned_Insert_Input = {
  agreement?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  memberId?: InputMaybe<Scalars['uuid']['input']>;
  reasonDetail?: InputMaybe<Scalars['String']['input']>;
  reasonType?: InputMaybe<Scalars['String']['input']>;
  statusActivityId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type MemberResigned_Max_Fields = {
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  memberId?: Maybe<Scalars['uuid']['output']>;
  reasonDetail?: Maybe<Scalars['String']['output']>;
  reasonType?: Maybe<Scalars['String']['output']>;
  statusActivityId?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type MemberResigned_Min_Fields = {
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  memberId?: Maybe<Scalars['uuid']['output']>;
  reasonDetail?: Maybe<Scalars['String']['output']>;
  reasonType?: Maybe<Scalars['String']['output']>;
  statusActivityId?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "memberResigned" */
export type MemberResigned_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<MemberResigned>;
};

/** input type for inserting object relation for remote table "memberResigned" */
export type MemberResigned_Obj_Rel_Insert_Input = {
  data: MemberResigned_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<MemberResigned_On_Conflict>;
};

/** on_conflict condition type for table "memberResigned" */
export type MemberResigned_On_Conflict = {
  constraint: MemberResigned_Constraint;
  update_columns?: Array<MemberResigned_Update_Column>;
  where?: InputMaybe<MemberResigned_Bool_Exp>;
};

/** Ordering options when selecting data from "memberResigned". */
export type MemberResigned_Order_By = {
  agreement?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  memberId?: InputMaybe<Order_By>;
  reasonDetail?: InputMaybe<Order_By>;
  reasonType?: InputMaybe<Order_By>;
  statusActivityId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: memberResigned */
export type MemberResigned_Pk_Columns_Input = {
  statusActivityId: Scalars['uuid']['input'];
};

/** select columns of table "memberResigned" */
export enum MemberResigned_Select_Column {
  /** column name */
  Agreement = 'agreement',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  MemberId = 'memberId',
  /** column name */
  ReasonDetail = 'reasonDetail',
  /** column name */
  ReasonType = 'reasonType',
  /** column name */
  StatusActivityId = 'statusActivityId'
}

/** input type for updating data in table "memberResigned" */
export type MemberResigned_Set_Input = {
  agreement?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  memberId?: InputMaybe<Scalars['uuid']['input']>;
  reasonDetail?: InputMaybe<Scalars['String']['input']>;
  reasonType?: InputMaybe<Scalars['String']['input']>;
  statusActivityId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "memberResigned" */
export type MemberResigned_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: MemberResigned_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type MemberResigned_Stream_Cursor_Value_Input = {
  agreement?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  memberId?: InputMaybe<Scalars['uuid']['input']>;
  reasonDetail?: InputMaybe<Scalars['String']['input']>;
  reasonType?: InputMaybe<Scalars['String']['input']>;
  statusActivityId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "memberResigned" */
export enum MemberResigned_Update_Column {
  /** column name */
  Agreement = 'agreement',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  MemberId = 'memberId',
  /** column name */
  ReasonDetail = 'reasonDetail',
  /** column name */
  ReasonType = 'reasonType',
  /** column name */
  StatusActivityId = 'statusActivityId'
}

export type MemberResigned_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<MemberResigned_Set_Input>;
  /** filter the rows which have to be updated */
  where: MemberResigned_Bool_Exp;
};

/** columns and relationships of "memberRestored" */
export type MemberRestored = {
  createdAt: Scalars['timestamptz']['output'];
  memberId: Scalars['uuid']['output'];
  operatedBy: Scalars['uuid']['output'];
  reason: Scalars['String']['output'];
  statusActivityId: Scalars['uuid']['output'];
};

/** aggregated selection of "memberRestored" */
export type MemberRestored_Aggregate = {
  aggregate?: Maybe<MemberRestored_Aggregate_Fields>;
  nodes: Array<MemberRestored>;
};

/** aggregate fields of "memberRestored" */
export type MemberRestored_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<MemberRestored_Max_Fields>;
  min?: Maybe<MemberRestored_Min_Fields>;
};


/** aggregate fields of "memberRestored" */
export type MemberRestored_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<MemberRestored_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "memberRestored". All fields are combined with a logical 'AND'. */
export type MemberRestored_Bool_Exp = {
  _and?: InputMaybe<Array<MemberRestored_Bool_Exp>>;
  _not?: InputMaybe<MemberRestored_Bool_Exp>;
  _or?: InputMaybe<Array<MemberRestored_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  memberId?: InputMaybe<Uuid_Comparison_Exp>;
  operatedBy?: InputMaybe<Uuid_Comparison_Exp>;
  reason?: InputMaybe<String_Comparison_Exp>;
  statusActivityId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "memberRestored" */
export enum MemberRestored_Constraint {
  /** unique or primary key constraint on columns "statusActivityId" */
  MemberRestoredPkey = 'memberRestored_pkey'
}

/** input type for inserting data into table "memberRestored" */
export type MemberRestored_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  memberId?: InputMaybe<Scalars['uuid']['input']>;
  operatedBy?: InputMaybe<Scalars['uuid']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
  statusActivityId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type MemberRestored_Max_Fields = {
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  memberId?: Maybe<Scalars['uuid']['output']>;
  operatedBy?: Maybe<Scalars['uuid']['output']>;
  reason?: Maybe<Scalars['String']['output']>;
  statusActivityId?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type MemberRestored_Min_Fields = {
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  memberId?: Maybe<Scalars['uuid']['output']>;
  operatedBy?: Maybe<Scalars['uuid']['output']>;
  reason?: Maybe<Scalars['String']['output']>;
  statusActivityId?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "memberRestored" */
export type MemberRestored_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<MemberRestored>;
};

/** input type for inserting object relation for remote table "memberRestored" */
export type MemberRestored_Obj_Rel_Insert_Input = {
  data: MemberRestored_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<MemberRestored_On_Conflict>;
};

/** on_conflict condition type for table "memberRestored" */
export type MemberRestored_On_Conflict = {
  constraint: MemberRestored_Constraint;
  update_columns?: Array<MemberRestored_Update_Column>;
  where?: InputMaybe<MemberRestored_Bool_Exp>;
};

/** Ordering options when selecting data from "memberRestored". */
export type MemberRestored_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  memberId?: InputMaybe<Order_By>;
  operatedBy?: InputMaybe<Order_By>;
  reason?: InputMaybe<Order_By>;
  statusActivityId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: memberRestored */
export type MemberRestored_Pk_Columns_Input = {
  statusActivityId: Scalars['uuid']['input'];
};

/** select columns of table "memberRestored" */
export enum MemberRestored_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  MemberId = 'memberId',
  /** column name */
  OperatedBy = 'operatedBy',
  /** column name */
  Reason = 'reason',
  /** column name */
  StatusActivityId = 'statusActivityId'
}

/** input type for updating data in table "memberRestored" */
export type MemberRestored_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  memberId?: InputMaybe<Scalars['uuid']['input']>;
  operatedBy?: InputMaybe<Scalars['uuid']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
  statusActivityId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "memberRestored" */
export type MemberRestored_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: MemberRestored_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type MemberRestored_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  memberId?: InputMaybe<Scalars['uuid']['input']>;
  operatedBy?: InputMaybe<Scalars['uuid']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
  statusActivityId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "memberRestored" */
export enum MemberRestored_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  MemberId = 'memberId',
  /** column name */
  OperatedBy = 'operatedBy',
  /** column name */
  Reason = 'reason',
  /** column name */
  StatusActivityId = 'statusActivityId'
}

export type MemberRestored_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<MemberRestored_Set_Input>;
  /** filter the rows which have to be updated */
  where: MemberRestored_Bool_Exp;
};

/** columns and relationships of "memberStatusActivities" */
export type MemberStatusActivities = {
  createdAt: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  memberActive?: Maybe<MemberActive>;
  /** An object relationship */
  memberBanned?: Maybe<MemberBanned>;
  memberId: Scalars['uuid']['output'];
  /** An object relationship */
  memberPendingActivation?: Maybe<MemberPendingActivation>;
  /** An object relationship */
  memberResigned?: Maybe<MemberResigned>;
  /** An object relationship */
  memberRestored?: Maybe<MemberRestored>;
  status: Scalars['String']['output'];
};

/** aggregated selection of "memberStatusActivities" */
export type MemberStatusActivities_Aggregate = {
  aggregate?: Maybe<MemberStatusActivities_Aggregate_Fields>;
  nodes: Array<MemberStatusActivities>;
};

/** aggregate fields of "memberStatusActivities" */
export type MemberStatusActivities_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<MemberStatusActivities_Max_Fields>;
  min?: Maybe<MemberStatusActivities_Min_Fields>;
};


/** aggregate fields of "memberStatusActivities" */
export type MemberStatusActivities_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<MemberStatusActivities_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "memberStatusActivities". All fields are combined with a logical 'AND'. */
export type MemberStatusActivities_Bool_Exp = {
  _and?: InputMaybe<Array<MemberStatusActivities_Bool_Exp>>;
  _not?: InputMaybe<MemberStatusActivities_Bool_Exp>;
  _or?: InputMaybe<Array<MemberStatusActivities_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  memberActive?: InputMaybe<MemberActive_Bool_Exp>;
  memberBanned?: InputMaybe<MemberBanned_Bool_Exp>;
  memberId?: InputMaybe<Uuid_Comparison_Exp>;
  memberPendingActivation?: InputMaybe<MemberPendingActivation_Bool_Exp>;
  memberResigned?: InputMaybe<MemberResigned_Bool_Exp>;
  memberRestored?: InputMaybe<MemberRestored_Bool_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "memberStatusActivities" */
export enum MemberStatusActivities_Constraint {
  /** unique or primary key constraint on columns "id" */
  MemberStatusActivitiesPkey = 'memberStatusActivities_pkey'
}

/** input type for inserting data into table "memberStatusActivities" */
export type MemberStatusActivities_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  memberActive?: InputMaybe<MemberActive_Obj_Rel_Insert_Input>;
  memberBanned?: InputMaybe<MemberBanned_Obj_Rel_Insert_Input>;
  memberId?: InputMaybe<Scalars['uuid']['input']>;
  memberPendingActivation?: InputMaybe<MemberPendingActivation_Obj_Rel_Insert_Input>;
  memberResigned?: InputMaybe<MemberResigned_Obj_Rel_Insert_Input>;
  memberRestored?: InputMaybe<MemberRestored_Obj_Rel_Insert_Input>;
  status?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type MemberStatusActivities_Max_Fields = {
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  memberId?: Maybe<Scalars['uuid']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type MemberStatusActivities_Min_Fields = {
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  memberId?: Maybe<Scalars['uuid']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "memberStatusActivities" */
export type MemberStatusActivities_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<MemberStatusActivities>;
};

/** on_conflict condition type for table "memberStatusActivities" */
export type MemberStatusActivities_On_Conflict = {
  constraint: MemberStatusActivities_Constraint;
  update_columns?: Array<MemberStatusActivities_Update_Column>;
  where?: InputMaybe<MemberStatusActivities_Bool_Exp>;
};

/** Ordering options when selecting data from "memberStatusActivities". */
export type MemberStatusActivities_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  memberActive?: InputMaybe<MemberActive_Order_By>;
  memberBanned?: InputMaybe<MemberBanned_Order_By>;
  memberId?: InputMaybe<Order_By>;
  memberPendingActivation?: InputMaybe<MemberPendingActivation_Order_By>;
  memberResigned?: InputMaybe<MemberResigned_Order_By>;
  memberRestored?: InputMaybe<MemberRestored_Order_By>;
  status?: InputMaybe<Order_By>;
};

/** primary key columns input for table: memberStatusActivities */
export type MemberStatusActivities_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "memberStatusActivities" */
export enum MemberStatusActivities_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  MemberId = 'memberId',
  /** column name */
  Status = 'status'
}

/** input type for updating data in table "memberStatusActivities" */
export type MemberStatusActivities_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  memberId?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "memberStatusActivities" */
export type MemberStatusActivities_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: MemberStatusActivities_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type MemberStatusActivities_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  memberId?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "memberStatusActivities" */
export enum MemberStatusActivities_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  MemberId = 'memberId',
  /** column name */
  Status = 'status'
}

export type MemberStatusActivities_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<MemberStatusActivities_Set_Input>;
  /** filter the rows which have to be updated */
  where: MemberStatusActivities_Bool_Exp;
};

/** columns and relationships of "memberStatusActivityLatest" */
export type MemberStatusActivityLatest = {
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  memberActive?: Maybe<MemberActive>;
  /** An object relationship */
  memberBanned?: Maybe<MemberBanned>;
  memberId?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  memberPendingActivation?: Maybe<MemberPendingActivation>;
  /** An object relationship */
  memberResigned?: Maybe<MemberResigned>;
  /** An object relationship */
  memberRestored?: Maybe<MemberRestored>;
  status?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "memberStatusActivityLatest" */
export type MemberStatusActivityLatest_Aggregate = {
  aggregate?: Maybe<MemberStatusActivityLatest_Aggregate_Fields>;
  nodes: Array<MemberStatusActivityLatest>;
};

/** aggregate fields of "memberStatusActivityLatest" */
export type MemberStatusActivityLatest_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<MemberStatusActivityLatest_Max_Fields>;
  min?: Maybe<MemberStatusActivityLatest_Min_Fields>;
};


/** aggregate fields of "memberStatusActivityLatest" */
export type MemberStatusActivityLatest_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<MemberStatusActivityLatest_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "memberStatusActivityLatest". All fields are combined with a logical 'AND'. */
export type MemberStatusActivityLatest_Bool_Exp = {
  _and?: InputMaybe<Array<MemberStatusActivityLatest_Bool_Exp>>;
  _not?: InputMaybe<MemberStatusActivityLatest_Bool_Exp>;
  _or?: InputMaybe<Array<MemberStatusActivityLatest_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  memberActive?: InputMaybe<MemberActive_Bool_Exp>;
  memberBanned?: InputMaybe<MemberBanned_Bool_Exp>;
  memberId?: InputMaybe<Uuid_Comparison_Exp>;
  memberPendingActivation?: InputMaybe<MemberPendingActivation_Bool_Exp>;
  memberResigned?: InputMaybe<MemberResigned_Bool_Exp>;
  memberRestored?: InputMaybe<MemberRestored_Bool_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
};

/** input type for inserting data into table "memberStatusActivityLatest" */
export type MemberStatusActivityLatest_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  memberActive?: InputMaybe<MemberActive_Obj_Rel_Insert_Input>;
  memberBanned?: InputMaybe<MemberBanned_Obj_Rel_Insert_Input>;
  memberId?: InputMaybe<Scalars['uuid']['input']>;
  memberPendingActivation?: InputMaybe<MemberPendingActivation_Obj_Rel_Insert_Input>;
  memberResigned?: InputMaybe<MemberResigned_Obj_Rel_Insert_Input>;
  memberRestored?: InputMaybe<MemberRestored_Obj_Rel_Insert_Input>;
  status?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type MemberStatusActivityLatest_Max_Fields = {
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  memberId?: Maybe<Scalars['uuid']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type MemberStatusActivityLatest_Min_Fields = {
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  memberId?: Maybe<Scalars['uuid']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "memberStatusActivityLatest" */
export type MemberStatusActivityLatest_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<MemberStatusActivityLatest>;
};

/** Ordering options when selecting data from "memberStatusActivityLatest". */
export type MemberStatusActivityLatest_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  memberActive?: InputMaybe<MemberActive_Order_By>;
  memberBanned?: InputMaybe<MemberBanned_Order_By>;
  memberId?: InputMaybe<Order_By>;
  memberPendingActivation?: InputMaybe<MemberPendingActivation_Order_By>;
  memberResigned?: InputMaybe<MemberResigned_Order_By>;
  memberRestored?: InputMaybe<MemberRestored_Order_By>;
  status?: InputMaybe<Order_By>;
};

/** select columns of table "memberStatusActivityLatest" */
export enum MemberStatusActivityLatest_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  MemberId = 'memberId',
  /** column name */
  Status = 'status'
}

/** input type for updating data in table "memberStatusActivityLatest" */
export type MemberStatusActivityLatest_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  memberId?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "memberStatusActivityLatest" */
export type MemberStatusActivityLatest_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: MemberStatusActivityLatest_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type MemberStatusActivityLatest_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  memberId?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type MemberStatusActivityLatest_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<MemberStatusActivityLatest_Set_Input>;
  /** filter the rows which have to be updated */
  where: MemberStatusActivityLatest_Bool_Exp;
};

/** columns and relationships of "members" */
export type Members = {
  id: Scalars['uuid']['output'];
  /** An object relationship */
  memberLoginGoogle?: Maybe<MemberLoginGoogle>;
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid']['output'];
};

/** aggregated selection of "members" */
export type Members_Aggregate = {
  aggregate?: Maybe<Members_Aggregate_Fields>;
  nodes: Array<Members>;
};

export type Members_Aggregate_Bool_Exp = {
  count?: InputMaybe<Members_Aggregate_Bool_Exp_Count>;
};

export type Members_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Members_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Members_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "members" */
export type Members_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Members_Max_Fields>;
  min?: Maybe<Members_Min_Fields>;
};


/** aggregate fields of "members" */
export type Members_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Members_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "members" */
export type Members_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Members_Max_Order_By>;
  min?: InputMaybe<Members_Min_Order_By>;
};

/** input type for inserting array relation for remote table "members" */
export type Members_Arr_Rel_Insert_Input = {
  data: Array<Members_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Members_On_Conflict>;
};

/** Boolean expression to filter rows from the table "members". All fields are combined with a logical 'AND'. */
export type Members_Bool_Exp = {
  _and?: InputMaybe<Array<Members_Bool_Exp>>;
  _not?: InputMaybe<Members_Bool_Exp>;
  _or?: InputMaybe<Array<Members_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  memberLoginGoogle?: InputMaybe<MemberLoginGoogle_Bool_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "members" */
export enum Members_Constraint {
  /** unique or primary key constraint on columns "id" */
  MembersIdKey = 'members_id_key',
  /** unique or primary key constraint on columns "id" */
  MembersPkey = 'members_pkey'
}

/** input type for inserting data into table "members" */
export type Members_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  memberLoginGoogle?: InputMaybe<MemberLoginGoogle_Obj_Rel_Insert_Input>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Members_Max_Fields = {
  id?: Maybe<Scalars['uuid']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "members" */
export type Members_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Members_Min_Fields = {
  id?: Maybe<Scalars['uuid']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "members" */
export type Members_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "members" */
export type Members_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Members>;
};

/** input type for inserting object relation for remote table "members" */
export type Members_Obj_Rel_Insert_Input = {
  data: Members_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Members_On_Conflict>;
};

/** on_conflict condition type for table "members" */
export type Members_On_Conflict = {
  constraint: Members_Constraint;
  update_columns?: Array<Members_Update_Column>;
  where?: InputMaybe<Members_Bool_Exp>;
};

/** Ordering options when selecting data from "members". */
export type Members_Order_By = {
  id?: InputMaybe<Order_By>;
  memberLoginGoogle?: InputMaybe<MemberLoginGoogle_Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: members */
export type Members_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "members" */
export enum Members_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "members" */
export type Members_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "members" */
export type Members_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Members_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Members_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "members" */
export enum Members_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'userId'
}

export type Members_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Members_Set_Input>;
  /** filter the rows which have to be updated */
  where: Members_Bool_Exp;
};

/** mutation root */
export type Mutation_Root = {
  /** delete data from the table: "memberActive" */
  delete_memberActive?: Maybe<MemberActive_Mutation_Response>;
  /** delete single row from the table: "memberActive" */
  delete_memberActive_by_pk?: Maybe<MemberActive>;
  /** delete data from the table: "memberBanned" */
  delete_memberBanned?: Maybe<MemberBanned_Mutation_Response>;
  /** delete single row from the table: "memberBanned" */
  delete_memberBanned_by_pk?: Maybe<MemberBanned>;
  /** delete data from the table: "memberLoginGoogle" */
  delete_memberLoginGoogle?: Maybe<MemberLoginGoogle_Mutation_Response>;
  /** delete single row from the table: "memberLoginGoogle" */
  delete_memberLoginGoogle_by_pk?: Maybe<MemberLoginGoogle>;
  /** delete data from the table: "memberPendingActivation" */
  delete_memberPendingActivation?: Maybe<MemberPendingActivation_Mutation_Response>;
  /** delete single row from the table: "memberPendingActivation" */
  delete_memberPendingActivation_by_pk?: Maybe<MemberPendingActivation>;
  /** delete data from the table: "memberResigned" */
  delete_memberResigned?: Maybe<MemberResigned_Mutation_Response>;
  /** delete single row from the table: "memberResigned" */
  delete_memberResigned_by_pk?: Maybe<MemberResigned>;
  /** delete data from the table: "memberRestored" */
  delete_memberRestored?: Maybe<MemberRestored_Mutation_Response>;
  /** delete single row from the table: "memberRestored" */
  delete_memberRestored_by_pk?: Maybe<MemberRestored>;
  /** delete data from the table: "memberStatusActivities" */
  delete_memberStatusActivities?: Maybe<MemberStatusActivities_Mutation_Response>;
  /** delete single row from the table: "memberStatusActivities" */
  delete_memberStatusActivities_by_pk?: Maybe<MemberStatusActivities>;
  /** delete data from the table: "memberStatusActivityLatest" */
  delete_memberStatusActivityLatest?: Maybe<MemberStatusActivityLatest_Mutation_Response>;
  /** delete data from the table: "members" */
  delete_members?: Maybe<Members_Mutation_Response>;
  /** delete single row from the table: "members" */
  delete_members_by_pk?: Maybe<Members>;
  /** delete data from the table: "operators" */
  delete_operators?: Maybe<Operators_Mutation_Response>;
  /** delete single row from the table: "operators" */
  delete_operators_by_pk?: Maybe<Operators>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "memberActive" */
  insert_memberActive?: Maybe<MemberActive_Mutation_Response>;
  /** insert a single row into the table: "memberActive" */
  insert_memberActive_one?: Maybe<MemberActive>;
  /** insert data into the table: "memberBanned" */
  insert_memberBanned?: Maybe<MemberBanned_Mutation_Response>;
  /** insert a single row into the table: "memberBanned" */
  insert_memberBanned_one?: Maybe<MemberBanned>;
  /** insert data into the table: "memberLoginGoogle" */
  insert_memberLoginGoogle?: Maybe<MemberLoginGoogle_Mutation_Response>;
  /** insert a single row into the table: "memberLoginGoogle" */
  insert_memberLoginGoogle_one?: Maybe<MemberLoginGoogle>;
  /** insert data into the table: "memberPendingActivation" */
  insert_memberPendingActivation?: Maybe<MemberPendingActivation_Mutation_Response>;
  /** insert a single row into the table: "memberPendingActivation" */
  insert_memberPendingActivation_one?: Maybe<MemberPendingActivation>;
  /** insert data into the table: "memberResigned" */
  insert_memberResigned?: Maybe<MemberResigned_Mutation_Response>;
  /** insert a single row into the table: "memberResigned" */
  insert_memberResigned_one?: Maybe<MemberResigned>;
  /** insert data into the table: "memberRestored" */
  insert_memberRestored?: Maybe<MemberRestored_Mutation_Response>;
  /** insert a single row into the table: "memberRestored" */
  insert_memberRestored_one?: Maybe<MemberRestored>;
  /** insert data into the table: "memberStatusActivities" */
  insert_memberStatusActivities?: Maybe<MemberStatusActivities_Mutation_Response>;
  /** insert a single row into the table: "memberStatusActivities" */
  insert_memberStatusActivities_one?: Maybe<MemberStatusActivities>;
  /** insert data into the table: "memberStatusActivityLatest" */
  insert_memberStatusActivityLatest?: Maybe<MemberStatusActivityLatest_Mutation_Response>;
  /** insert a single row into the table: "memberStatusActivityLatest" */
  insert_memberStatusActivityLatest_one?: Maybe<MemberStatusActivityLatest>;
  /** insert data into the table: "members" */
  insert_members?: Maybe<Members_Mutation_Response>;
  /** insert a single row into the table: "members" */
  insert_members_one?: Maybe<Members>;
  /** insert data into the table: "operators" */
  insert_operators?: Maybe<Operators_Mutation_Response>;
  /** insert a single row into the table: "operators" */
  insert_operators_one?: Maybe<Operators>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "memberActive" */
  update_memberActive?: Maybe<MemberActive_Mutation_Response>;
  /** update single row of the table: "memberActive" */
  update_memberActive_by_pk?: Maybe<MemberActive>;
  /** update multiples rows of table: "memberActive" */
  update_memberActive_many?: Maybe<Array<Maybe<MemberActive_Mutation_Response>>>;
  /** update data of the table: "memberBanned" */
  update_memberBanned?: Maybe<MemberBanned_Mutation_Response>;
  /** update single row of the table: "memberBanned" */
  update_memberBanned_by_pk?: Maybe<MemberBanned>;
  /** update multiples rows of table: "memberBanned" */
  update_memberBanned_many?: Maybe<Array<Maybe<MemberBanned_Mutation_Response>>>;
  /** update data of the table: "memberLoginGoogle" */
  update_memberLoginGoogle?: Maybe<MemberLoginGoogle_Mutation_Response>;
  /** update single row of the table: "memberLoginGoogle" */
  update_memberLoginGoogle_by_pk?: Maybe<MemberLoginGoogle>;
  /** update multiples rows of table: "memberLoginGoogle" */
  update_memberLoginGoogle_many?: Maybe<Array<Maybe<MemberLoginGoogle_Mutation_Response>>>;
  /** update data of the table: "memberPendingActivation" */
  update_memberPendingActivation?: Maybe<MemberPendingActivation_Mutation_Response>;
  /** update single row of the table: "memberPendingActivation" */
  update_memberPendingActivation_by_pk?: Maybe<MemberPendingActivation>;
  /** update multiples rows of table: "memberPendingActivation" */
  update_memberPendingActivation_many?: Maybe<Array<Maybe<MemberPendingActivation_Mutation_Response>>>;
  /** update data of the table: "memberResigned" */
  update_memberResigned?: Maybe<MemberResigned_Mutation_Response>;
  /** update single row of the table: "memberResigned" */
  update_memberResigned_by_pk?: Maybe<MemberResigned>;
  /** update multiples rows of table: "memberResigned" */
  update_memberResigned_many?: Maybe<Array<Maybe<MemberResigned_Mutation_Response>>>;
  /** update data of the table: "memberRestored" */
  update_memberRestored?: Maybe<MemberRestored_Mutation_Response>;
  /** update single row of the table: "memberRestored" */
  update_memberRestored_by_pk?: Maybe<MemberRestored>;
  /** update multiples rows of table: "memberRestored" */
  update_memberRestored_many?: Maybe<Array<Maybe<MemberRestored_Mutation_Response>>>;
  /** update data of the table: "memberStatusActivities" */
  update_memberStatusActivities?: Maybe<MemberStatusActivities_Mutation_Response>;
  /** update single row of the table: "memberStatusActivities" */
  update_memberStatusActivities_by_pk?: Maybe<MemberStatusActivities>;
  /** update multiples rows of table: "memberStatusActivities" */
  update_memberStatusActivities_many?: Maybe<Array<Maybe<MemberStatusActivities_Mutation_Response>>>;
  /** update data of the table: "memberStatusActivityLatest" */
  update_memberStatusActivityLatest?: Maybe<MemberStatusActivityLatest_Mutation_Response>;
  /** update multiples rows of table: "memberStatusActivityLatest" */
  update_memberStatusActivityLatest_many?: Maybe<Array<Maybe<MemberStatusActivityLatest_Mutation_Response>>>;
  /** update data of the table: "members" */
  update_members?: Maybe<Members_Mutation_Response>;
  /** update single row of the table: "members" */
  update_members_by_pk?: Maybe<Members>;
  /** update multiples rows of table: "members" */
  update_members_many?: Maybe<Array<Maybe<Members_Mutation_Response>>>;
  /** update data of the table: "operators" */
  update_operators?: Maybe<Operators_Mutation_Response>;
  /** update single row of the table: "operators" */
  update_operators_by_pk?: Maybe<Operators>;
  /** update multiples rows of table: "operators" */
  update_operators_many?: Maybe<Array<Maybe<Operators_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_MemberActiveArgs = {
  where: MemberActive_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_MemberActive_By_PkArgs = {
  statusActivityId: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_MemberBannedArgs = {
  where: MemberBanned_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_MemberBanned_By_PkArgs = {
  statusActivityId: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_MemberLoginGoogleArgs = {
  where: MemberLoginGoogle_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_MemberLoginGoogle_By_PkArgs = {
  uid: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_MemberPendingActivationArgs = {
  where: MemberPendingActivation_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_MemberPendingActivation_By_PkArgs = {
  statusActivityId: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_MemberResignedArgs = {
  where: MemberResigned_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_MemberResigned_By_PkArgs = {
  statusActivityId: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_MemberRestoredArgs = {
  where: MemberRestored_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_MemberRestored_By_PkArgs = {
  statusActivityId: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_MemberStatusActivitiesArgs = {
  where: MemberStatusActivities_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_MemberStatusActivities_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_MemberStatusActivityLatestArgs = {
  where: MemberStatusActivityLatest_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_MembersArgs = {
  where: Members_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Members_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_OperatorsArgs = {
  where: Operators_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Operators_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsert_MemberActiveArgs = {
  objects: Array<MemberActive_Insert_Input>;
  on_conflict?: InputMaybe<MemberActive_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MemberActive_OneArgs = {
  object: MemberActive_Insert_Input;
  on_conflict?: InputMaybe<MemberActive_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MemberBannedArgs = {
  objects: Array<MemberBanned_Insert_Input>;
  on_conflict?: InputMaybe<MemberBanned_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MemberBanned_OneArgs = {
  object: MemberBanned_Insert_Input;
  on_conflict?: InputMaybe<MemberBanned_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MemberLoginGoogleArgs = {
  objects: Array<MemberLoginGoogle_Insert_Input>;
  on_conflict?: InputMaybe<MemberLoginGoogle_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MemberLoginGoogle_OneArgs = {
  object: MemberLoginGoogle_Insert_Input;
  on_conflict?: InputMaybe<MemberLoginGoogle_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MemberPendingActivationArgs = {
  objects: Array<MemberPendingActivation_Insert_Input>;
  on_conflict?: InputMaybe<MemberPendingActivation_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MemberPendingActivation_OneArgs = {
  object: MemberPendingActivation_Insert_Input;
  on_conflict?: InputMaybe<MemberPendingActivation_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MemberResignedArgs = {
  objects: Array<MemberResigned_Insert_Input>;
  on_conflict?: InputMaybe<MemberResigned_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MemberResigned_OneArgs = {
  object: MemberResigned_Insert_Input;
  on_conflict?: InputMaybe<MemberResigned_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MemberRestoredArgs = {
  objects: Array<MemberRestored_Insert_Input>;
  on_conflict?: InputMaybe<MemberRestored_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MemberRestored_OneArgs = {
  object: MemberRestored_Insert_Input;
  on_conflict?: InputMaybe<MemberRestored_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MemberStatusActivitiesArgs = {
  objects: Array<MemberStatusActivities_Insert_Input>;
  on_conflict?: InputMaybe<MemberStatusActivities_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MemberStatusActivities_OneArgs = {
  object: MemberStatusActivities_Insert_Input;
  on_conflict?: InputMaybe<MemberStatusActivities_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MemberStatusActivityLatestArgs = {
  objects: Array<MemberStatusActivityLatest_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_MemberStatusActivityLatest_OneArgs = {
  object: MemberStatusActivityLatest_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_MembersArgs = {
  objects: Array<Members_Insert_Input>;
  on_conflict?: InputMaybe<Members_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Members_OneArgs = {
  object: Members_Insert_Input;
  on_conflict?: InputMaybe<Members_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OperatorsArgs = {
  objects: Array<Operators_Insert_Input>;
  on_conflict?: InputMaybe<Operators_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Operators_OneArgs = {
  object: Operators_Insert_Input;
  on_conflict?: InputMaybe<Operators_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_MemberActiveArgs = {
  _set?: InputMaybe<MemberActive_Set_Input>;
  where: MemberActive_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_MemberActive_By_PkArgs = {
  _set?: InputMaybe<MemberActive_Set_Input>;
  pk_columns: MemberActive_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_MemberActive_ManyArgs = {
  updates: Array<MemberActive_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_MemberBannedArgs = {
  _set?: InputMaybe<MemberBanned_Set_Input>;
  where: MemberBanned_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_MemberBanned_By_PkArgs = {
  _set?: InputMaybe<MemberBanned_Set_Input>;
  pk_columns: MemberBanned_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_MemberBanned_ManyArgs = {
  updates: Array<MemberBanned_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_MemberLoginGoogleArgs = {
  _set?: InputMaybe<MemberLoginGoogle_Set_Input>;
  where: MemberLoginGoogle_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_MemberLoginGoogle_By_PkArgs = {
  _set?: InputMaybe<MemberLoginGoogle_Set_Input>;
  pk_columns: MemberLoginGoogle_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_MemberLoginGoogle_ManyArgs = {
  updates: Array<MemberLoginGoogle_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_MemberPendingActivationArgs = {
  _set?: InputMaybe<MemberPendingActivation_Set_Input>;
  where: MemberPendingActivation_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_MemberPendingActivation_By_PkArgs = {
  _set?: InputMaybe<MemberPendingActivation_Set_Input>;
  pk_columns: MemberPendingActivation_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_MemberPendingActivation_ManyArgs = {
  updates: Array<MemberPendingActivation_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_MemberResignedArgs = {
  _set?: InputMaybe<MemberResigned_Set_Input>;
  where: MemberResigned_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_MemberResigned_By_PkArgs = {
  _set?: InputMaybe<MemberResigned_Set_Input>;
  pk_columns: MemberResigned_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_MemberResigned_ManyArgs = {
  updates: Array<MemberResigned_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_MemberRestoredArgs = {
  _set?: InputMaybe<MemberRestored_Set_Input>;
  where: MemberRestored_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_MemberRestored_By_PkArgs = {
  _set?: InputMaybe<MemberRestored_Set_Input>;
  pk_columns: MemberRestored_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_MemberRestored_ManyArgs = {
  updates: Array<MemberRestored_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_MemberStatusActivitiesArgs = {
  _set?: InputMaybe<MemberStatusActivities_Set_Input>;
  where: MemberStatusActivities_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_MemberStatusActivities_By_PkArgs = {
  _set?: InputMaybe<MemberStatusActivities_Set_Input>;
  pk_columns: MemberStatusActivities_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_MemberStatusActivities_ManyArgs = {
  updates: Array<MemberStatusActivities_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_MemberStatusActivityLatestArgs = {
  _set?: InputMaybe<MemberStatusActivityLatest_Set_Input>;
  where: MemberStatusActivityLatest_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_MemberStatusActivityLatest_ManyArgs = {
  updates: Array<MemberStatusActivityLatest_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_MembersArgs = {
  _set?: InputMaybe<Members_Set_Input>;
  where: Members_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Members_By_PkArgs = {
  _set?: InputMaybe<Members_Set_Input>;
  pk_columns: Members_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Members_ManyArgs = {
  updates: Array<Members_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_OperatorsArgs = {
  _set?: InputMaybe<Operators_Set_Input>;
  where: Operators_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Operators_By_PkArgs = {
  _set?: InputMaybe<Operators_Set_Input>;
  pk_columns: Operators_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Operators_ManyArgs = {
  updates: Array<Operators_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** columns and relationships of "operators" */
export type Operators = {
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid']['output'];
};

/** aggregated selection of "operators" */
export type Operators_Aggregate = {
  aggregate?: Maybe<Operators_Aggregate_Fields>;
  nodes: Array<Operators>;
};

export type Operators_Aggregate_Bool_Exp = {
  count?: InputMaybe<Operators_Aggregate_Bool_Exp_Count>;
};

export type Operators_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Operators_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Operators_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "operators" */
export type Operators_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Operators_Max_Fields>;
  min?: Maybe<Operators_Min_Fields>;
};


/** aggregate fields of "operators" */
export type Operators_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Operators_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "operators" */
export type Operators_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Operators_Max_Order_By>;
  min?: InputMaybe<Operators_Min_Order_By>;
};

/** input type for inserting array relation for remote table "operators" */
export type Operators_Arr_Rel_Insert_Input = {
  data: Array<Operators_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Operators_On_Conflict>;
};

/** Boolean expression to filter rows from the table "operators". All fields are combined with a logical 'AND'. */
export type Operators_Bool_Exp = {
  _and?: InputMaybe<Array<Operators_Bool_Exp>>;
  _not?: InputMaybe<Operators_Bool_Exp>;
  _or?: InputMaybe<Array<Operators_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "operators" */
export enum Operators_Constraint {
  /** unique or primary key constraint on columns "id" */
  OperatorsIdKey = 'operators_id_key',
  /** unique or primary key constraint on columns "id" */
  OperatorsPkey = 'operators_pkey'
}

/** input type for inserting data into table "operators" */
export type Operators_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Operators_Max_Fields = {
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "operators" */
export type Operators_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Operators_Min_Fields = {
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "operators" */
export type Operators_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "operators" */
export type Operators_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Operators>;
};

/** on_conflict condition type for table "operators" */
export type Operators_On_Conflict = {
  constraint: Operators_Constraint;
  update_columns?: Array<Operators_Update_Column>;
  where?: InputMaybe<Operators_Bool_Exp>;
};

/** Ordering options when selecting data from "operators". */
export type Operators_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: operators */
export type Operators_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "operators" */
export enum Operators_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "operators" */
export type Operators_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "operators" */
export type Operators_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Operators_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Operators_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "operators" */
export enum Operators_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UserId = 'userId'
}

export type Operators_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Operators_Set_Input>;
  /** filter the rows which have to be updated */
  where: Operators_Bool_Exp;
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
  /** fetch data from the table: "memberActive" */
  memberActive: Array<MemberActive>;
  /** fetch aggregated fields from the table: "memberActive" */
  memberActive_aggregate: MemberActive_Aggregate;
  /** fetch data from the table: "memberActive" using primary key columns */
  memberActive_by_pk?: Maybe<MemberActive>;
  /** fetch data from the table: "memberBanned" */
  memberBanned: Array<MemberBanned>;
  /** fetch aggregated fields from the table: "memberBanned" */
  memberBanned_aggregate: MemberBanned_Aggregate;
  /** fetch data from the table: "memberBanned" using primary key columns */
  memberBanned_by_pk?: Maybe<MemberBanned>;
  /** fetch data from the table: "memberLoginGoogle" */
  memberLoginGoogle: Array<MemberLoginGoogle>;
  /** fetch aggregated fields from the table: "memberLoginGoogle" */
  memberLoginGoogle_aggregate: MemberLoginGoogle_Aggregate;
  /** fetch data from the table: "memberLoginGoogle" using primary key columns */
  memberLoginGoogle_by_pk?: Maybe<MemberLoginGoogle>;
  /** fetch data from the table: "memberPendingActivation" */
  memberPendingActivation: Array<MemberPendingActivation>;
  /** fetch aggregated fields from the table: "memberPendingActivation" */
  memberPendingActivation_aggregate: MemberPendingActivation_Aggregate;
  /** fetch data from the table: "memberPendingActivation" using primary key columns */
  memberPendingActivation_by_pk?: Maybe<MemberPendingActivation>;
  /** fetch data from the table: "memberResigned" */
  memberResigned: Array<MemberResigned>;
  /** fetch aggregated fields from the table: "memberResigned" */
  memberResigned_aggregate: MemberResigned_Aggregate;
  /** fetch data from the table: "memberResigned" using primary key columns */
  memberResigned_by_pk?: Maybe<MemberResigned>;
  /** fetch data from the table: "memberRestored" */
  memberRestored: Array<MemberRestored>;
  /** fetch aggregated fields from the table: "memberRestored" */
  memberRestored_aggregate: MemberRestored_Aggregate;
  /** fetch data from the table: "memberRestored" using primary key columns */
  memberRestored_by_pk?: Maybe<MemberRestored>;
  /** fetch data from the table: "memberStatusActivities" */
  memberStatusActivities: Array<MemberStatusActivities>;
  /** fetch aggregated fields from the table: "memberStatusActivities" */
  memberStatusActivities_aggregate: MemberStatusActivities_Aggregate;
  /** fetch data from the table: "memberStatusActivities" using primary key columns */
  memberStatusActivities_by_pk?: Maybe<MemberStatusActivities>;
  /** fetch data from the table: "memberStatusActivityLatest" */
  memberStatusActivityLatest: Array<MemberStatusActivityLatest>;
  /** fetch aggregated fields from the table: "memberStatusActivityLatest" */
  memberStatusActivityLatest_aggregate: MemberStatusActivityLatest_Aggregate;
  /** An array relationship */
  members: Array<Members>;
  /** An aggregate relationship */
  members_aggregate: Members_Aggregate;
  /** fetch data from the table: "members" using primary key columns */
  members_by_pk?: Maybe<Members>;
  /** An array relationship */
  operators: Array<Operators>;
  /** An aggregate relationship */
  operators_aggregate: Operators_Aggregate;
  /** fetch data from the table: "operators" using primary key columns */
  operators_by_pk?: Maybe<Operators>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootMemberActiveArgs = {
  distinct_on?: InputMaybe<Array<MemberActive_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<MemberActive_Order_By>>;
  where?: InputMaybe<MemberActive_Bool_Exp>;
};


export type Query_RootMemberActive_AggregateArgs = {
  distinct_on?: InputMaybe<Array<MemberActive_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<MemberActive_Order_By>>;
  where?: InputMaybe<MemberActive_Bool_Exp>;
};


export type Query_RootMemberActive_By_PkArgs = {
  statusActivityId: Scalars['uuid']['input'];
};


export type Query_RootMemberBannedArgs = {
  distinct_on?: InputMaybe<Array<MemberBanned_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<MemberBanned_Order_By>>;
  where?: InputMaybe<MemberBanned_Bool_Exp>;
};


export type Query_RootMemberBanned_AggregateArgs = {
  distinct_on?: InputMaybe<Array<MemberBanned_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<MemberBanned_Order_By>>;
  where?: InputMaybe<MemberBanned_Bool_Exp>;
};


export type Query_RootMemberBanned_By_PkArgs = {
  statusActivityId: Scalars['uuid']['input'];
};


export type Query_RootMemberLoginGoogleArgs = {
  distinct_on?: InputMaybe<Array<MemberLoginGoogle_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<MemberLoginGoogle_Order_By>>;
  where?: InputMaybe<MemberLoginGoogle_Bool_Exp>;
};


export type Query_RootMemberLoginGoogle_AggregateArgs = {
  distinct_on?: InputMaybe<Array<MemberLoginGoogle_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<MemberLoginGoogle_Order_By>>;
  where?: InputMaybe<MemberLoginGoogle_Bool_Exp>;
};


export type Query_RootMemberLoginGoogle_By_PkArgs = {
  uid: Scalars['String']['input'];
};


export type Query_RootMemberPendingActivationArgs = {
  distinct_on?: InputMaybe<Array<MemberPendingActivation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<MemberPendingActivation_Order_By>>;
  where?: InputMaybe<MemberPendingActivation_Bool_Exp>;
};


export type Query_RootMemberPendingActivation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<MemberPendingActivation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<MemberPendingActivation_Order_By>>;
  where?: InputMaybe<MemberPendingActivation_Bool_Exp>;
};


export type Query_RootMemberPendingActivation_By_PkArgs = {
  statusActivityId: Scalars['uuid']['input'];
};


export type Query_RootMemberResignedArgs = {
  distinct_on?: InputMaybe<Array<MemberResigned_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<MemberResigned_Order_By>>;
  where?: InputMaybe<MemberResigned_Bool_Exp>;
};


export type Query_RootMemberResigned_AggregateArgs = {
  distinct_on?: InputMaybe<Array<MemberResigned_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<MemberResigned_Order_By>>;
  where?: InputMaybe<MemberResigned_Bool_Exp>;
};


export type Query_RootMemberResigned_By_PkArgs = {
  statusActivityId: Scalars['uuid']['input'];
};


export type Query_RootMemberRestoredArgs = {
  distinct_on?: InputMaybe<Array<MemberRestored_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<MemberRestored_Order_By>>;
  where?: InputMaybe<MemberRestored_Bool_Exp>;
};


export type Query_RootMemberRestored_AggregateArgs = {
  distinct_on?: InputMaybe<Array<MemberRestored_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<MemberRestored_Order_By>>;
  where?: InputMaybe<MemberRestored_Bool_Exp>;
};


export type Query_RootMemberRestored_By_PkArgs = {
  statusActivityId: Scalars['uuid']['input'];
};


export type Query_RootMemberStatusActivitiesArgs = {
  distinct_on?: InputMaybe<Array<MemberStatusActivities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<MemberStatusActivities_Order_By>>;
  where?: InputMaybe<MemberStatusActivities_Bool_Exp>;
};


export type Query_RootMemberStatusActivities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<MemberStatusActivities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<MemberStatusActivities_Order_By>>;
  where?: InputMaybe<MemberStatusActivities_Bool_Exp>;
};


export type Query_RootMemberStatusActivities_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootMemberStatusActivityLatestArgs = {
  distinct_on?: InputMaybe<Array<MemberStatusActivityLatest_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<MemberStatusActivityLatest_Order_By>>;
  where?: InputMaybe<MemberStatusActivityLatest_Bool_Exp>;
};


export type Query_RootMemberStatusActivityLatest_AggregateArgs = {
  distinct_on?: InputMaybe<Array<MemberStatusActivityLatest_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<MemberStatusActivityLatest_Order_By>>;
  where?: InputMaybe<MemberStatusActivityLatest_Bool_Exp>;
};


export type Query_RootMembersArgs = {
  distinct_on?: InputMaybe<Array<Members_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Members_Order_By>>;
  where?: InputMaybe<Members_Bool_Exp>;
};


export type Query_RootMembers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Members_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Members_Order_By>>;
  where?: InputMaybe<Members_Bool_Exp>;
};


export type Query_RootMembers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootOperatorsArgs = {
  distinct_on?: InputMaybe<Array<Operators_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Operators_Order_By>>;
  where?: InputMaybe<Operators_Bool_Exp>;
};


export type Query_RootOperators_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Operators_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Operators_Order_By>>;
  where?: InputMaybe<Operators_Bool_Exp>;
};


export type Query_RootOperators_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

export type Subscription_Root = {
  /** fetch data from the table: "memberActive" */
  memberActive: Array<MemberActive>;
  /** fetch aggregated fields from the table: "memberActive" */
  memberActive_aggregate: MemberActive_Aggregate;
  /** fetch data from the table: "memberActive" using primary key columns */
  memberActive_by_pk?: Maybe<MemberActive>;
  /** fetch data from the table in a streaming manner: "memberActive" */
  memberActive_stream: Array<MemberActive>;
  /** fetch data from the table: "memberBanned" */
  memberBanned: Array<MemberBanned>;
  /** fetch aggregated fields from the table: "memberBanned" */
  memberBanned_aggregate: MemberBanned_Aggregate;
  /** fetch data from the table: "memberBanned" using primary key columns */
  memberBanned_by_pk?: Maybe<MemberBanned>;
  /** fetch data from the table in a streaming manner: "memberBanned" */
  memberBanned_stream: Array<MemberBanned>;
  /** fetch data from the table: "memberLoginGoogle" */
  memberLoginGoogle: Array<MemberLoginGoogle>;
  /** fetch aggregated fields from the table: "memberLoginGoogle" */
  memberLoginGoogle_aggregate: MemberLoginGoogle_Aggregate;
  /** fetch data from the table: "memberLoginGoogle" using primary key columns */
  memberLoginGoogle_by_pk?: Maybe<MemberLoginGoogle>;
  /** fetch data from the table in a streaming manner: "memberLoginGoogle" */
  memberLoginGoogle_stream: Array<MemberLoginGoogle>;
  /** fetch data from the table: "memberPendingActivation" */
  memberPendingActivation: Array<MemberPendingActivation>;
  /** fetch aggregated fields from the table: "memberPendingActivation" */
  memberPendingActivation_aggregate: MemberPendingActivation_Aggregate;
  /** fetch data from the table: "memberPendingActivation" using primary key columns */
  memberPendingActivation_by_pk?: Maybe<MemberPendingActivation>;
  /** fetch data from the table in a streaming manner: "memberPendingActivation" */
  memberPendingActivation_stream: Array<MemberPendingActivation>;
  /** fetch data from the table: "memberResigned" */
  memberResigned: Array<MemberResigned>;
  /** fetch aggregated fields from the table: "memberResigned" */
  memberResigned_aggregate: MemberResigned_Aggregate;
  /** fetch data from the table: "memberResigned" using primary key columns */
  memberResigned_by_pk?: Maybe<MemberResigned>;
  /** fetch data from the table in a streaming manner: "memberResigned" */
  memberResigned_stream: Array<MemberResigned>;
  /** fetch data from the table: "memberRestored" */
  memberRestored: Array<MemberRestored>;
  /** fetch aggregated fields from the table: "memberRestored" */
  memberRestored_aggregate: MemberRestored_Aggregate;
  /** fetch data from the table: "memberRestored" using primary key columns */
  memberRestored_by_pk?: Maybe<MemberRestored>;
  /** fetch data from the table in a streaming manner: "memberRestored" */
  memberRestored_stream: Array<MemberRestored>;
  /** fetch data from the table: "memberStatusActivities" */
  memberStatusActivities: Array<MemberStatusActivities>;
  /** fetch aggregated fields from the table: "memberStatusActivities" */
  memberStatusActivities_aggregate: MemberStatusActivities_Aggregate;
  /** fetch data from the table: "memberStatusActivities" using primary key columns */
  memberStatusActivities_by_pk?: Maybe<MemberStatusActivities>;
  /** fetch data from the table in a streaming manner: "memberStatusActivities" */
  memberStatusActivities_stream: Array<MemberStatusActivities>;
  /** fetch data from the table: "memberStatusActivityLatest" */
  memberStatusActivityLatest: Array<MemberStatusActivityLatest>;
  /** fetch aggregated fields from the table: "memberStatusActivityLatest" */
  memberStatusActivityLatest_aggregate: MemberStatusActivityLatest_Aggregate;
  /** fetch data from the table in a streaming manner: "memberStatusActivityLatest" */
  memberStatusActivityLatest_stream: Array<MemberStatusActivityLatest>;
  /** An array relationship */
  members: Array<Members>;
  /** An aggregate relationship */
  members_aggregate: Members_Aggregate;
  /** fetch data from the table: "members" using primary key columns */
  members_by_pk?: Maybe<Members>;
  /** fetch data from the table in a streaming manner: "members" */
  members_stream: Array<Members>;
  /** An array relationship */
  operators: Array<Operators>;
  /** An aggregate relationship */
  operators_aggregate: Operators_Aggregate;
  /** fetch data from the table: "operators" using primary key columns */
  operators_by_pk?: Maybe<Operators>;
  /** fetch data from the table in a streaming manner: "operators" */
  operators_stream: Array<Operators>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};


export type Subscription_RootMemberActiveArgs = {
  distinct_on?: InputMaybe<Array<MemberActive_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<MemberActive_Order_By>>;
  where?: InputMaybe<MemberActive_Bool_Exp>;
};


export type Subscription_RootMemberActive_AggregateArgs = {
  distinct_on?: InputMaybe<Array<MemberActive_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<MemberActive_Order_By>>;
  where?: InputMaybe<MemberActive_Bool_Exp>;
};


export type Subscription_RootMemberActive_By_PkArgs = {
  statusActivityId: Scalars['uuid']['input'];
};


export type Subscription_RootMemberActive_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<MemberActive_Stream_Cursor_Input>>;
  where?: InputMaybe<MemberActive_Bool_Exp>;
};


export type Subscription_RootMemberBannedArgs = {
  distinct_on?: InputMaybe<Array<MemberBanned_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<MemberBanned_Order_By>>;
  where?: InputMaybe<MemberBanned_Bool_Exp>;
};


export type Subscription_RootMemberBanned_AggregateArgs = {
  distinct_on?: InputMaybe<Array<MemberBanned_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<MemberBanned_Order_By>>;
  where?: InputMaybe<MemberBanned_Bool_Exp>;
};


export type Subscription_RootMemberBanned_By_PkArgs = {
  statusActivityId: Scalars['uuid']['input'];
};


export type Subscription_RootMemberBanned_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<MemberBanned_Stream_Cursor_Input>>;
  where?: InputMaybe<MemberBanned_Bool_Exp>;
};


export type Subscription_RootMemberLoginGoogleArgs = {
  distinct_on?: InputMaybe<Array<MemberLoginGoogle_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<MemberLoginGoogle_Order_By>>;
  where?: InputMaybe<MemberLoginGoogle_Bool_Exp>;
};


export type Subscription_RootMemberLoginGoogle_AggregateArgs = {
  distinct_on?: InputMaybe<Array<MemberLoginGoogle_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<MemberLoginGoogle_Order_By>>;
  where?: InputMaybe<MemberLoginGoogle_Bool_Exp>;
};


export type Subscription_RootMemberLoginGoogle_By_PkArgs = {
  uid: Scalars['String']['input'];
};


export type Subscription_RootMemberLoginGoogle_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<MemberLoginGoogle_Stream_Cursor_Input>>;
  where?: InputMaybe<MemberLoginGoogle_Bool_Exp>;
};


export type Subscription_RootMemberPendingActivationArgs = {
  distinct_on?: InputMaybe<Array<MemberPendingActivation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<MemberPendingActivation_Order_By>>;
  where?: InputMaybe<MemberPendingActivation_Bool_Exp>;
};


export type Subscription_RootMemberPendingActivation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<MemberPendingActivation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<MemberPendingActivation_Order_By>>;
  where?: InputMaybe<MemberPendingActivation_Bool_Exp>;
};


export type Subscription_RootMemberPendingActivation_By_PkArgs = {
  statusActivityId: Scalars['uuid']['input'];
};


export type Subscription_RootMemberPendingActivation_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<MemberPendingActivation_Stream_Cursor_Input>>;
  where?: InputMaybe<MemberPendingActivation_Bool_Exp>;
};


export type Subscription_RootMemberResignedArgs = {
  distinct_on?: InputMaybe<Array<MemberResigned_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<MemberResigned_Order_By>>;
  where?: InputMaybe<MemberResigned_Bool_Exp>;
};


export type Subscription_RootMemberResigned_AggregateArgs = {
  distinct_on?: InputMaybe<Array<MemberResigned_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<MemberResigned_Order_By>>;
  where?: InputMaybe<MemberResigned_Bool_Exp>;
};


export type Subscription_RootMemberResigned_By_PkArgs = {
  statusActivityId: Scalars['uuid']['input'];
};


export type Subscription_RootMemberResigned_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<MemberResigned_Stream_Cursor_Input>>;
  where?: InputMaybe<MemberResigned_Bool_Exp>;
};


export type Subscription_RootMemberRestoredArgs = {
  distinct_on?: InputMaybe<Array<MemberRestored_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<MemberRestored_Order_By>>;
  where?: InputMaybe<MemberRestored_Bool_Exp>;
};


export type Subscription_RootMemberRestored_AggregateArgs = {
  distinct_on?: InputMaybe<Array<MemberRestored_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<MemberRestored_Order_By>>;
  where?: InputMaybe<MemberRestored_Bool_Exp>;
};


export type Subscription_RootMemberRestored_By_PkArgs = {
  statusActivityId: Scalars['uuid']['input'];
};


export type Subscription_RootMemberRestored_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<MemberRestored_Stream_Cursor_Input>>;
  where?: InputMaybe<MemberRestored_Bool_Exp>;
};


export type Subscription_RootMemberStatusActivitiesArgs = {
  distinct_on?: InputMaybe<Array<MemberStatusActivities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<MemberStatusActivities_Order_By>>;
  where?: InputMaybe<MemberStatusActivities_Bool_Exp>;
};


export type Subscription_RootMemberStatusActivities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<MemberStatusActivities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<MemberStatusActivities_Order_By>>;
  where?: InputMaybe<MemberStatusActivities_Bool_Exp>;
};


export type Subscription_RootMemberStatusActivities_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootMemberStatusActivities_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<MemberStatusActivities_Stream_Cursor_Input>>;
  where?: InputMaybe<MemberStatusActivities_Bool_Exp>;
};


export type Subscription_RootMemberStatusActivityLatestArgs = {
  distinct_on?: InputMaybe<Array<MemberStatusActivityLatest_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<MemberStatusActivityLatest_Order_By>>;
  where?: InputMaybe<MemberStatusActivityLatest_Bool_Exp>;
};


export type Subscription_RootMemberStatusActivityLatest_AggregateArgs = {
  distinct_on?: InputMaybe<Array<MemberStatusActivityLatest_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<MemberStatusActivityLatest_Order_By>>;
  where?: InputMaybe<MemberStatusActivityLatest_Bool_Exp>;
};


export type Subscription_RootMemberStatusActivityLatest_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<MemberStatusActivityLatest_Stream_Cursor_Input>>;
  where?: InputMaybe<MemberStatusActivityLatest_Bool_Exp>;
};


export type Subscription_RootMembersArgs = {
  distinct_on?: InputMaybe<Array<Members_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Members_Order_By>>;
  where?: InputMaybe<Members_Bool_Exp>;
};


export type Subscription_RootMembers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Members_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Members_Order_By>>;
  where?: InputMaybe<Members_Bool_Exp>;
};


export type Subscription_RootMembers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootMembers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Members_Stream_Cursor_Input>>;
  where?: InputMaybe<Members_Bool_Exp>;
};


export type Subscription_RootOperatorsArgs = {
  distinct_on?: InputMaybe<Array<Operators_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Operators_Order_By>>;
  where?: InputMaybe<Operators_Bool_Exp>;
};


export type Subscription_RootOperators_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Operators_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Operators_Order_By>>;
  where?: InputMaybe<Operators_Bool_Exp>;
};


export type Subscription_RootOperators_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOperators_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Operators_Stream_Cursor_Input>>;
  where?: InputMaybe<Operators_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
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

/** columns and relationships of "users" */
export type Users = {
  id: Scalars['uuid']['output'];
  /** An object relationship */
  member?: Maybe<Members>;
  /** An array relationship */
  members: Array<Members>;
  /** An aggregate relationship */
  members_aggregate: Members_Aggregate;
  /** An array relationship */
  operators: Array<Operators>;
  /** An aggregate relationship */
  operators_aggregate: Operators_Aggregate;
};


/** columns and relationships of "users" */
export type UsersMembersArgs = {
  distinct_on?: InputMaybe<Array<Members_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Members_Order_By>>;
  where?: InputMaybe<Members_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersMembers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Members_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Members_Order_By>>;
  where?: InputMaybe<Members_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersOperatorsArgs = {
  distinct_on?: InputMaybe<Array<Operators_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Operators_Order_By>>;
  where?: InputMaybe<Operators_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersOperators_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Operators_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Operators_Order_By>>;
  where?: InputMaybe<Operators_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  member?: InputMaybe<Members_Bool_Exp>;
  members?: InputMaybe<Members_Bool_Exp>;
  members_aggregate?: InputMaybe<Members_Aggregate_Bool_Exp>;
  operators?: InputMaybe<Operators_Bool_Exp>;
  operators_aggregate?: InputMaybe<Operators_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  member?: InputMaybe<Members_Obj_Rel_Insert_Input>;
  members?: InputMaybe<Members_Arr_Rel_Insert_Input>;
  operators?: InputMaybe<Operators_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  id?: InputMaybe<Order_By>;
  member?: InputMaybe<Members_Order_By>;
  members_aggregate?: InputMaybe<Members_Aggregate_Order_By>;
  operators_aggregate?: InputMaybe<Operators_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Id = 'id'
}

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type ResignMemberMutationVariables = Exact<{
  activityInput: MemberStatusActivities_Insert_Input;
}>;


export type ResignMemberMutation = { insert_memberStatusActivities_one?: Maybe<(
    Pick<MemberStatusActivities, 'memberId' | 'status'>
    & { memberResigned?: Maybe<Pick<MemberResigned, 'reasonType' | 'memberId' | 'reasonDetail' | 'agreement'>> }
  )> };

export type GetActiveMemberQueryVariables = Exact<{
  memberId: Scalars['uuid']['input'];
}>;


export type GetActiveMemberQuery = { memberStatusActivityLatest: Array<(
    Pick<MemberStatusActivityLatest, 'id' | 'createdAt'>
    & { memberActive?: Maybe<Pick<MemberActive, 'address' | 'birthday' | 'createdAt' | 'email' | 'memberId' | 'postalCode' | 'statusActivityId'>> }
  )> };

export type GetAllMembersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllMembersQuery = { memberStatusActivityLatest: Array<(
    Pick<MemberStatusActivityLatest, 'status' | 'createdAt' | 'id' | 'memberId'>
    & { memberActive?: Maybe<Pick<MemberActive, 'statusActivityId' | 'postalCode' | 'memberId' | 'email' | 'createdAt' | 'birthday' | 'address'>>, memberBanned?: Maybe<Pick<MemberBanned, 'createdAt' | 'memberId' | 'operatedBy' | 'reason' | 'statusActivityId'>>, memberPendingActivation?: Maybe<Pick<MemberPendingActivation, 'createdAt' | 'email' | 'memberId' | 'statusActivityId'>>, memberResigned?: Maybe<Pick<MemberResigned, 'agreement' | 'createdAt' | 'memberId' | 'reasonDetail' | 'reasonType' | 'statusActivityId'>>, memberRestored?: Maybe<Pick<MemberRestored, 'createdAt' | 'memberId' | 'operatedBy' | 'reason' | 'statusActivityId'>> }
  )> };

export type GetMembersByStatusQueryVariables = Exact<{
  status: Scalars['String']['input'];
}>;


export type GetMembersByStatusQuery = { memberStatusActivityLatest: Array<(
    Pick<MemberStatusActivityLatest, 'status' | 'createdAt' | 'id' | 'memberId'>
    & { memberActive?: Maybe<Pick<MemberActive, 'statusActivityId' | 'postalCode' | 'memberId' | 'email' | 'createdAt' | 'birthday' | 'address'>>, memberBanned?: Maybe<Pick<MemberBanned, 'createdAt' | 'memberId' | 'operatedBy' | 'reason' | 'statusActivityId'>>, memberPendingActivation?: Maybe<Pick<MemberPendingActivation, 'createdAt' | 'email' | 'memberId' | 'statusActivityId'>>, memberResigned?: Maybe<Pick<MemberResigned, 'agreement' | 'createdAt' | 'memberId' | 'reasonDetail' | 'reasonType' | 'statusActivityId'>>, memberRestored?: Maybe<Pick<MemberRestored, 'createdAt' | 'memberId' | 'operatedBy' | 'reason' | 'statusActivityId'>> }
  )> };


export const ResignMemberDocument = gql`
    mutation ResignMember($activityInput: memberStatusActivities_insert_input!) {
  insert_memberStatusActivities_one(object: $activityInput) {
    memberId
    status
    memberResigned {
      reasonType
      memberId
      reasonDetail
      agreement
    }
  }
}
    `;
export type ResignMemberMutationFn = Apollo.MutationFunction<ResignMemberMutation, ResignMemberMutationVariables>;

/**
 * __useResignMemberMutation__
 *
 * To run a mutation, you first call `useResignMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResignMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resignMemberMutation, { data, loading, error }] = useResignMemberMutation({
 *   variables: {
 *      activityInput: // value for 'activityInput'
 *   },
 * });
 */
export function useResignMemberMutation(baseOptions?: Apollo.MutationHookOptions<ResignMemberMutation, ResignMemberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResignMemberMutation, ResignMemberMutationVariables>(ResignMemberDocument, options);
      }
export type ResignMemberMutationHookResult = ReturnType<typeof useResignMemberMutation>;
export type ResignMemberMutationResult = Apollo.MutationResult<ResignMemberMutation>;
export type ResignMemberMutationOptions = Apollo.BaseMutationOptions<ResignMemberMutation, ResignMemberMutationVariables>;
export const GetActiveMemberDocument = gql`
    query GetActiveMember($memberId: uuid!) {
  memberStatusActivityLatest(where: {memberId: {_eq: $memberId}}) {
    id
    createdAt
    memberActive {
      address
      birthday
      createdAt
      email
      memberId
      postalCode
      statusActivityId
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
 *      memberId: // value for 'memberId'
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
export const GetAllMembersDocument = gql`
    query GetAllMembers {
  memberStatusActivityLatest {
    status
    createdAt
    id
    memberId
    memberActive {
      statusActivityId
      postalCode
      memberId
      email
      createdAt
      birthday
      address
    }
    memberBanned {
      createdAt
      memberId
      operatedBy
      reason
      statusActivityId
    }
    memberPendingActivation {
      createdAt
      email
      memberId
      statusActivityId
    }
    memberResigned {
      agreement
      createdAt
      memberId
      reasonDetail
      reasonType
      statusActivityId
    }
    memberRestored {
      createdAt
      memberId
      operatedBy
      reason
      statusActivityId
    }
  }
}
    `;

/**
 * __useGetAllMembersQuery__
 *
 * To run a query within a React component, call `useGetAllMembersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllMembersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllMembersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllMembersQuery(baseOptions?: Apollo.QueryHookOptions<GetAllMembersQuery, GetAllMembersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllMembersQuery, GetAllMembersQueryVariables>(GetAllMembersDocument, options);
      }
export function useGetAllMembersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllMembersQuery, GetAllMembersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllMembersQuery, GetAllMembersQueryVariables>(GetAllMembersDocument, options);
        }
export function useGetAllMembersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllMembersQuery, GetAllMembersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllMembersQuery, GetAllMembersQueryVariables>(GetAllMembersDocument, options);
        }
export type GetAllMembersQueryHookResult = ReturnType<typeof useGetAllMembersQuery>;
export type GetAllMembersLazyQueryHookResult = ReturnType<typeof useGetAllMembersLazyQuery>;
export type GetAllMembersSuspenseQueryHookResult = ReturnType<typeof useGetAllMembersSuspenseQuery>;
export type GetAllMembersQueryResult = Apollo.QueryResult<GetAllMembersQuery, GetAllMembersQueryVariables>;
export const GetMembersByStatusDocument = gql`
    query GetMembersByStatus($status: String!) {
  memberStatusActivityLatest(where: {status: {_eq: $status}}) {
    status
    createdAt
    id
    memberId
    memberActive {
      statusActivityId
      postalCode
      memberId
      email
      createdAt
      birthday
      address
    }
    memberBanned {
      createdAt
      memberId
      operatedBy
      reason
      statusActivityId
    }
    memberPendingActivation {
      createdAt
      email
      memberId
      statusActivityId
    }
    memberResigned {
      agreement
      createdAt
      memberId
      reasonDetail
      reasonType
      statusActivityId
    }
    memberRestored {
      createdAt
      memberId
      operatedBy
      reason
      statusActivityId
    }
  }
}
    `;

/**
 * __useGetMembersByStatusQuery__
 *
 * To run a query within a React component, call `useGetMembersByStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMembersByStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMembersByStatusQuery({
 *   variables: {
 *      status: // value for 'status'
 *   },
 * });
 */
export function useGetMembersByStatusQuery(baseOptions: Apollo.QueryHookOptions<GetMembersByStatusQuery, GetMembersByStatusQueryVariables> & ({ variables: GetMembersByStatusQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMembersByStatusQuery, GetMembersByStatusQueryVariables>(GetMembersByStatusDocument, options);
      }
export function useGetMembersByStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMembersByStatusQuery, GetMembersByStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMembersByStatusQuery, GetMembersByStatusQueryVariables>(GetMembersByStatusDocument, options);
        }
export function useGetMembersByStatusSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMembersByStatusQuery, GetMembersByStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMembersByStatusQuery, GetMembersByStatusQueryVariables>(GetMembersByStatusDocument, options);
        }
export type GetMembersByStatusQueryHookResult = ReturnType<typeof useGetMembersByStatusQuery>;
export type GetMembersByStatusLazyQueryHookResult = ReturnType<typeof useGetMembersByStatusLazyQuery>;
export type GetMembersByStatusSuspenseQueryHookResult = ReturnType<typeof useGetMembersByStatusSuspenseQuery>;
export type GetMembersByStatusQueryResult = Apollo.QueryResult<GetMembersByStatusQuery, GetMembersByStatusQueryVariables>;