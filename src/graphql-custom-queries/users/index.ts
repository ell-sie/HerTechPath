import { ListUsersQuery, ListUsersQueryVariables } from '../../API'
import { CustomQuery } from '../customQueryType'

export const listUsers = /* GraphQL */ `query ListUsers(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        role
        createdAt
        }
      nextToken
      __typename
    }
  }
  ` as CustomQuery<ListUsersQueryVariables, ListUsersQuery>
