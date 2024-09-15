import React, { createContext, useContext, useState, ReactNode } from 'react'

// Define the shape of the context value
interface FormValidContextType {
  formValid: boolean
  setFormValid: (formValid: boolean) => void
}

// Create the context with a default undefined value
const FormValidContext = createContext<FormValidContextType | undefined>(
  undefined
)

// Define the props for the provider
interface FormValidProviderProps {
  children: ReactNode
}

// Provider component
export const FormValidProvider: React.FC<FormValidProviderProps> = ({
  children,
}) => {
  const [formValid, setFormValid] = useState<boolean>(false) // Default formValid is false

  return (
    <FormValidContext.Provider value={{ formValid, setFormValid }}>
      {children}
    </FormValidContext.Provider>
  )
}

// Custom hook to use the context
export const useFormValid = (): FormValidContextType => {
  const context = useContext(FormValidContext)
  if (context === undefined) {
    throw new Error('useFormValid must be used within a FormValidProvider')
  }
  return context
}
