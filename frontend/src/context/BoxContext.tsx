import React, { createContext, useState, ReactNode } from 'react'

// Define the Props interface
interface Results {
  length: number
  width: number
  height: number
}

interface BoxContextType {
  results: Results
  setResults: (results: Results) => void
  boxStyle: string
  setBoxStyle: (boxStyle: string) => void
  formValid: boolean
  setFormValid: (formValid: boolean) => void
}

// Create the context with a default undefined value
const BoxContext = createContext<BoxContextType | undefined>(undefined)

// Define the props for the provider
interface BoxProviderProps {
  children: ReactNode
}

// Provider component
export const BoxProvider: React.FC<BoxProviderProps> = ({ children }) => {
  const [results, setResults] = useState<Results>({
    length: 0,
    width: 0,
    height: 0,
  })
  const [boxStyle, setBoxStyle] = useState<string>('')
  const [formValid, setFormValid] = useState<boolean>(false)

  return (
    <BoxContext.Provider
      value={{
        results,
        setResults,
        boxStyle,
        setBoxStyle,
        formValid,
        setFormValid,
      }}
    >
      {children}
    </BoxContext.Provider>
  )
}
