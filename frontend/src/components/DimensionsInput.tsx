import React, { useState } from 'react'

interface Inputs {
  length: number | null
  width: number | null
  height: number | null
}

interface Props {
  onInputsChanged: (data: { inputs: Inputs; formValid: boolean }) => void
}

const DimensionsForm: React.FC<Props> = ({ onInputsChanged }) => {
  const [inputs, setInputs] = useState<Inputs>({
    length: null,
    width: null,
    height: null,
  })
  const [formValid, setFormValid] = useState<boolean>(false)

  const emitInputs = () => {
    const isFormValid =
      inputs.length !== null && inputs.width !== null && inputs.height !== null
    setFormValid(isFormValid)
    onInputsChanged({ inputs, formValid: isFormValid })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInputs({
      ...inputs,
      [name]: value ? Number(value) : null, // Ensure the value is treated as a number or null
    })
    emitInputs()
  }

  return (
    <div className='dimensions_section border'>
      <form>
        <div className='form-group'>
          <h3>Inner Dimensions (mm)</h3>
          <input
            name='length'
            type='number'
            value={inputs.length ?? ''}
            onChange={handleChange}
            placeholder='Length'
            required
          />
          <input
            name='width'
            type='number'
            value={inputs.width ?? ''}
            onChange={handleChange}
            placeholder='Width'
            required
          />
          <input
            name='height'
            type='number'
            value={inputs.height ?? ''}
            onChange={handleChange}
            placeholder='Height'
            required
          />
        </div>
      </form>
    </div>
  )
}

export default DimensionsForm
