// Define the shape of the app state
export interface AppState {
  inputs: {
    length: number | null
    width: number | null
    height: number | null
  }
  thickness: number
  boxStyle: string
  formValid: boolean
}

// Define action types as constants
export const SET_INPUT = 'SET_INPUT'
export const SET_THICKNESS = 'SET_THICKNESS'
export const SET_BOX_STYLE = 'SET_BOX_STYLE'
export const VALIDATE_FORM = 'VALIDATE_FORM'

// Define the action types as a union type
export type Action =
  | {
      type: typeof SET_INPUT
      field: keyof AppState['inputs']
      value: number | null
    }
  | { type: typeof SET_THICKNESS; value: number }
  | { type: typeof SET_BOX_STYLE; value: string }
  | { type: typeof VALIDATE_FORM }
