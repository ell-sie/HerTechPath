/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreatePost = /* GraphQL */ `subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
  onCreatePost(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePostSubscriptionVariables,
  APITypes.OnCreatePostSubscription
>;
export const onUpdatePost = /* GraphQL */ `subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
  onUpdatePost(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePostSubscriptionVariables,
  APITypes.OnUpdatePostSubscription
>;
export const onDeletePost = /* GraphQL */ `subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
  onDeletePost(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePostSubscriptionVariables,
  APITypes.OnDeletePostSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
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
    userId
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
    userId
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
    userId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreatePath = /* GraphQL */ `subscription OnCreatePath($filter: ModelSubscriptionPathFilterInput) {
  onCreatePath(filter: $filter) {
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
      userId
      createdAt
      updatedAt
      __typename
    }
    description
    resources {
      id
      title
      description
      link
      author
      hours
      __typename
    }
    pathUserId
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
      userId
      createdAt
      updatedAt
      __typename
    }
    description
    resources {
      id
      title
      description
      link
      author
      hours
      __typename
    }
    pathUserId
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
      userId
      createdAt
      updatedAt
      __typename
    }
    description
    resources {
      id
      title
      description
      link
      author
      hours
      __typename
    }
    pathUserId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePathSubscriptionVariables,
  APITypes.OnDeletePathSubscription
>;
export const onCreateComment = /* GraphQL */ `subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
  onCreateComment(filter: $filter) {
    id
    postID
    description
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
    postID
    description
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
    postID
    description
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
export const onCreateResources = /* GraphQL */ `subscription OnCreateResources($filter: ModelSubscriptionResourcesFilterInput) {
  onCreateResources(filter: $filter) {
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
    author
    hours
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
    author
    hours
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteResourcesSubscriptionVariables,
  APITypes.OnDeleteResourcesSubscription
>;
export const onCreatePostUser = /* GraphQL */ `subscription OnCreatePostUser($filter: ModelSubscriptionPostUserFilterInput) {
  onCreatePostUser(filter: $filter) {
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
      userId
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePostUserSubscriptionVariables,
  APITypes.OnCreatePostUserSubscription
>;
export const onUpdatePostUser = /* GraphQL */ `subscription OnUpdatePostUser($filter: ModelSubscriptionPostUserFilterInput) {
  onUpdatePostUser(filter: $filter) {
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
      userId
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePostUserSubscriptionVariables,
  APITypes.OnUpdatePostUserSubscription
>;
export const onDeletePostUser = /* GraphQL */ `subscription OnDeletePostUser($filter: ModelSubscriptionPostUserFilterInput) {
  onDeletePostUser(filter: $filter) {
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
      userId
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePostUserSubscriptionVariables,
  APITypes.OnDeletePostUserSubscription
>;
