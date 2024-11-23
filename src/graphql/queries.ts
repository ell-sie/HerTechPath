/* tslint:disable */
 
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getPost = /* GraphQL */ `query GetPost($id: ID!) {
  getPost(id: $id) {
    id
    Comments {
      nextToken
      __typename
    }
    User {
      nextToken
      __typename
    }
    title
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetPostQueryVariables, APITypes.GetPostQuery>;
export const listPosts = /* GraphQL */ `query ListPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListPostsQueryVariables, APITypes.ListPostsQuery>;
export const getUserPath = /* GraphQL */ `query GetUserPath($id: ID!) {
  getUserPath(id: $id) {
    id
    Users {
      nextToken
      __typename
    }
    Paths {
      nextToken
      __typename
    }
    progress
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserPathQueryVariables,
  APITypes.GetUserPathQuery
>;
export const listUserPaths = /* GraphQL */ `query ListUserPaths(
  $filter: ModelUserPathFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserPaths(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      progress
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserPathsQueryVariables,
  APITypes.ListUserPathsQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    userpaths {
      nextToken
      __typename
    }
    posts {
      nextToken
      __typename
    }
    level
    name
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      level
      name
      email
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getPath = /* GraphQL */ `query GetPath($id: ID!) {
  getPath(id: $id) {
    id
    userpathID
    Resources {
      nextToken
      __typename
    }
    level
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetPathQueryVariables, APITypes.GetPathQuery>;
export const listPaths = /* GraphQL */ `query ListPaths(
  $filter: ModelPathFilterInput
  $limit: Int
  $nextToken: String
) {
  listPaths(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userpathID
      level
      Resources {
        items {
          id
          title
          description
          link
        }
        nextToken
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListPathsQueryVariables, APITypes.ListPathsQuery>;
export const getComment = /* GraphQL */ `query GetComment($id: ID!) {
  getComment(id: $id) {
    id
    postID
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCommentQueryVariables,
  APITypes.GetCommentQuery
>;
export const listComments = /* GraphQL */ `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      postID
      description
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCommentsQueryVariables,
  APITypes.ListCommentsQuery
>;
export const getResources = /* GraphQL */ `query GetResources($id: ID!) {
  getResources(id: $id) {
    id
    title
    description
    link
    pathID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetResourcesQueryVariables,
  APITypes.GetResourcesQuery
>;
export const listResources = /* GraphQL */ `query ListResources(
  $filter: ModelResourcesFilterInput
  $limit: Int
  $nextToken: String
) {
  listResources(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      link
      pathID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListResourcesQueryVariables,
  APITypes.ListResourcesQuery
>;
export const getPostUser = /* GraphQL */ `query GetPostUser($id: ID!) {
  getPostUser(id: $id) {
    id
    postId
    userId
    post {
      id
      title
      description
      createdAt
      updatedAt
      __typename
    }
    user {
      id
      level
      name
      email
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPostUserQueryVariables,
  APITypes.GetPostUserQuery
>;
export const listPostUsers = /* GraphQL */ `query ListPostUsers(
  $filter: ModelPostUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listPostUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      postId
      userId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPostUsersQueryVariables,
  APITypes.ListPostUsersQuery
>;
export const getUserPathUser = /* GraphQL */ `query GetUserPathUser($id: ID!) {
  getUserPathUser(id: $id) {
    id
    userPathId
    userId
    userPath {
      id
      progress
      createdAt
      updatedAt
      __typename
    }
    user {
      id
      level
      name
      email
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserPathUserQueryVariables,
  APITypes.GetUserPathUserQuery
>;
export const listUserPathUsers = /* GraphQL */ `query ListUserPathUsers(
  $filter: ModelUserPathUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserPathUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userPathId
      userId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserPathUsersQueryVariables,
  APITypes.ListUserPathUsersQuery
>;
export const pathsByUserpathID = /* GraphQL */ `query PathsByUserpathID(
  $userpathID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelPathFilterInput
  $limit: Int
  $nextToken: String
) {
  pathsByUserpathID(
    userpathID: $userpathID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userpathID
      level
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PathsByUserpathIDQueryVariables,
  APITypes.PathsByUserpathIDQuery
>;
export const commentsByPostID = /* GraphQL */ `query CommentsByPostID(
  $postID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  commentsByPostID(
    postID: $postID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      postID
      description
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CommentsByPostIDQueryVariables,
  APITypes.CommentsByPostIDQuery
>;
export const resourcesByPathID = /* GraphQL */ `query ResourcesByPathID(
  $pathID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelResourcesFilterInput
  $limit: Int
  $nextToken: String
) {
  resourcesByPathID(
    pathID: $pathID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      description
      link
      pathID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ResourcesByPathIDQueryVariables,
  APITypes.ResourcesByPathIDQuery
>;
export const postUsersByPostId = /* GraphQL */ `query PostUsersByPostId(
  $postId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelPostUserFilterInput
  $limit: Int
  $nextToken: String
) {
  postUsersByPostId(
    postId: $postId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      postId
      userId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PostUsersByPostIdQueryVariables,
  APITypes.PostUsersByPostIdQuery
>;
export const postUsersByUserId = /* GraphQL */ `query PostUsersByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelPostUserFilterInput
  $limit: Int
  $nextToken: String
) {
  postUsersByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      postId
      userId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PostUsersByUserIdQueryVariables,
  APITypes.PostUsersByUserIdQuery
>;
export const userPathUsersByUserPathId = /* GraphQL */ `query UserPathUsersByUserPathId(
  $userPathId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelUserPathUserFilterInput
  $limit: Int
  $nextToken: String
) {
  userPathUsersByUserPathId(
    userPathId: $userPathId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userPathId
      userId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UserPathUsersByUserPathIdQueryVariables,
  APITypes.UserPathUsersByUserPathIdQuery
>;
export const userPathUsersByUserId = /* GraphQL */ `query UserPathUsersByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelUserPathUserFilterInput
  $limit: Int
  $nextToken: String
) {
  userPathUsersByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userPathId
      userId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UserPathUsersByUserIdQueryVariables,
  APITypes.UserPathUsersByUserIdQuery
>;
