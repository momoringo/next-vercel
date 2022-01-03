import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Mutation = {
  __typename?: 'Mutation';
  newTest: Test;
};


export type MutationNewTestArgs = {
  input?: InputMaybe<TestInput>;
};

export type Query = {
  __typename?: 'Query';
  activeUserId: Scalars['Int'];
  getProducts?: Maybe<Array<Maybe<Test>>>;
  test?: Maybe<Test>;
};


export type QueryTestArgs = {
  id: Scalars['Int'];
};

export type Test = {
  __typename?: 'Test';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type TestInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type GetProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductsQuery = { __typename?: 'Query', activeUserId: number, getProducts?: Array<{ __typename?: 'Test', id?: string | null | undefined, name?: string | null | undefined } | null | undefined> | null | undefined };

export type NewTestMutationVariables = Exact<{
  input: TestInput;
}>;


export type NewTestMutation = { __typename?: 'Mutation', newTest: { __typename?: 'Test', id?: string | null | undefined } };


export const GetProductsDocument = gql`
    query GetProducts {
  activeUserId @client
  getProducts {
    id
    name
  }
}
    `;

/**
 * __useGetProductsQuery__
 *
 * To run a query within a React component, call `useGetProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProductsQuery(baseOptions?: Apollo.QueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
      }
export function useGetProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
        }
export type GetProductsQueryHookResult = ReturnType<typeof useGetProductsQuery>;
export type GetProductsLazyQueryHookResult = ReturnType<typeof useGetProductsLazyQuery>;
export type GetProductsQueryResult = Apollo.QueryResult<GetProductsQuery, GetProductsQueryVariables>;
export const NewTestDocument = gql`
    mutation NewTest($input: TestInput!) {
  newTest(input: $input) {
    id
  }
}
    `;
export type NewTestMutationFn = Apollo.MutationFunction<NewTestMutation, NewTestMutationVariables>;

/**
 * __useNewTestMutation__
 *
 * To run a mutation, you first call `useNewTestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useNewTestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [newTestMutation, { data, loading, error }] = useNewTestMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useNewTestMutation(baseOptions?: Apollo.MutationHookOptions<NewTestMutation, NewTestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<NewTestMutation, NewTestMutationVariables>(NewTestDocument, options);
      }
export type NewTestMutationHookResult = ReturnType<typeof useNewTestMutation>;
export type NewTestMutationResult = Apollo.MutationResult<NewTestMutation>;
export type NewTestMutationOptions = Apollo.BaseMutationOptions<NewTestMutation, NewTestMutationVariables>;