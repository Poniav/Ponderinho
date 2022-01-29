export interface AppState {
    modal: boolean
    address: string[]
  }
  
  export enum Action {
    UPDATE_MODAL = 'UPDATE_MODAL',
    UPDATE_ADDRESS = 'UPDATE_WALLET',
  }
  
  interface GetModal {
    type: Action.UPDATE_MODAL
    modal: boolean
  }
  
  interface GetAddress {
    type: Action.UPDATE_ADDRESS
    address: string[]
  }
  
  export type AppActionTypes = GetModal | GetAddress
  