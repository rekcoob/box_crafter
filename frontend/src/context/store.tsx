import { createContext, useContext, useState, ReactNode } from 'react'

// Define the type for our context state
interface ThciknState {
  value: string
  setValue: (newValue: string) => void
}

// Create the context with a default value
const ThciknContext = createContext<ThciknState | undefined>(undefined)

// Create a provider component
export const ThciknProvider = ({ children }: { children: ReactNode }) => {
  const [value, setValue] = useState<string>('') // initial value is an empty string

  return (
    <ThciknContext.Provider value={{ value, setValue }}>
      {children}
    </ThciknContext.Provider>
  )
}

// Create a hook to use the context in any component
export const useThciknContext = () => {
  const context = useContext(ThciknContext)
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}
