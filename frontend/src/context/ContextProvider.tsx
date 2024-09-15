import React from 'react'
import { ThicknessProvider } from './ThicknessContext'
import { DimensionsProvider } from './DimensionsContext'
import { BoxStyleProvider } from './BoxStyleContext'
import { FormValidProvider } from './FormValidContext'

const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ThicknessProvider>
      <DimensionsProvider>
        <BoxStyleProvider>
          <FormValidProvider>{children}</FormValidProvider>
        </BoxStyleProvider>
      </DimensionsProvider>
    </ThicknessProvider>
  )
}

export default ContextProvider
