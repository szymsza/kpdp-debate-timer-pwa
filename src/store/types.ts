export interface StoreContent {
  error: string,
}

export type StoreActionType = 'SET_ERROR';

export interface StoreAction {
  type: StoreActionType
  payload: any
}
