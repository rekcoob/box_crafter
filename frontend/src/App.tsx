import React, { useState, useMemo } from 'react'
import './App.css'
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
  const [thickn, setThickn] = useState<number>(5)
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

  const handleThicknChange = (t: number) => {
    setThickn(t)
  }

  const updateSelectedOption = (option: string) => {
    setBoxStyle(option)
  }

  return (
    <div className='container'>
      <h2>Box Crafter</h2>
      {/* <p>Converting Box Dimensions into a DXF Design</p> */}
      <div className='flex center selfcenter'>
        <div className='flex-col'>
          <MaterialButtons onThicknChanged={handleThicknChange} />
          <DimensionsInput onInputsChanged={handleInputsChange} />
        </div>
        <BoxStyles onOptionSelected={updateSelectedOption} />
      </div>

      <DownloadBtn
        results={processedInputs}
        thickn={thickn}
        boxStyle={boxStyle}
        formValid={formValid}
      />

      <BoxResults
        results={processedInputs}
        thickn={thickn}
        boxStyle={boxStyle}
        formValid={formValid}
      />
    </div>
  )
}

export default BoxCrafter
