import React, { createContext, useReducer, ReactNode } from 'react'
import { appReducer, initialState } from './reducer'
import { AppState, Action } from './types'

// Create context
interface AppContextProps {
  state: AppState
  dispatch: React.Dispatch<Action>
}

export const AppContext = createContext<AppContextProps | undefined>(undefined)

// Provider component to wrap the app
export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(appReducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}
