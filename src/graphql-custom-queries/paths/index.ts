import { 
    CreatePathMutation,
    CreatePathMutationVariables,
    UpdatePathMutation,
    UpdatePathMutationVariables,
    DeletePathMutation,
    DeletePathMutationVariables,
    ListPathsQuery,
    ListPathsQueryVariables,

 } from "../../API";

import { CustomQuery } from "../customQueryType";

export type ShortFormPathQuery = {
    listPaths: {
        items: {
            id: string;
            status: string;
            userID: string;
            name: string;
            createdAt: string;
            updatedAt: string;
        }[]
    }
}

export const listPaths = /* GraphQL */ `query ListPaths(
    $filter: ModelPathFilterInput
    $limit: Int
    $nextToken: String
) {
    listPaths(filter: $filter, limit: $limit, nextToken: $nextToken) {
        items {
            id
            status
            userID
            name
            createdAt
            updatedAt
        }
        nextToken
    }
}` as CustomQuery<ListPathsQueryVariables, ListPathsQuery>

export const createPaths = /* GraphQL */ `mutation CreatePaths(
    $input: CreatePathInput!
    $condition: ModelPathConditionInput
) {
    createPaths(input: $input, condition: $condition) {
        id
    }
}` as CustomQuery<CreatePathMutationVariables, CreatePathMutation>

export const updatePaths = /* GraphQL */ `mutation UpdatePaths(
    $input: UpdatePathInput!
    $condition: ModelPathConditionInput
) {
    updatePaths(input: $input, condition: $condition) {
        id
    }
}` as CustomQuery<UpdatePathMutationVariables, UpdatePathMutation>

export const deletePaths = /* GraphQL */ `mutation DeletePaths(
    $input: DeletePathInput!
    $condition: ModelPathConditionInput
) {
    deletePaths(input: $input, condition: $condition) {
        id
    }
}` as CustomQuery<DeletePathMutationVariables, DeletePathMutation>