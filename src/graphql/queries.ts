/* tslint:disable */
/* eslint-disable */
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
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    posts {
      nextToken
      __typename
    }
    level
    name
    email
    technicalskills
    softskills
    shorttermgoals
    longtermgoals
    hrsperweek
    interests
    feedback
    challenges
    motivation
    Comments {
      nextToken
      __typename
    }
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
      technicalskills
      softskills
      shorttermgoals
      longtermgoals
      hrsperweek
      interests
      feedback
      challenges
      motivation
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
    title
    User {
      id
      level
      name
      email
      technicalskills
      softskills
      shorttermgoals
      longtermgoals
      hrsperweek
      interests
      feedback
      challenges
      motivation
      createdAt
      updatedAt
      __typename
    }
    resourcesID
    createdAt
    updatedAt
    pathUserId
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
      title
      resourcesID
      createdAt
      updatedAt
      pathUserId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListPathsQueryVariables, APITypes.ListPathsQuery>;
export const pathsByResourcesID = /* GraphQL */ `query PathsByResourcesID(
  $resourcesID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelPathFilterInput
  $limit: Int
  $nextToken: String
) {
  pathsByResourcesID(
    resourcesID: $resourcesID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      resourcesID
      createdAt
      updatedAt
      pathUserId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PathsByResourcesIDQueryVariables,
  APITypes.PathsByResourcesIDQuery
>;
export const getComment = /* GraphQL */ `query GetComment($id: ID!) {
  getComment(id: $id) {
    id
    postID
    description
    userID
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
      userID
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
      userID
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
export const commentsByUserID = /* GraphQL */ `query CommentsByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  commentsByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      postID
      description
      userID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CommentsByUserIDQueryVariables,
  APITypes.CommentsByUserIDQuery
>;
export const getResources = /* GraphQL */ `query GetResources($id: ID!) {
  getResources(id: $id) {
    id
    title
    description
    link
    Paths {
      nextToken
      __typename
    }
    author
    hours
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
      author
      hours
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
      technicalskills
      softskills
      shorttermgoals
      longtermgoals
      hrsperweek
      interests
      feedback
      challenges
      motivation
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
