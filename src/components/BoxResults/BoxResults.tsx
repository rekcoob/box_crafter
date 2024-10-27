import React from 'react'
import { useDimensions } from '../../context/DimensionsContext'
import { useBoxStyle } from '../../context/BoxStyleContext'
import { useThickness } from '../../context/ThicknessContext'
import { useFormValid } from '../../context/FormValidContext'
import styles from './BoxResults.module.css'
import { useTranslation } from 'react-i18next'

const BoxResults: React.FC = () => {
  const { dimensions } = useDimensions()
  const { thickness } = useThickness()
  const { boxStyle } = useBoxStyle()
  const { formValid } = useFormValid()
  const { t } = useTranslation()

  const { length, width, height } = dimensions

  // Helper function to calculate flap height based on material thickness
  const calculateFlapHeight = (): number => {
    if (thickness === 5) {
      return width / 2 + 4
    } else if (thickness === 4) {
      return width / 2 + 2
    } else {
      return width / 2 + 1
    }
  }
  // Blank Size Format Calculation based on Box Style and Thickness
  // +38 = 40 for glueFlap and -2 from length at the end
  const calculateFormat = (): string => {
    const flapHeight = calculateFlapHeight()
    const boxLength = length + width + thickness * 2 // Box length calculation

    let format: string
    switch (boxStyle) {
      case 'box':
        format = `${boxLength * 2 + 38} x ${
          height + (thickness + flapHeight) * 2
        }`
        break
      case 'box-open':
        format = `${boxLength * 2 + 38} x ${height + thickness + flapHeight}`
        break
      case 'half':
        format = `${boxLength + 40} x ${height + (thickness + flapHeight) * 2}`
        break
      case 'half-open':
        format = `${boxLength + 40} x ${height + thickness + flapHeight}`
        break
      default:
        format = `${boxLength * 2 + 38} x ${
          height + (thickness + flapHeight) * 2
        }`
    }
    return format
  }

  // Dummy function for material - This should return a string based on thickness
  const getMat = (): string => {
    switch (thickness) {
      case 5:
        return 'BC'
      case 4:
        return 'C'
      case 3:
        return 'B'
      case 10:
        return 'AAC'
      default:
        return 'Unknown'
    }
  }

  return (
    <div
      className={styles.resultsSection}
      style={{ opacity: formValid ? 1 : 0 }}
    >
      <div className=''>
        <h3 className={styles.heading}>{t('outerDimensions')}</h3>
        <p>
          {t('length')}: {length + thickness * 2} mm
        </p>
        <p>
          {t('width')}: {width + thickness * 2} mm
        </p>
        <p>
          {t('height')}: {height + thickness * 4} mm
        </p>
      </div>

      <p>
        <strong>
          {t('material')}: {getMat()}
        </strong>
      </p>
      <p>
        <strong>{t('format')}: </strong>
        {calculateFormat()} mm
      </p>
    </div>
  )
}

export default BoxResults
