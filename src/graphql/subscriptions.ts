/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateComment = /* GraphQL */ `subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
  onCreateComment(filter: $filter) {
    id
    text
    like
    postID
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCommentSubscriptionVariables,
  APITypes.OnCreateCommentSubscription
>;
export const onUpdateComment = /* GraphQL */ `subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
  onUpdateComment(filter: $filter) {
    id
    text
    like
    postID
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCommentSubscriptionVariables,
  APITypes.OnUpdateCommentSubscription
>;
export const onDeleteComment = /* GraphQL */ `subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
  onDeleteComment(filter: $filter) {
    id
    text
    like
    postID
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCommentSubscriptionVariables,
  APITypes.OnDeleteCommentSubscription
>;
export const onCreatePath = /* GraphQL */ `subscription OnCreatePath($filter: ModelSubscriptionPathFilterInput) {
  onCreatePath(filter: $filter) {
    id
    status
    userID
    Posts {
      nextToken
      __typename
    }
    name
    Resources {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePathSubscriptionVariables,
  APITypes.OnCreatePathSubscription
>;
export const onUpdatePath = /* GraphQL */ `subscription OnUpdatePath($filter: ModelSubscriptionPathFilterInput) {
  onUpdatePath(filter: $filter) {
    id
    status
    userID
    Posts {
      nextToken
      __typename
    }
    name
    Resources {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePathSubscriptionVariables,
  APITypes.OnUpdatePathSubscription
>;
export const onDeletePath = /* GraphQL */ `subscription OnDeletePath($filter: ModelSubscriptionPathFilterInput) {
  onDeletePath(filter: $filter) {
    id
    status
    userID
    Posts {
      nextToken
      __typename
    }
    name
    Resources {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePathSubscriptionVariables,
  APITypes.OnDeletePathSubscription
>;
export const onCreateResources = /* GraphQL */ `subscription OnCreateResources($filter: ModelSubscriptionResourcesFilterInput) {
  onCreateResources(filter: $filter) {
    id
    title
    description
    link
    level
    pathID
    logo
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateResourcesSubscriptionVariables,
  APITypes.OnCreateResourcesSubscription
>;
export const onUpdateResources = /* GraphQL */ `subscription OnUpdateResources($filter: ModelSubscriptionResourcesFilterInput) {
  onUpdateResources(filter: $filter) {
    id
    title
    description
    link
    level
    pathID
    logo
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateResourcesSubscriptionVariables,
  APITypes.OnUpdateResourcesSubscription
>;
export const onDeleteResources = /* GraphQL */ `subscription OnDeleteResources($filter: ModelSubscriptionResourcesFilterInput) {
  onDeleteResources(filter: $filter) {
    id
    title
    description
    link
    level
    pathID
    logo
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteResourcesSubscriptionVariables,
  APITypes.OnDeleteResourcesSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
    id
    name
    posts {
      nextToken
      __typename
    }
    role
    email
    password
    Paths {
      nextToken
      __typename
    }
    Comments {
      nextToken
      __typename
    }
    level
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
    id
    name
    posts {
      nextToken
      __typename
    }
    role
    email
    password
    Paths {
      nextToken
      __typename
    }
    Comments {
      nextToken
      __typename
    }
    level
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
    id
    name
    posts {
      nextToken
      __typename
    }
    role
    email
    password
    Paths {
      nextToken
      __typename
    }
    Comments {
      nextToken
      __typename
    }
    level
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreatePost = /* GraphQL */ `subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
  onCreatePost(filter: $filter) {
    id
    title
    bloID
    description
    Comments {
      nextToken
      __typename
    }
    pathID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePostSubscriptionVariables,
  APITypes.OnCreatePostSubscription
>;
export const onUpdatePost = /* GraphQL */ `subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
  onUpdatePost(filter: $filter) {
    id
    title
    bloID
    description
    Comments {
      nextToken
      __typename
    }
    pathID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePostSubscriptionVariables,
  APITypes.OnUpdatePostSubscription
>;
export const onDeletePost = /* GraphQL */ `subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
  onDeletePost(filter: $filter) {
    id
    title
    bloID
    description
    Comments {
      nextToken
      __typename
    }
    pathID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePostSubscriptionVariables,
  APITypes.OnDeletePostSubscription
>;
