// src/AppContext/reducer.ts
import { AppState, Action } from './types'
import { SET_INPUT, SET_THICKNESS, SET_BOX_STYLE, VALIDATE_FORM } from './types'

// Initial state
export const initialState: AppState = {
  inputs: {
    length: null,
    width: null,
    height: null,
  },
  thickness: 5,
  boxStyle: 'default',
  formValid: false,
}

// Reducer function
export const appReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case SET_INPUT:
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.field]: action.value,
        },
      }
    case SET_THICKNESS:
      return {
        ...state,
        thickness: action.value,
      }
    case SET_BOX_STYLE:
      return {
        ...state,
        boxStyle: action.value,
      }
    case VALIDATE_FORM: {
      const { length, width, height } = state.inputs
      const formValid =
        length !== null &&
        width !== null &&
        height !== null &&
        state.thickness > 0
      return {
        ...state,
        formValid,
      }
    }
    default:
      return state
  }
}
