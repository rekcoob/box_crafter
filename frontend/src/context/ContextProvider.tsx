import React from 'react'
import { ThicknessProvider } from './ThicknessContext'
import { DimensionsProvider } from './DimensionsContext'
import { BoxStyleProvider } from './BoxStyleContext'
import { FormValidProvider } from './FormValidContext'
import { ThemeProvider } from './ThemeContext' // Import ThemeProvider

const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ThemeProvider>
      <ThicknessProvider>
        <DimensionsProvider>
          <BoxStyleProvider>
            <FormValidProvider>{children}</FormValidProvider>
          </BoxStyleProvider>
        </DimensionsProvider>
      </ThicknessProvider>
    </ThemeProvider>
  )
}

export default ContextProvider
