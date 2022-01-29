// import { ThunkAction } from 'redux-thunk'
import { Action, AppActionTypes } from './types'

// type ThunkResult<R = void> = ThunkAction<R, AppState, undefined, AppActionTypes>

export function GetModal(modal: boolean): AppActionTypes {
  return {
    type: Action.UPDATE_MODAL,
    modal,
  }
}

export function setWallet(address: string[]): AppActionTypes {
  return {
    type: Action.UPDATE_ADDRESS,
    address,
  }
}
