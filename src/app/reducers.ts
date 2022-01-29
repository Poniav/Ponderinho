import { Action, AppActionTypes, AppState } from './types'

const initialState: AppState = {
  modal: false,
  address: ['toto'],
}

export function AppReducer(
  state: AppState = initialState,
  action: AppActionTypes
): AppState {
  switch (action.type) {
    case Action.UPDATE_MODAL:
      return {
        ...state,
        modal: action.modal,
      }
    case Action.UPDATE_ADDRESS:
      return {
        ...state,
        address: action.address,
      }
  }
  return state
}

export default AppReducer
