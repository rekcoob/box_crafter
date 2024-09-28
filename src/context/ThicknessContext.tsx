import React, { createContext, useContext, useState, ReactNode } from 'react'

// Define the shape of the context value
interface ThicknessContextType {
  thickness: number
  setThickness: (thickness: number) => void
}

// Create the context with a default undefined value
const ThicknessContext = createContext<ThicknessContextType | undefined>(
  undefined
)

// Define the props for the provider
interface ThicknessProviderProps {
  children: ReactNode
}

// Provider component
export const ThicknessProvider: React.FC<ThicknessProviderProps> = ({
  children,
}) => {
  const [thickness, setThickness] = useState<number>(5) // Default thickness is 5 (BC)

  return (
    <ThicknessContext.Provider value={{ thickness, setThickness }}>
      {children}
    </ThicknessContext.Provider>
  )
}

// Custom hook to use the context
export const useThickness = (): ThicknessContextType => {
  const context = useContext(ThicknessContext)
  if (context === undefined) {
    throw new Error('useThickness must be used within a ThicknessProvider')
  }
  return context
}
