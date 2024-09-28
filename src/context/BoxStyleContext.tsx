import React, { createContext, useContext, useState, ReactNode } from 'react'

// Define the shape of the BoxStyle context
interface BoxStyleContextType {
  boxStyle: string
  setBoxStyle: (style: string) => void
}

// Create the context with a default undefined value
const BoxStyleContext = createContext<BoxStyleContextType | undefined>(
  undefined
)

// Provider component
export const BoxStyleProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [boxStyle, setBoxStyle] = useState<string>('box') // Default value is 'box'

  return (
    <BoxStyleContext.Provider value={{ boxStyle, setBoxStyle }}>
      {children}
    </BoxStyleContext.Provider>
  )
}

// Custom hook to use the BoxStyleContext
export const useBoxStyle = (): BoxStyleContextType => {
  const context = useContext(BoxStyleContext)
  if (!context) {
    throw new Error('useBoxStyle must be used within a BoxStyleProvider')
  }
  return context
}
