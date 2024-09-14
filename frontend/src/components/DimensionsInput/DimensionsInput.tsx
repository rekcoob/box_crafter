import React, { useState, useEffect } from 'react'
import styles from './DimensionsInput.module.css'

interface Inputs {
  length: number | null
  width: number | null
  height: number | null
}

// interface Props {
//   onInputsChanged: (data: { inputs: Inputs; formValid: boolean }) => void
// }
interface Props {
  onInputsChanged: (inputs: { inputs: Inputs; formValid: boolean }) => void
}

const DimensionsInput: React.FC<Props> = ({ onInputsChanged }) => {
  const [inputs, setInputs] = useState<Inputs>({
    length: null,
    width: null,
    height: null,
  })
  const [formValid, setFormValid] = useState<boolean>(false)

  useEffect(() => {
    // Validate form when any of the inputs change
    const isFormValid =
      inputs.length !== null && inputs.width !== null && inputs.height !== null
    setFormValid(isFormValid)

    // Emit inputs and form validity to the parent
    onInputsChanged({ inputs, formValid: isFormValid })
  }, [inputs, onInputsChanged])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value ? parseFloat(value) : null,
    }))
  }

  return (
    <div className={styles.dimensionsSection}>
      <form>
        <div className='form-group'>
          <h3>Inner Dimensions (mm)</h3>
          <input
            name='length'
            type='number'
            value={inputs.length ?? ''}
            onChange={handleInputChange}
            placeholder='Length'
            required
          />
          <input
            name='width'
            type='number'
            value={inputs.width ?? ''}
            onChange={handleInputChange}
            placeholder='Width'
            required
          />
          <input
            name='height'
            type='number'
            value={inputs.height ?? ''}
            onChange={handleInputChange}
            placeholder='Height'
            required
          />
        </div>
      </form>
    </div>
  )
}

export default DimensionsInput
