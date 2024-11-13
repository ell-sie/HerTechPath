/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCommentInput = {
  id?: string | null,
  text?: string | null,
  like?: number | null,
  postID: string,
};

export type ModelCommentConditionInput = {
  text?: ModelStringInput | null,
  like?: ModelIntInput | null,
  postID?: ModelIDInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  text?: string | null,
  like?: number | null,
  postID: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCommentInput = {
  id: string,
  text?: string | null,
  like?: number | null,
  postID?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type CreatePathInput = {
  id?: string | null,
  status?: Status | null,
  userID: string,
};

export enum Status {
  STARTED = "STARTED",
  INPROGRESS = "INPROGRESS",
  DONE = "DONE",
}


export type ModelPathConditionInput = {
  status?: ModelStatusInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelPathConditionInput | null > | null,
  or?: Array< ModelPathConditionInput | null > | null,
  not?: ModelPathConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStatusInput = {
  eq?: Status | null,
  ne?: Status | null,
};

export type Path = {
  __typename: "Path",
  id: string,
  status?: Status | null,
  Resources?: ModelResourcesConnection | null,
  userID: string,
  Posts?: ModelPostConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelResourcesConnection = {
  __typename: "ModelResourcesConnection",
  items:  Array<Resources | null >,
  nextToken?: string | null,
};

export type Resources = {
  __typename: "Resources",
  id: string,
  title?: string | null,
  description?: string | null,
  link?: string | null,
  level?: Level | null,
  pathID: string,
  createdAt: string,
  updatedAt: string,
};

export enum Level {
  BEGINNER = "BEGINNER",
  INTERMEDIATE = "INTERMEDIATE",
  ADVANCED = "ADVANCED",
}


export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  title: string,
  bloID: string,
  description?: string | null,
  Comments?: ModelCommentConnection | null,
  pathID: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment | null >,
  nextToken?: string | null,
};

export type UpdatePathInput = {
  id: string,
  status?: Status | null,
  userID?: string | null,
};

export type DeletePathInput = {
  id: string,
};

export type CreateResourcesInput = {
  id?: string | null,
  title?: string | null,
  description?: string | null,
  link?: string | null,
  level?: Level | null,
  pathID: string,
};

export type ModelResourcesConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  link?: ModelStringInput | null,
  level?: ModelLevelInput | null,
  pathID?: ModelIDInput | null,
  and?: Array< ModelResourcesConditionInput | null > | null,
  or?: Array< ModelResourcesConditionInput | null > | null,
  not?: ModelResourcesConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelLevelInput = {
  eq?: Level | null,
  ne?: Level | null,
};

export type UpdateResourcesInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  link?: string | null,
  level?: Level | null,
  pathID?: string | null,
};

export type DeleteResourcesInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  name: string,
  role?: Role | null,
  email?: string | null,
  password?: string | null,
};

export enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
}


export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  role?: ModelRoleInput | null,
  email?: ModelStringInput | null,
  password?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelRoleInput = {
  eq?: Role | null,
  ne?: Role | null,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  posts?: ModelPostConnection | null,
  role?: Role | null,
  email?: string | null,
  password?: string | null,
  Paths?: ModelPathConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelPathConnection = {
  __typename: "ModelPathConnection",
  items:  Array<Path | null >,
  nextToken?: string | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  role?: Role | null,
  email?: string | null,
  password?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreatePostInput = {
  id?: string | null,
  title: string,
  bloID: string,
  description?: string | null,
  pathID: string,
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null,
  bloID?: ModelIDInput | null,
  description?: ModelStringInput | null,
  pathID?: ModelIDInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdatePostInput = {
  id: string,
  title?: string | null,
  bloID?: string | null,
  description?: string | null,
  pathID?: string | null,
};

export type DeletePostInput = {
  id: string,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  text?: ModelStringInput | null,
  like?: ModelIntInput | null,
  postID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelPathFilterInput = {
  id?: ModelIDInput | null,
  status?: ModelStatusInput | null,
  userID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPathFilterInput | null > | null,
  or?: Array< ModelPathFilterInput | null > | null,
  not?: ModelPathFilterInput | null,
};

export type ModelResourcesFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  link?: ModelStringInput | null,
  level?: ModelLevelInput | null,
  pathID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelResourcesFilterInput | null > | null,
  or?: Array< ModelResourcesFilterInput | null > | null,
  not?: ModelResourcesFilterInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  role?: ModelRoleInput | null,
  email?: ModelStringInput | null,
  password?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  bloID?: ModelIDInput | null,
  description?: ModelStringInput | null,
  pathID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelSubscriptionCommentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  text?: ModelSubscriptionStringInput | null,
  like?: ModelSubscriptionIntInput | null,
  postID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCommentFilterInput | null > | null,
  or?: Array< ModelSubscriptionCommentFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionPathFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  status?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPathFilterInput | null > | null,
  or?: Array< ModelSubscriptionPathFilterInput | null > | null,
};

export type ModelSubscriptionResourcesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  link?: ModelSubscriptionStringInput | null,
  level?: ModelSubscriptionStringInput | null,
  pathID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionResourcesFilterInput | null > | null,
  or?: Array< ModelSubscriptionResourcesFilterInput | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  role?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  password?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionPostFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  bloID?: ModelSubscriptionIDInput | null,
  description?: ModelSubscriptionStringInput | null,
  pathID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPostFilterInput | null > | null,
  or?: Array< ModelSubscriptionPostFilterInput | null > | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    text?: string | null,
    like?: number | null,
    postID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    text?: string | null,
    like?: number | null,
    postID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    text?: string | null,
    like?: number | null,
    postID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePathMutationVariables = {
  input: CreatePathInput,
  condition?: ModelPathConditionInput | null,
};

export type CreatePathMutation = {
  createPath?:  {
    __typename: "Path",
    id: string,
    status?: Status | null,
    Resources?:  {
      __typename: "ModelResourcesConnection",
      nextToken?: string | null,
    } | null,
    userID: string,
    Posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePathMutationVariables = {
  input: UpdatePathInput,
  condition?: ModelPathConditionInput | null,
};

export type UpdatePathMutation = {
  updatePath?:  {
    __typename: "Path",
    id: string,
    status?: Status | null,
    Resources?:  {
      __typename: "ModelResourcesConnection",
      nextToken?: string | null,
    } | null,
    userID: string,
    Posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePathMutationVariables = {
  input: DeletePathInput,
  condition?: ModelPathConditionInput | null,
};

export type DeletePathMutation = {
  deletePath?:  {
    __typename: "Path",
    id: string,
    status?: Status | null,
    Resources?:  {
      __typename: "ModelResourcesConnection",
      nextToken?: string | null,
    } | null,
    userID: string,
    Posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateResourcesMutationVariables = {
  input: CreateResourcesInput,
  condition?: ModelResourcesConditionInput | null,
};

export type CreateResourcesMutation = {
  createResources?:  {
    __typename: "Resources",
    id: string,
    title?: string | null,
    description?: string | null,
    link?: string | null,
    level?: Level | null,
    pathID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateResourcesMutationVariables = {
  input: UpdateResourcesInput,
  condition?: ModelResourcesConditionInput | null,
};

export type UpdateResourcesMutation = {
  updateResources?:  {
    __typename: "Resources",
    id: string,
    title?: string | null,
    description?: string | null,
    link?: string | null,
    level?: Level | null,
    pathID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteResourcesMutationVariables = {
  input: DeleteResourcesInput,
  condition?: ModelResourcesConditionInput | null,
};

export type DeleteResourcesMutation = {
  deleteResources?:  {
    __typename: "Resources",
    id: string,
    title?: string | null,
    description?: string | null,
    link?: string | null,
    level?: Level | null,
    pathID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    role?: Role | null,
    email?: string | null,
    password?: string | null,
    Paths?:  {
      __typename: "ModelPathConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    role?: Role | null,
    email?: string | null,
    password?: string | null,
    Paths?:  {
      __typename: "ModelPathConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    role?: Role | null,
    email?: string | null,
    password?: string | null,
    Paths?:  {
      __typename: "ModelPathConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    bloID: string,
    description?: string | null,
    Comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    pathID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    bloID: string,
    description?: string | null,
    Comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    pathID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    bloID: string,
    description?: string | null,
    Comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    pathID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    text?: string | null,
    like?: number | null,
    postID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      text?: string | null,
      like?: number | null,
      postID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CommentsByPostIDQueryVariables = {
  postID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CommentsByPostIDQuery = {
  commentsByPostID?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      text?: string | null,
      like?: number | null,
      postID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPathQueryVariables = {
  id: string,
};

export type GetPathQuery = {
  getPath?:  {
    __typename: "Path",
    id: string,
    status?: Status | null,
    Resources?:  {
      __typename: "ModelResourcesConnection",
      nextToken?: string | null,
    } | null,
    userID: string,
    Posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPathsQueryVariables = {
  filter?: ModelPathFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPathsQuery = {
  listPaths?:  {
    __typename: "ModelPathConnection",
    items:  Array< {
      __typename: "Path",
      id: string,
      status?: Status | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PathsByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPathFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PathsByUserIDQuery = {
  pathsByUserID?:  {
    __typename: "ModelPathConnection",
    items:  Array< {
      __typename: "Path",
      id: string,
      status?: Status | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetResourcesQueryVariables = {
  id: string,
};

export type GetResourcesQuery = {
  getResources?:  {
    __typename: "Resources",
    id: string,
    title?: string | null,
    description?: string | null,
    link?: string | null,
    level?: Level | null,
    pathID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListResourcesQueryVariables = {
  filter?: ModelResourcesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListResourcesQuery = {
  listResources?:  {
    __typename: "ModelResourcesConnection",
    items:  Array< {
      __typename: "Resources",
      id: string,
      title?: string | null,
      description?: string | null,
      link?: string | null,
      level?: Level | null,
      pathID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ResourcesByPathIDQueryVariables = {
  pathID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelResourcesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ResourcesByPathIDQuery = {
  resourcesByPathID?:  {
    __typename: "ModelResourcesConnection",
    items:  Array< {
      __typename: "Resources",
      id: string,
      title?: string | null,
      description?: string | null,
      link?: string | null,
      level?: Level | null,
      pathID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    role?: Role | null,
    email?: string | null,
    password?: string | null,
    Paths?:  {
      __typename: "ModelPathConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      role?: Role | null,
      email?: string | null,
      password?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    bloID: string,
    description?: string | null,
    Comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    pathID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      bloID: string,
      description?: string | null,
      pathID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PostsByBloIDQueryVariables = {
  bloID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PostsByBloIDQuery = {
  postsByBloID?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      bloID: string,
      description?: string | null,
      pathID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PostsByPathIDQueryVariables = {
  pathID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PostsByPathIDQuery = {
  postsByPathID?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      bloID: string,
      description?: string | null,
      pathID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    text?: string | null,
    like?: number | null,
    postID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    text?: string | null,
    like?: number | null,
    postID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    text?: string | null,
    like?: number | null,
    postID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePathSubscriptionVariables = {
  filter?: ModelSubscriptionPathFilterInput | null,
};

export type OnCreatePathSubscription = {
  onCreatePath?:  {
    __typename: "Path",
    id: string,
    status?: Status | null,
    Resources?:  {
      __typename: "ModelResourcesConnection",
      nextToken?: string | null,
    } | null,
    userID: string,
    Posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePathSubscriptionVariables = {
  filter?: ModelSubscriptionPathFilterInput | null,
};

export type OnUpdatePathSubscription = {
  onUpdatePath?:  {
    __typename: "Path",
    id: string,
    status?: Status | null,
    Resources?:  {
      __typename: "ModelResourcesConnection",
      nextToken?: string | null,
    } | null,
    userID: string,
    Posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePathSubscriptionVariables = {
  filter?: ModelSubscriptionPathFilterInput | null,
};

export type OnDeletePathSubscription = {
  onDeletePath?:  {
    __typename: "Path",
    id: string,
    status?: Status | null,
    Resources?:  {
      __typename: "ModelResourcesConnection",
      nextToken?: string | null,
    } | null,
    userID: string,
    Posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateResourcesSubscriptionVariables = {
  filter?: ModelSubscriptionResourcesFilterInput | null,
};

export type OnCreateResourcesSubscription = {
  onCreateResources?:  {
    __typename: "Resources",
    id: string,
    title?: string | null,
    description?: string | null,
    link?: string | null,
    level?: Level | null,
    pathID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateResourcesSubscriptionVariables = {
  filter?: ModelSubscriptionResourcesFilterInput | null,
};

export type OnUpdateResourcesSubscription = {
  onUpdateResources?:  {
    __typename: "Resources",
    id: string,
    title?: string | null,
    description?: string | null,
    link?: string | null,
    level?: Level | null,
    pathID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteResourcesSubscriptionVariables = {
  filter?: ModelSubscriptionResourcesFilterInput | null,
};

export type OnDeleteResourcesSubscription = {
  onDeleteResources?:  {
    __typename: "Resources",
    id: string,
    title?: string | null,
    description?: string | null,
    link?: string | null,
    level?: Level | null,
    pathID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    role?: Role | null,
    email?: string | null,
    password?: string | null,
    Paths?:  {
      __typename: "ModelPathConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    role?: Role | null,
    email?: string | null,
    password?: string | null,
    Paths?:  {
      __typename: "ModelPathConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    role?: Role | null,
    email?: string | null,
    password?: string | null,
    Paths?:  {
      __typename: "ModelPathConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    bloID: string,
    description?: string | null,
    Comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    pathID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    bloID: string,
    description?: string | null,
    Comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    pathID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    bloID: string,
    description?: string | null,
    Comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    pathID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
