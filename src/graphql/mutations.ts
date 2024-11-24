/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createPost = /* GraphQL */ `mutation CreatePost(
  $input: CreatePostInput!
  $condition: ModelPostConditionInput
) {
  createPost(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePostMutationVariables,
  APITypes.CreatePostMutation
>;
export const updatePost = /* GraphQL */ `mutation UpdatePost(
  $input: UpdatePostInput!
  $condition: ModelPostConditionInput
) {
  updatePost(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePostMutationVariables,
  APITypes.UpdatePostMutation
>;
export const deletePost = /* GraphQL */ `mutation DeletePost(
  $input: DeletePostInput!
  $condition: ModelPostConditionInput
) {
  deletePost(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePostMutationVariables,
  APITypes.DeletePostMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createPath = /* GraphQL */ `mutation CreatePath(
  $input: CreatePathInput!
  $condition: ModelPathConditionInput
) {
  createPath(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePathMutationVariables,
  APITypes.CreatePathMutation
>;
export const updatePath = /* GraphQL */ `mutation UpdatePath(
  $input: UpdatePathInput!
  $condition: ModelPathConditionInput
) {
  updatePath(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePathMutationVariables,
  APITypes.UpdatePathMutation
>;
export const deletePath = /* GraphQL */ `mutation DeletePath(
  $input: DeletePathInput!
  $condition: ModelPathConditionInput
) {
  deletePath(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePathMutationVariables,
  APITypes.DeletePathMutation
>;
export const createComment = /* GraphQL */ `mutation CreateComment(
  $input: CreateCommentInput!
  $condition: ModelCommentConditionInput
) {
  createComment(input: $input, condition: $condition) {
    id
    postID
    description
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCommentMutationVariables,
  APITypes.CreateCommentMutation
>;
export const updateComment = /* GraphQL */ `mutation UpdateComment(
  $input: UpdateCommentInput!
  $condition: ModelCommentConditionInput
) {
  updateComment(input: $input, condition: $condition) {
    id
    postID
    description
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCommentMutationVariables,
  APITypes.UpdateCommentMutation
>;
export const deleteComment = /* GraphQL */ `mutation DeleteComment(
  $input: DeleteCommentInput!
  $condition: ModelCommentConditionInput
) {
  deleteComment(input: $input, condition: $condition) {
    id
    postID
    description
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCommentMutationVariables,
  APITypes.DeleteCommentMutation
>;
export const createResources = /* GraphQL */ `mutation CreateResources(
  $input: CreateResourcesInput!
  $condition: ModelResourcesConditionInput
) {
  createResources(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateResourcesMutationVariables,
  APITypes.CreateResourcesMutation
>;
export const updateResources = /* GraphQL */ `mutation UpdateResources(
  $input: UpdateResourcesInput!
  $condition: ModelResourcesConditionInput
) {
  updateResources(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateResourcesMutationVariables,
  APITypes.UpdateResourcesMutation
>;
export const deleteResources = /* GraphQL */ `mutation DeleteResources(
  $input: DeleteResourcesInput!
  $condition: ModelResourcesConditionInput
) {
  deleteResources(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteResourcesMutationVariables,
  APITypes.DeleteResourcesMutation
>;
export const createPostUser = /* GraphQL */ `mutation CreatePostUser(
  $input: CreatePostUserInput!
  $condition: ModelPostUserConditionInput
) {
  createPostUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePostUserMutationVariables,
  APITypes.CreatePostUserMutation
>;
export const updatePostUser = /* GraphQL */ `mutation UpdatePostUser(
  $input: UpdatePostUserInput!
  $condition: ModelPostUserConditionInput
) {
  updatePostUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePostUserMutationVariables,
  APITypes.UpdatePostUserMutation
>;
export const deletePostUser = /* GraphQL */ `mutation DeletePostUser(
  $input: DeletePostUserInput!
  $condition: ModelPostUserConditionInput
) {
  deletePostUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePostUserMutationVariables,
  APITypes.DeletePostUserMutation
>;
