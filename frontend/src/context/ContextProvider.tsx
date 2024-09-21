import React from 'react'
import { ThicknessProvider } from './ThicknessContext'
import { DimensionsProvider } from './DimensionsContext'
import { BoxStyleProvider } from './BoxStyleContext'
import { FormValidProvider } from './FormValidContext'
import { ThemeProvider } from './ThemeContext'
import { ColorSchemeProvider } from './ColorSchemeContext'

const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ThemeProvider>
      <ColorSchemeProvider>
        <ColorSchemeProvider>
          <ThicknessProvider>
            <DimensionsProvider>
              <BoxStyleProvider>
                <FormValidProvider>{children}</FormValidProvider>
              </BoxStyleProvider>
            </DimensionsProvider>
          </ThicknessProvider>
        </ColorSchemeProvider>
      </ColorSchemeProvider>
    </ThemeProvider>
  )
}

export default ContextProvider
