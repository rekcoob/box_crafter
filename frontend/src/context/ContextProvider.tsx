import React from 'react'
import { ThicknessProvider } from './ThicknessContext'
import { DimensionsProvider } from './DimensionsContext'
import { BoxStyleProvider } from './BoxStyleContext'
import { FormValidProvider } from './FormValidContext'
import { ThemeProvider } from './ThemeContext'
import { ColorProvider } from './ColorContext'

const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ThemeProvider>
      <ColorProvider>
        <ThicknessProvider>
          <DimensionsProvider>
            <BoxStyleProvider>
              <FormValidProvider>{children}</FormValidProvider>
            </BoxStyleProvider>
          </DimensionsProvider>
        </ThicknessProvider>
      </ColorProvider>
    </ThemeProvider>
  )
}

export default ContextProvider
