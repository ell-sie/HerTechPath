export type MenuAnchorElementType = null | HTMLElement

export enum MenuAnchorElementActionTypes {
  HIDE = 'HIDE',
  UNHIDE = 'UNHIDE',
}

export interface MenuAnchorElementAction {
  type: MenuAnchorElementActionTypes
  payload: null | HTMLElement
}

export const initialMenuAnchorElement = null

export default function menuAnchorElementReducer(
  _state: MenuAnchorElementType,
  { payload }: MenuAnchorElementAction,
) {
  return payload
}
