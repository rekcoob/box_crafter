import React, { createContext, useState, useContext, useEffect } from 'react'

// Define the type for our ColorContext
interface ColorContextType {
  color: string
  setColor: (newColor: string) => void
}

// Create the ColorContext with default values
const ColorContext = createContext<ColorContextType | undefined>(undefined)

// ColorProvider component that wraps the app
export const ColorProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Default color is 'blue' (for 'BC')
  const [color, setColor] = useState<string>('#0056b3')

  // Update the CSS variable when the color changes
  useEffect(() => {
    document.documentElement.style.setProperty('--primary-color', color)
  }, [color]) // Run this effect whenever the color changes

  return (
    <ColorContext.Provider value={{ color, setColor }}>
      {children}
    </ColorContext.Provider>
  )
}

// Create a custom hook to use the ColorContext
export const useColor = () => {
  const context = useContext(ColorContext)
  if (!context) {
    throw new Error('useColor must be used within a ColorProvider')
  }
  return context
}
