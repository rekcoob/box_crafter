import React, { ChangeEvent } from 'react'
import styles from './DimensionsInput.module.css'
import { useFormValid } from '../../context/FormValidContext'
import { useDimensions } from '../../context/DimensionsContext'

const DimensionsInput: React.FC = () => {
  const { dimensions, setDimensions } = useDimensions()
  const { setFormValid } = useFormValid()

  // Function to validate the form
  const validateForm = (dimensions: {
    length: number
    width: number
    height: number
  }) => {
    const { length, width, height } = dimensions
    const isValid =
      length !== null &&
      width !== null &&
      height !== null &&
      length > 0 &&
      width > 0 &&
      height > 0

    setFormValid(isValid) // Update form validation state
  }

  // Handle input change for the dimensions
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const numericValue = value ? Number(value) : null // Convert input value to number or null

    // Update the dimensions in the context
    const updatedDimensions = {
      ...dimensions,
      [name]: numericValue,
    }
    setDimensions(updatedDimensions)

    // Validate form after updating dimensions
    validateForm(updatedDimensions)
  }

  return (
    <div className={styles.dimensionsSection}>
      <form>
        <div className='form-group'>
          <h3>Inner Dimensions (mm)</h3>
          <input
            name='length'
            type='number'
            // value={dimensions.length ?? ''} // Use empty string if null
            value={dimensions.length === 0 ? '' : dimensions.length} // Conditionally display empty string
            onChange={handleInputChange}
            placeholder='Length'
            required
          />
          <input
            name='width'
            type='number'
            value={dimensions.width === 0 ? '' : dimensions.width}
            onChange={handleInputChange}
            placeholder='Width'
            required
          />
          <input
            name='height'
            type='number'
            value={dimensions.height === 0 ? '' : dimensions.height}
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
