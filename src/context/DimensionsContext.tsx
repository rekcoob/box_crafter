import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
} from 'react'

// Define the shape of the context value
interface Dimensions {
  length: number
  width: number
  height: number
}

interface DimensionsContextType {
  dimensions: Dimensions
  setDimensions: (dimensions: Dimensions) => void
}

// Create the context with default values
const DimensionsContext = createContext<DimensionsContextType | undefined>(
  undefined
)

// Define the props for the provider
interface DimensionsProviderProps {
  children: ReactNode
}

// Provider component
export const DimensionsProvider: React.FC<DimensionsProviderProps> = ({
  children,
}) => {
  const [dimensions, setDimensions] = useState<Dimensions>({
    length: 0, // Set to 0 instead of null to avoid extra null checks
    width: 0,
    height: 0,
  })

  // Memoize the context value to avoid unnecessary re-renders
  const value = useMemo(() => ({ dimensions, setDimensions }), [dimensions])

  return (
    <DimensionsContext.Provider value={value}>
      {children}
    </DimensionsContext.Provider>
  )
}

// Custom hook to use the context
export const useDimensions = (): DimensionsContextType => {
  const context = useContext(DimensionsContext)
  if (!context) {
    throw new Error('useDimensions must be used within a DimensionsProvider')
  }
  return context
}
