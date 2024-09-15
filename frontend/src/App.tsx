import React, { useState, useMemo } from 'react'
import './App.css'
import { ThicknessProvider } from './context/ThicknessContext'
import { FormValidProvider } from './context/FormValidContext'
import MaterialButtons from './components/MaterialButtons/MaterialButtons' // Adjust the path based on your project structure
import DimensionsInput from './components/DimensionsInput/DimensionsInput'
import BoxStyles from './components/BoxStyles/BoxStyles'
import BoxResults from './components/BoxResults/BoxResults'
import DownloadBtn from './components/DownloadBtn/DownloadBtn'

interface Inputs {
  length: number | null
  width: number | null
  height: number | null
}

const BoxCrafter: React.FC = () => {
  const [inputs, setInputs] = useState<Inputs>({
    length: null,
    width: null,
    height: null,
  })

  const [boxStyle, setBoxStyle] = useState<string>('box')
  const [formValid, setFormValid] = useState<boolean>(false)

  // Memoized processed inputs, swaps width and length if width > length
  const processedInputs = useMemo(() => {
    const { length, width, height } = inputs
    if (width !== null && length !== null && width > length) {
      return { length: width, width: length, height }
    }
    return inputs
  }, [inputs])

  // Handlers for child components
  const handleInputsChange = (data: { inputs: Inputs; formValid: boolean }) => {
    setInputs(data.inputs)
    setFormValid(data.formValid)
  }

  const updateSelectedOption = (option: string) => {
    setBoxStyle(option)
  }

  return (
    <ThicknessProvider>
      <FormValidProvider>
        <div className='container'>
          <h2>Box Crafter</h2>
          {/* <p>Converting Box Dimensions into a DXF Design</p> */}
          <div className='flex center selfcenter'>
            <div className='flex-col'>
              {/* <MaterialButtons onThicknChanged={handleThicknChange} /> */}
              <MaterialButtons />
              <DimensionsInput />
            </div>
            <BoxStyles onOptionSelected={updateSelectedOption} />
          </div>

          <DownloadBtn results={processedInputs} boxStyle={boxStyle} />

          <BoxResults results={processedInputs} boxStyle={boxStyle} />
        </div>
      </FormValidProvider>
    </ThicknessProvider>
  )
}

export default BoxCrafter
