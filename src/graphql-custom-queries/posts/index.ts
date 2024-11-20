import { 
    CreatePostMutation,
    CreatePostMutationVariables,
    UpdatePostMutation,
    UpdatePostMutationVariables,
    DeletePostMutation,
    DeletePostMutationVariables,
    ListPostsQuery,
    ListPostsQueryVariables,

 } from "../../API";

import { CustomQuery } from "../customQueryType";

export type ShortFormPostQuery = {
    listPosts: {
        items: {
            id: string;
            title: string;
            bloID: string;
            description: string;
            pathID: string;
            createdAt: string;
            updatedAt: string;
        }[]
    }
}

export const listPosts = /* GraphQL */ `query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
        items {
            id
            title
            bloID
            description
            pathID
            createdAt
            updatedAt
        }
        nextToken
    }
}` as CustomQuery<ListPostsQueryVariables, ListPostsQuery>

export const createPosts = /* GraphQL */ `mutation CreatePosts(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
) {
    createPosts(input: $input, condition: $condition) {
        id
    }
}` as CustomQuery<CreatePostMutationVariables, CreatePostMutation>

export const updatePosts = /* GraphQL */ `mutation UpdatePosts(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
) {
    updatePosts(input: $input, condition: $condition) {
        id
    }
}` as CustomQuery<UpdatePostMutationVariables, UpdatePostMutation>

export const deletePosts = /* GraphQL */ `mutation DeletePosts(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
) {
    deletePosts(input: $input, condition: $condition) {
        id
    }
}` as CustomQuery<DeletePostMutationVariables, DeletePostMutation>