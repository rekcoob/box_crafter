import React from 'react'
import styles from './BoxResults.module.css'

interface Props {
  results: {
    length: number
    width: number
    height: number
  }
  thickn: number
  boxStyle: string
  formValid: boolean
}

const BoxResults: React.FC<Props> = ({
  results,
  thickn,
  boxStyle,
  formValid,
}) => {
  const calculateFormat = () => {
    const { length, width, height } = results

    // Calculate flap height based on material thickness
    let flapHeight
    if (thickn === 5) {
      flapHeight = width / 2 + 4
    } else if (thickn === 4) {
      flapHeight = width / 2 + 2
    } else {
      flapHeight = width / 2 + 1
    }

    // Blank Size Format Calculation based on Box Style and Thickness
    // +38 = 40 for glueFlap and -2 from length at the end
    const boxLength = length + width + thickn * 2
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

  // Get Material Function
  const getMat = () => {
    const mapping: { [key: number]: string } = {
      5: 'BC',
      4: 'C',
      3: 'B',
    }
    return mapping[thickn] || ''
  }

  return (
    <div
      className={styles.resultsSection}
      style={{ opacity: formValid ? 1 : 0 }}
    >
      <h3 className={styles.heading}>Outer Dimensions</h3>

      <p>Length: {results.length + thickn * 2} mm</p>
      <p>Width: {results.width + thickn * 2} mm</p>
      <p>Height: {results.height + thickn * 4} mm</p>
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
