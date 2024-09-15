import React from 'react'
import { useDimensions } from '../../context/DimensionsContext'
import { useBoxStyle } from '../../context/BoxStyleContext'
import { useThickness } from '../../context/ThicknessContext'
import { useFormValid } from '../../context/FormValidContext'
import styles from './BoxResults.module.css'

const BoxResults: React.FC = () => {
  const { dimensions } = useDimensions() // Retrieve dimensions from context
  const { thickness: thickn } = useThickness() // Retrieve thickness from context
  const { boxStyle } = useBoxStyle() // Retrieve thickness from context
  const { formValid } = useFormValid()

  const { length, width, height } = dimensions

  // Helper function to calculate flap height based on material thickness
  const calculateFlapHeight = (): number => {
    if (thickn === 5) {
      return width / 2 + 4
    } else if (thickn === 4) {
      return width / 2 + 2
    } else {
      return width / 2 + 1
    }
  }
  // Blank Size Format Calculation based on Box Style and Thickness
  // +38 = 40 for glueFlap and -2 from length at the end
  const calculateFormat = (): string => {
    const flapHeight = calculateFlapHeight()
    const boxLength = length + width + thickn * 2 // Box length calculation

    let format: string
    switch (boxStyle) {
      case 'box':
        format = `${boxLength * 2 + 38} x ${height + (thickn + flapHeight) * 2}`
        break
      case 'box-open':
        format = `${boxLength * 2 + 38} x ${height + thickn + flapHeight}`
        break
      case 'half':
        format = `${boxLength + 40} x ${height + (thickn + flapHeight) * 2}`
        break
      case 'half-open':
        format = `${boxLength + 40} x ${height + thickn + flapHeight}`
        break
      default:
        format = `${boxLength * 2 + 38} x ${height + (thickn + flapHeight) * 2}`
    }
    return format
  }

  // Dummy function for material - This should return a string based on thickness
  const getMat = (): string => {
    switch (thickn) {
      case 5:
        return 'BC'
      case 4:
        return 'C'
      case 3:
        return 'B'
      default:
        return 'Unknown'
    }
  }

  return (
    <div
      className={styles.resultsSection}
      style={{ opacity: formValid ? 1 : 0 }}
    >
      <h3 className={styles.heading}>Outer Dimensions</h3>

      <p>Length: {length + thickn * 2} mm</p>
      <p>Width: {width + thickn * 2} mm</p>
      <p>Height: {height + thickn * 4} mm</p>
      <br />
      <p>Material: {getMat()}</p>
      <br />
      <p>
        <strong>Format: </strong>
        {calculateFormat()} mm
      </p>
    </div>
  )
}

export default BoxResults
