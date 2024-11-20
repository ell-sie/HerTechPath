import { CreateResourcesMutation, CreateResourcesMutationVariables, DeleteResourcesMutation, DeleteResourcesMutationVariables, ListResourcesQuery, ListResourcesQueryVariables, UpdateResourcesMutation, UpdateResourcesMutationVariables } from "../../API";

import { CustomQuery } from "../customQueryType";

export type ShortFormResoucesQuery = {
    listResources: {
        items: {
            id: string;
            name: string;
            description: string;
        }[]
    }
}


export const listResources = /* GraphQL */ `query ListResources (
    $filter: ModelResourcesFilterInput
    $limit: Int
    $nextToken: String
    ) {
    listResources(filter: $filter, limit: $limit, nextToken: $nextToken) {
        items {
            id
            name
            description
        }
        nextToken
    }
}` as CustomQuery<ListResourcesQueryVariables, ListResourcesQuery>

export const updateResources = /* GraphQL */ `mutation UpdateResources(
$input: UpdateResourcesInput!
$condition: ModelResourcesConditionInput
) {
    updateResources(input: $input, condition: $condition) {
        id
    }
}` as CustomQuery<UpdateResourcesMutationVariables, UpdateResourcesMutation>

export const createResources = /* GraphQL */ `mutation CreateResources(
$input: CreateResourcesInput!
$condition: ModelResourcesConditionInput
) {
    createResources(input: $input, condition: $condition) {
        id
    }
}` as CustomQuery<CreateResourcesMutationVariables, CreateResourcesMutation>

export const deleteResources = /* GraphQL */ `mutation DeleteResources(
$input: DeleteResourcesInput!
$condition: ModelResourcesConditionInput
) {
    deleteResources(input: $input, condition: $condition) {
        id
    }
}` as CustomQuery<DeleteResourcesMutationVariables, DeleteResourcesMutation>
