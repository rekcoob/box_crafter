import {
  AppState,
  SET_INPUT,
  SET_THICKNESS,
  SET_BOX_STYLE,
  VALIDATE_FORM,
} from './types'

// Action creators (optional, like in Redux)
export const setInput = (
  field: keyof AppState['inputs'],
  value: number | null
) => ({
  type: SET_INPUT,
  field,
  value,
})

export const useThickness = (value: number) => ({
  type: SET_THICKNESS,
  value,
})

export const setBoxStyle = (value: string) => ({
  type: SET_BOX_STYLE,
  value,
})

export const validateForm = () => ({
  type: VALIDATE_FORM,
})
