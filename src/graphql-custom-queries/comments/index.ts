import { 
    CreateCommentMutation,
    CreateCommentMutationVariables,
    UpdateCommentMutation,
    UpdateCommentMutationVariables,
    DeleteCommentMutation,
    DeleteCommentMutationVariables,
    ListCommentsQuery,
    ListCommentsQueryVariables,

 } from "../../API";

import { CustomQuery } from "../customQueryType";

export type ShortFormCommentQuery = {
    listComments: {
        items: {
            id: string;
            text: string;
            like: number;
            postID: string;
            createdAt: string;
            updatedAt: string;
        }[]
    }
}

export const listComments = /* GraphQL */ `query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
        items {
            id
            text
            like
            postID
            createdAt
            updatedAt
        }
        nextToken
    }
}` as CustomQuery<ListCommentsQueryVariables, ListCommentsQuery>

export const createComments = /* GraphQL */ `mutation CreateComments(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
) {
    createComments(input: $input, condition: $condition) {
        id
    }
}` as CustomQuery<CreateCommentMutationVariables, CreateCommentMutation>

export const updateComments = /* GraphQL */ `mutation UpdateComments(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
) {
    updateComments(input: $input, condition: $condition) {
        id
    }
}` as CustomQuery<UpdateCommentMutationVariables, UpdateCommentMutation>

export const deleteComments = /* GraphQL */ `mutation DeleteComments(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
) {
    deleteComments(input: $input, condition: $condition) {
        id
    }
}` as CustomQuery<DeleteCommentMutationVariables, DeleteCommentMutation> 