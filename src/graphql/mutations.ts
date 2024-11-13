/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createComment = /* GraphQL */ `mutation CreateComment(
  $input: CreateCommentInput!
  $condition: ModelCommentConditionInput
) {
  createComment(input: $input, condition: $condition) {
    id
    text
    like
    postID
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
    text
    like
    postID
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
    text
    like
    postID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCommentMutationVariables,
  APITypes.DeleteCommentMutation
>;
export const createPath = /* GraphQL */ `mutation CreatePath(
  $input: CreatePathInput!
  $condition: ModelPathConditionInput
) {
  createPath(input: $input, condition: $condition) {
    id
    status
    Resources {
      nextToken
      __typename
    }
    userID
    Posts {
      nextToken
      __typename
    }
    createdAt
    updatedAt
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
    status
    Resources {
      nextToken
      __typename
    }
    userID
    Posts {
      nextToken
      __typename
    }
    createdAt
    updatedAt
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
    status
    Resources {
      nextToken
      __typename
    }
    userID
    Posts {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePathMutationVariables,
  APITypes.DeletePathMutation
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
    level
    pathID
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
    level
    pathID
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
    level
    pathID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteResourcesMutationVariables,
  APITypes.DeleteResourcesMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createPost = /* GraphQL */ `mutation CreatePost(
  $input: CreatePostInput!
  $condition: ModelPostConditionInput
) {
  createPost(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePostMutationVariables,
  APITypes.DeletePostMutation
>;
