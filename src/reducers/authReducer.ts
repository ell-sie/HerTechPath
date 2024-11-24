import { signOut } from 'aws-amplify/auth'
import { Interests, Levels, SoftSkills, TechSkills } from '../API'

export enum Roles {
  Admin = 'admin',
  User = 'user',
}

export interface User {
  id: string
  email?: string
  name?: string
  technicalskills?: [TechSkills]
  softskills?: [SoftSkills]
  shorttermgoals?: string
  longtermgoals?: string
  hrsperweek?: string
  interests?: [Interests]
  feedback?: string
  challenges?: string
  motivation?: string
  level?: Levels
}

export interface AuthState {
  isAuthenticated: boolean
  user: User | null
}

export const initialUserState: AuthState = {
  isAuthenticated: false,
  user: null,
}

export enum Actions {
  SET_USER_DATA = 'SET_USER_DATA',
  LOGOUT = 'LOGOUT',
}

interface SetUserDataAction {
  type: Actions.SET_USER_DATA
  payload: User
}

interface LogoutAction {
  type: Actions.LOGOUT
}

export type AuthActionTypes = SetUserDataAction | LogoutAction

export default function authReducer(state: AuthState = initialUserState, action: AuthActionTypes) {
  switch (action.type) {
    case Actions.SET_USER_DATA:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      }

    case Actions.LOGOUT:
      signOut()

      return {
        isAuthenticated: false,
        user: null,
      }

    default:
      return state
  }
}
