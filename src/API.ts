/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePostInput = {
  id?: string | null,
  title?: string | null,
  description?: string | null,
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
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

export type Post = {
  __typename: "Post",
  id: string,
  Comments?: ModelCommentConnection | null,
  User?: ModelPostUserConnection | null,
  title?: string | null,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment | null >,
  nextToken?: string | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  postID: string,
  description: string,
  userID: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelPostUserConnection = {
  __typename: "ModelPostUserConnection",
  items:  Array<PostUser | null >,
  nextToken?: string | null,
};

export type PostUser = {
  __typename: "PostUser",
  id: string,
  postId: string,
  userId: string,
  post: Post,
  user: User,
  createdAt: string,
  updatedAt: string,
};

export type User = {
  __typename: "User",
  id: string,
  posts?: ModelPostUserConnection | null,
  level?: Levels | null,
  name?: string | null,
  email?: string | null,
  technicalskills?: Array< TechSkills | null > | null,
  softskills?: Array< SoftSkills | null > | null,
  shorttermgoals?: string | null,
  longtermgoals?: string | null,
  hrsperweek?: string | null,
  interests?: Array< Interests | null > | null,
  feedback?: string | null,
  challenges?: string | null,
  motivation?: string | null,
  Comments?: ModelCommentConnection | null,
  userId?: string | null,
  createdAt: string,
  updatedAt: string,
};

export enum Levels {
  BEGINNER = "BEGINNER",
  INTERMEDIATE = "INTERMEDIATE",
  ADVANCED = "ADVANCED",
}


export enum TechSkills {
  JAVASCRIPT = "JAVASCRIPT",
  TYPESCRIPT = "TYPESCRIPT",
  REACTJS = "REACTJS",
  FLUTTER = "FLUTTER",
  PYTHON = "PYTHON",
  JAVA = "JAVA",
}


export enum SoftSkills {
  TEAMWORK = "TEAMWORK",
  COMMUNICATION = "COMMUNICATION",
  LEADERSHIP = "LEADERSHIP",
}


export enum Interests {
  WEBDEVELOPMENT = "WEBDEVELOPMENT",
  INTERVIEWSKILLS = "INTERVIEWSKILLS",
  MACHINELEARNING = "MACHINELEARNING",
}


export type UpdatePostInput = {
  id: string,
  title?: string | null,
  description?: string | null,
};

export type DeletePostInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  level?: Levels | null,
  name?: string | null,
  email?: string | null,
  technicalskills?: Array< TechSkills | null > | null,
  softskills?: Array< SoftSkills | null > | null,
  shorttermgoals?: string | null,
  longtermgoals?: string | null,
  hrsperweek?: string | null,
  interests?: Array< Interests | null > | null,
  feedback?: string | null,
  challenges?: string | null,
  motivation?: string | null,
  userId?: string | null,
};

export type ModelUserConditionInput = {
  level?: ModelLevelsInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  technicalskills?: ModelTechSkillsListInput | null,
  softskills?: ModelSoftSkillsListInput | null,
  shorttermgoals?: ModelStringInput | null,
  longtermgoals?: ModelStringInput | null,
  hrsperweek?: ModelStringInput | null,
  interests?: ModelInterestsListInput | null,
  feedback?: ModelStringInput | null,
  challenges?: ModelStringInput | null,
  motivation?: ModelStringInput | null,
  userId?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelLevelsInput = {
  eq?: Levels | null,
  ne?: Levels | null,
};

export type ModelTechSkillsListInput = {
  eq?: Array< TechSkills | null > | null,
  ne?: Array< TechSkills | null > | null,
  contains?: TechSkills | null,
  notContains?: TechSkills | null,
};

export type ModelSoftSkillsListInput = {
  eq?: Array< SoftSkills | null > | null,
  ne?: Array< SoftSkills | null > | null,
  contains?: SoftSkills | null,
  notContains?: SoftSkills | null,
};

export type ModelInterestsListInput = {
  eq?: Array< Interests | null > | null,
  ne?: Array< Interests | null > | null,
  contains?: Interests | null,
  notContains?: Interests | null,
};

export type UpdateUserInput = {
  id: string,
  level?: Levels | null,
  name?: string | null,
  email?: string | null,
  technicalskills?: Array< TechSkills | null > | null,
  softskills?: Array< SoftSkills | null > | null,
  shorttermgoals?: string | null,
  longtermgoals?: string | null,
  hrsperweek?: string | null,
  interests?: Array< Interests | null > | null,
  feedback?: string | null,
  challenges?: string | null,
  motivation?: string | null,
  userId?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreatePathInput = {
  id?: string | null,
  title: string,
  description?: string | null,
  resources?: Array< PathResourcesInput | null > | null,
  pathUserId?: string | null,
};

export type PathResourcesInput = {
  id?: string | null,
  title?: string | null,
  description?: string | null,
  link?: string | null,
  author?: string | null,
  hours?: string | null,
};

export type ModelPathConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  pathUserId?: ModelStringInput | null,
  and?: Array< ModelPathConditionInput | null > | null,
  or?: Array< ModelPathConditionInput | null > | null,
  not?: ModelPathConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type Path = {
  __typename: "Path",
  id: string,
  title: string,
  User?: User | null,
  description?: string | null,
  resources?:  Array<PathResources | null > | null,
  pathUserId?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type PathResources = {
  __typename: "PathResources",
  id?: string | null,
  title?: string | null,
  description?: string | null,
  link?: string | null,
  author?: string | null,
  hours?: string | null,
};

export type UpdatePathInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  resources?: Array< PathResourcesInput | null > | null,
  pathUserId?: string | null,
};

export type DeletePathInput = {
  id: string,
};

export type CreateCommentInput = {
  id?: string | null,
  postID: string,
  description: string,
  userID: string,
};

export type ModelCommentConditionInput = {
  postID?: ModelIDInput | null,
  description?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
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

export type UpdateCommentInput = {
  id: string,
  postID?: string | null,
  description?: string | null,
  userID?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type CreateResourcesInput = {
  id?: string | null,
  title?: string | null,
  description?: string | null,
  link?: string | null,
  author?: string | null,
  hours?: string | null,
};

export type ModelResourcesConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  link?: ModelStringInput | null,
  author?: ModelStringInput | null,
  hours?: ModelStringInput | null,
  and?: Array< ModelResourcesConditionInput | null > | null,
  or?: Array< ModelResourcesConditionInput | null > | null,
  not?: ModelResourcesConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type Resources = {
  __typename: "Resources",
  id: string,
  title?: string | null,
  description?: string | null,
  link?: string | null,
  author?: string | null,
  hours?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateResourcesInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  link?: string | null,
  author?: string | null,
  hours?: string | null,
};

export type DeleteResourcesInput = {
  id: string,
};

export type CreatePostUserInput = {
  id?: string | null,
  postId: string,
  userId: string,
};

export type ModelPostUserConditionInput = {
  postId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelPostUserConditionInput | null > | null,
  or?: Array< ModelPostUserConditionInput | null > | null,
  not?: ModelPostUserConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdatePostUserInput = {
  id: string,
  postId?: string | null,
  userId?: string | null,
};

export type DeletePostUserInput = {
  id: string,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  level?: ModelLevelsInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  technicalskills?: ModelTechSkillsListInput | null,
  softskills?: ModelSoftSkillsListInput | null,
  shorttermgoals?: ModelStringInput | null,
  longtermgoals?: ModelStringInput | null,
  hrsperweek?: ModelStringInput | null,
  interests?: ModelInterestsListInput | null,
  feedback?: ModelStringInput | null,
  challenges?: ModelStringInput | null,
  motivation?: ModelStringInput | null,
  userId?: ModelStringInput | null,
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

export type ModelPathFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  pathUserId?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPathFilterInput | null > | null,
  or?: Array< ModelPathFilterInput | null > | null,
  not?: ModelPathFilterInput | null,
};

export type ModelPathConnection = {
  __typename: "ModelPathConnection",
  items:  Array<Path | null >,
  nextToken?: string | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  description?: ModelStringInput | null,
  userID?: ModelIDInput | null,
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


export type ModelResourcesFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  link?: ModelStringInput | null,
  author?: ModelStringInput | null,
  hours?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelResourcesFilterInput | null > | null,
  or?: Array< ModelResourcesFilterInput | null > | null,
  not?: ModelResourcesFilterInput | null,
};

export type ModelResourcesConnection = {
  __typename: "ModelResourcesConnection",
  items:  Array<Resources | null >,
  nextToken?: string | null,
};

export type ModelPostUserFilterInput = {
  id?: ModelIDInput | null,
  postId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPostUserFilterInput | null > | null,
  or?: Array< ModelPostUserFilterInput | null > | null,
  not?: ModelPostUserFilterInput | null,
};

export type ModelSubscriptionPostFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPostFilterInput | null > | null,
  or?: Array< ModelSubscriptionPostFilterInput | null > | null,
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

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  level?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  technicalskills?: ModelSubscriptionStringInput | null,
  softskills?: ModelSubscriptionStringInput | null,
  shorttermgoals?: ModelSubscriptionStringInput | null,
  longtermgoals?: ModelSubscriptionStringInput | null,
  hrsperweek?: ModelSubscriptionStringInput | null,
  interests?: ModelSubscriptionStringInput | null,
  feedback?: ModelSubscriptionStringInput | null,
  challenges?: ModelSubscriptionStringInput | null,
  motivation?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionPathFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  pathUserId?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPathFilterInput | null > | null,
  or?: Array< ModelSubscriptionPathFilterInput | null > | null,
};

export type ModelSubscriptionCommentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  postID?: ModelSubscriptionIDInput | null,
  description?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCommentFilterInput | null > | null,
  or?: Array< ModelSubscriptionCommentFilterInput | null > | null,
};

export type ModelSubscriptionResourcesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  link?: ModelSubscriptionStringInput | null,
  author?: ModelSubscriptionStringInput | null,
  hours?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionResourcesFilterInput | null > | null,
  or?: Array< ModelSubscriptionResourcesFilterInput | null > | null,
};

export type ModelSubscriptionPostUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  postId?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPostUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionPostUserFilterInput | null > | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    Comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    User?:  {
      __typename: "ModelPostUserConnection",
      nextToken?: string | null,
    } | null,
    title?: string | null,
    description?: string | null,
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
    Comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    User?:  {
      __typename: "ModelPostUserConnection",
      nextToken?: string | null,
    } | null,
    title?: string | null,
    description?: string | null,
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
    Comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    User?:  {
      __typename: "ModelPostUserConnection",
      nextToken?: string | null,
    } | null,
    title?: string | null,
    description?: string | null,
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
    posts?:  {
      __typename: "ModelPostUserConnection",
      nextToken?: string | null,
    } | null,
    level?: Levels | null,
    name?: string | null,
    email?: string | null,
    technicalskills?: Array< TechSkills | null > | null,
    softskills?: Array< SoftSkills | null > | null,
    shorttermgoals?: string | null,
    longtermgoals?: string | null,
    hrsperweek?: string | null,
    interests?: Array< Interests | null > | null,
    feedback?: string | null,
    challenges?: string | null,
    motivation?: string | null,
    Comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    userId?: string | null,
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
    posts?:  {
      __typename: "ModelPostUserConnection",
      nextToken?: string | null,
    } | null,
    level?: Levels | null,
    name?: string | null,
    email?: string | null,
    technicalskills?: Array< TechSkills | null > | null,
    softskills?: Array< SoftSkills | null > | null,
    shorttermgoals?: string | null,
    longtermgoals?: string | null,
    hrsperweek?: string | null,
    interests?: Array< Interests | null > | null,
    feedback?: string | null,
    challenges?: string | null,
    motivation?: string | null,
    Comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    userId?: string | null,
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
    posts?:  {
      __typename: "ModelPostUserConnection",
      nextToken?: string | null,
    } | null,
    level?: Levels | null,
    name?: string | null,
    email?: string | null,
    technicalskills?: Array< TechSkills | null > | null,
    softskills?: Array< SoftSkills | null > | null,
    shorttermgoals?: string | null,
    longtermgoals?: string | null,
    hrsperweek?: string | null,
    interests?: Array< Interests | null > | null,
    feedback?: string | null,
    challenges?: string | null,
    motivation?: string | null,
    Comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    userId?: string | null,
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
    title: string,
    User?:  {
      __typename: "User",
      id: string,
      level?: Levels | null,
      name?: string | null,
      email?: string | null,
      technicalskills?: Array< TechSkills | null > | null,
      softskills?: Array< SoftSkills | null > | null,
      shorttermgoals?: string | null,
      longtermgoals?: string | null,
      hrsperweek?: string | null,
      interests?: Array< Interests | null > | null,
      feedback?: string | null,
      challenges?: string | null,
      motivation?: string | null,
      userId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    description?: string | null,
    resources?:  Array< {
      __typename: "PathResources",
      id?: string | null,
      title?: string | null,
      description?: string | null,
      link?: string | null,
      author?: string | null,
      hours?: string | null,
    } | null > | null,
    pathUserId?: string | null,
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
    title: string,
    User?:  {
      __typename: "User",
      id: string,
      level?: Levels | null,
      name?: string | null,
      email?: string | null,
      technicalskills?: Array< TechSkills | null > | null,
      softskills?: Array< SoftSkills | null > | null,
      shorttermgoals?: string | null,
      longtermgoals?: string | null,
      hrsperweek?: string | null,
      interests?: Array< Interests | null > | null,
      feedback?: string | null,
      challenges?: string | null,
      motivation?: string | null,
      userId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    description?: string | null,
    resources?:  Array< {
      __typename: "PathResources",
      id?: string | null,
      title?: string | null,
      description?: string | null,
      link?: string | null,
      author?: string | null,
      hours?: string | null,
    } | null > | null,
    pathUserId?: string | null,
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
    title: string,
    User?:  {
      __typename: "User",
      id: string,
      level?: Levels | null,
      name?: string | null,
      email?: string | null,
      technicalskills?: Array< TechSkills | null > | null,
      softskills?: Array< SoftSkills | null > | null,
      shorttermgoals?: string | null,
      longtermgoals?: string | null,
      hrsperweek?: string | null,
      interests?: Array< Interests | null > | null,
      feedback?: string | null,
      challenges?: string | null,
      motivation?: string | null,
      userId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    description?: string | null,
    resources?:  Array< {
      __typename: "PathResources",
      id?: string | null,
      title?: string | null,
      description?: string | null,
      link?: string | null,
      author?: string | null,
      hours?: string | null,
    } | null > | null,
    pathUserId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    description: string,
    userID: string,
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
    postID: string,
    description: string,
    userID: string,
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
    postID: string,
    description: string,
    userID: string,
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
    author?: string | null,
    hours?: string | null,
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
    author?: string | null,
    hours?: string | null,
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
    author?: string | null,
    hours?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePostUserMutationVariables = {
  input: CreatePostUserInput,
  condition?: ModelPostUserConditionInput | null,
};

export type CreatePostUserMutation = {
  createPostUser?:  {
    __typename: "PostUser",
    id: string,
    postId: string,
    userId: string,
    post:  {
      __typename: "Post",
      id: string,
      title?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      level?: Levels | null,
      name?: string | null,
      email?: string | null,
      technicalskills?: Array< TechSkills | null > | null,
      softskills?: Array< SoftSkills | null > | null,
      shorttermgoals?: string | null,
      longtermgoals?: string | null,
      hrsperweek?: string | null,
      interests?: Array< Interests | null > | null,
      feedback?: string | null,
      challenges?: string | null,
      motivation?: string | null,
      userId?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePostUserMutationVariables = {
  input: UpdatePostUserInput,
  condition?: ModelPostUserConditionInput | null,
};

export type UpdatePostUserMutation = {
  updatePostUser?:  {
    __typename: "PostUser",
    id: string,
    postId: string,
    userId: string,
    post:  {
      __typename: "Post",
      id: string,
      title?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      level?: Levels | null,
      name?: string | null,
      email?: string | null,
      technicalskills?: Array< TechSkills | null > | null,
      softskills?: Array< SoftSkills | null > | null,
      shorttermgoals?: string | null,
      longtermgoals?: string | null,
      hrsperweek?: string | null,
      interests?: Array< Interests | null > | null,
      feedback?: string | null,
      challenges?: string | null,
      motivation?: string | null,
      userId?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePostUserMutationVariables = {
  input: DeletePostUserInput,
  condition?: ModelPostUserConditionInput | null,
};

export type DeletePostUserMutation = {
  deletePostUser?:  {
    __typename: "PostUser",
    id: string,
    postId: string,
    userId: string,
    post:  {
      __typename: "Post",
      id: string,
      title?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      level?: Levels | null,
      name?: string | null,
      email?: string | null,
      technicalskills?: Array< TechSkills | null > | null,
      softskills?: Array< SoftSkills | null > | null,
      shorttermgoals?: string | null,
      longtermgoals?: string | null,
      hrsperweek?: string | null,
      interests?: Array< Interests | null > | null,
      feedback?: string | null,
      challenges?: string | null,
      motivation?: string | null,
      userId?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    Comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    User?:  {
      __typename: "ModelPostUserConnection",
      nextToken?: string | null,
    } | null,
    title?: string | null,
    description?: string | null,
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
      title?: string | null,
      description?: string | null,
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
    posts?:  {
      __typename: "ModelPostUserConnection",
      nextToken?: string | null,
    } | null,
    level?: Levels | null,
    name?: string | null,
    email?: string | null,
    technicalskills?: Array< TechSkills | null > | null,
    softskills?: Array< SoftSkills | null > | null,
    shorttermgoals?: string | null,
    longtermgoals?: string | null,
    hrsperweek?: string | null,
    interests?: Array< Interests | null > | null,
    feedback?: string | null,
    challenges?: string | null,
    motivation?: string | null,
    Comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    userId?: string | null,
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
      level?: Levels | null,
      name?: string | null,
      email?: string | null,
      technicalskills?: Array< TechSkills | null > | null,
      softskills?: Array< SoftSkills | null > | null,
      shorttermgoals?: string | null,
      longtermgoals?: string | null,
      hrsperweek?: string | null,
      interests?: Array< Interests | null > | null,
      feedback?: string | null,
      challenges?: string | null,
      motivation?: string | null,
      userId?: string | null,
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
    title: string,
    User?:  {
      __typename: "User",
      id: string,
      level?: Levels | null,
      name?: string | null,
      email?: string | null,
      technicalskills?: Array< TechSkills | null > | null,
      softskills?: Array< SoftSkills | null > | null,
      shorttermgoals?: string | null,
      longtermgoals?: string | null,
      hrsperweek?: string | null,
      interests?: Array< Interests | null > | null,
      feedback?: string | null,
      challenges?: string | null,
      motivation?: string | null,
      userId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    description?: string | null,
    resources?:  Array< {
      __typename: "PathResources",
      id?: string | null,
      title?: string | null,
      description?: string | null,
      link?: string | null,
      author?: string | null,
      hours?: string | null,
    } | null > | null,
    pathUserId?: string | null,
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
      title: string,
      description?: string | null,
      resources?:  Array< {
        __typename: "PathResources",
        id?: string | null,
        title?: string | null,
        description?: string | null,
        link?: string | null,
        author?: string | null,
        hours?: string | null,
      } | null > | null,
      pathUserId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    description: string,
    userID: string,
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
      postID: string,
      description: string,
      userID: string,
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
      postID: string,
      description: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CommentsByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CommentsByUserIDQuery = {
  commentsByUserID?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      postID: string,
      description: string,
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
    author?: string | null,
    hours?: string | null,
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
      author?: string | null,
      hours?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPostUserQueryVariables = {
  id: string,
};

export type GetPostUserQuery = {
  getPostUser?:  {
    __typename: "PostUser",
    id: string,
    postId: string,
    userId: string,
    post:  {
      __typename: "Post",
      id: string,
      title?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      level?: Levels | null,
      name?: string | null,
      email?: string | null,
      technicalskills?: Array< TechSkills | null > | null,
      softskills?: Array< SoftSkills | null > | null,
      shorttermgoals?: string | null,
      longtermgoals?: string | null,
      hrsperweek?: string | null,
      interests?: Array< Interests | null > | null,
      feedback?: string | null,
      challenges?: string | null,
      motivation?: string | null,
      userId?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPostUsersQueryVariables = {
  filter?: ModelPostUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostUsersQuery = {
  listPostUsers?:  {
    __typename: "ModelPostUserConnection",
    items:  Array< {
      __typename: "PostUser",
      id: string,
      postId: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PostUsersByPostIdQueryVariables = {
  postId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PostUsersByPostIdQuery = {
  postUsersByPostId?:  {
    __typename: "ModelPostUserConnection",
    items:  Array< {
      __typename: "PostUser",
      id: string,
      postId: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PostUsersByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PostUsersByUserIdQuery = {
  postUsersByUserId?:  {
    __typename: "ModelPostUserConnection",
    items:  Array< {
      __typename: "PostUser",
      id: string,
      postId: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    Comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    User?:  {
      __typename: "ModelPostUserConnection",
      nextToken?: string | null,
    } | null,
    title?: string | null,
    description?: string | null,
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
    Comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    User?:  {
      __typename: "ModelPostUserConnection",
      nextToken?: string | null,
    } | null,
    title?: string | null,
    description?: string | null,
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
    Comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    User?:  {
      __typename: "ModelPostUserConnection",
      nextToken?: string | null,
    } | null,
    title?: string | null,
    description?: string | null,
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
    posts?:  {
      __typename: "ModelPostUserConnection",
      nextToken?: string | null,
    } | null,
    level?: Levels | null,
    name?: string | null,
    email?: string | null,
    technicalskills?: Array< TechSkills | null > | null,
    softskills?: Array< SoftSkills | null > | null,
    shorttermgoals?: string | null,
    longtermgoals?: string | null,
    hrsperweek?: string | null,
    interests?: Array< Interests | null > | null,
    feedback?: string | null,
    challenges?: string | null,
    motivation?: string | null,
    Comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    userId?: string | null,
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
    posts?:  {
      __typename: "ModelPostUserConnection",
      nextToken?: string | null,
    } | null,
    level?: Levels | null,
    name?: string | null,
    email?: string | null,
    technicalskills?: Array< TechSkills | null > | null,
    softskills?: Array< SoftSkills | null > | null,
    shorttermgoals?: string | null,
    longtermgoals?: string | null,
    hrsperweek?: string | null,
    interests?: Array< Interests | null > | null,
    feedback?: string | null,
    challenges?: string | null,
    motivation?: string | null,
    Comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    userId?: string | null,
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
    posts?:  {
      __typename: "ModelPostUserConnection",
      nextToken?: string | null,
    } | null,
    level?: Levels | null,
    name?: string | null,
    email?: string | null,
    technicalskills?: Array< TechSkills | null > | null,
    softskills?: Array< SoftSkills | null > | null,
    shorttermgoals?: string | null,
    longtermgoals?: string | null,
    hrsperweek?: string | null,
    interests?: Array< Interests | null > | null,
    feedback?: string | null,
    challenges?: string | null,
    motivation?: string | null,
    Comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    userId?: string | null,
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
    title: string,
    User?:  {
      __typename: "User",
      id: string,
      level?: Levels | null,
      name?: string | null,
      email?: string | null,
      technicalskills?: Array< TechSkills | null > | null,
      softskills?: Array< SoftSkills | null > | null,
      shorttermgoals?: string | null,
      longtermgoals?: string | null,
      hrsperweek?: string | null,
      interests?: Array< Interests | null > | null,
      feedback?: string | null,
      challenges?: string | null,
      motivation?: string | null,
      userId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    description?: string | null,
    resources?:  Array< {
      __typename: "PathResources",
      id?: string | null,
      title?: string | null,
      description?: string | null,
      link?: string | null,
      author?: string | null,
      hours?: string | null,
    } | null > | null,
    pathUserId?: string | null,
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
    title: string,
    User?:  {
      __typename: "User",
      id: string,
      level?: Levels | null,
      name?: string | null,
      email?: string | null,
      technicalskills?: Array< TechSkills | null > | null,
      softskills?: Array< SoftSkills | null > | null,
      shorttermgoals?: string | null,
      longtermgoals?: string | null,
      hrsperweek?: string | null,
      interests?: Array< Interests | null > | null,
      feedback?: string | null,
      challenges?: string | null,
      motivation?: string | null,
      userId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    description?: string | null,
    resources?:  Array< {
      __typename: "PathResources",
      id?: string | null,
      title?: string | null,
      description?: string | null,
      link?: string | null,
      author?: string | null,
      hours?: string | null,
    } | null > | null,
    pathUserId?: string | null,
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
    title: string,
    User?:  {
      __typename: "User",
      id: string,
      level?: Levels | null,
      name?: string | null,
      email?: string | null,
      technicalskills?: Array< TechSkills | null > | null,
      softskills?: Array< SoftSkills | null > | null,
      shorttermgoals?: string | null,
      longtermgoals?: string | null,
      hrsperweek?: string | null,
      interests?: Array< Interests | null > | null,
      feedback?: string | null,
      challenges?: string | null,
      motivation?: string | null,
      userId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    description?: string | null,
    resources?:  Array< {
      __typename: "PathResources",
      id?: string | null,
      title?: string | null,
      description?: string | null,
      link?: string | null,
      author?: string | null,
      hours?: string | null,
    } | null > | null,
    pathUserId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    description: string,
    userID: string,
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
    postID: string,
    description: string,
    userID: string,
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
    postID: string,
    description: string,
    userID: string,
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
    author?: string | null,
    hours?: string | null,
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
    author?: string | null,
    hours?: string | null,
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
    author?: string | null,
    hours?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePostUserSubscriptionVariables = {
  filter?: ModelSubscriptionPostUserFilterInput | null,
};

export type OnCreatePostUserSubscription = {
  onCreatePostUser?:  {
    __typename: "PostUser",
    id: string,
    postId: string,
    userId: string,
    post:  {
      __typename: "Post",
      id: string,
      title?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      level?: Levels | null,
      name?: string | null,
      email?: string | null,
      technicalskills?: Array< TechSkills | null > | null,
      softskills?: Array< SoftSkills | null > | null,
      shorttermgoals?: string | null,
      longtermgoals?: string | null,
      hrsperweek?: string | null,
      interests?: Array< Interests | null > | null,
      feedback?: string | null,
      challenges?: string | null,
      motivation?: string | null,
      userId?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePostUserSubscriptionVariables = {
  filter?: ModelSubscriptionPostUserFilterInput | null,
};

export type OnUpdatePostUserSubscription = {
  onUpdatePostUser?:  {
    __typename: "PostUser",
    id: string,
    postId: string,
    userId: string,
    post:  {
      __typename: "Post",
      id: string,
      title?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      level?: Levels | null,
      name?: string | null,
      email?: string | null,
      technicalskills?: Array< TechSkills | null > | null,
      softskills?: Array< SoftSkills | null > | null,
      shorttermgoals?: string | null,
      longtermgoals?: string | null,
      hrsperweek?: string | null,
      interests?: Array< Interests | null > | null,
      feedback?: string | null,
      challenges?: string | null,
      motivation?: string | null,
      userId?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePostUserSubscriptionVariables = {
  filter?: ModelSubscriptionPostUserFilterInput | null,
};

export type OnDeletePostUserSubscription = {
  onDeletePostUser?:  {
    __typename: "PostUser",
    id: string,
    postId: string,
    userId: string,
    post:  {
      __typename: "Post",
      id: string,
      title?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      level?: Levels | null,
      name?: string | null,
      email?: string | null,
      technicalskills?: Array< TechSkills | null > | null,
      softskills?: Array< SoftSkills | null > | null,
      shorttermgoals?: string | null,
      longtermgoals?: string | null,
      hrsperweek?: string | null,
      interests?: Array< Interests | null > | null,
      feedback?: string | null,
      challenges?: string | null,
      motivation?: string | null,
      userId?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
