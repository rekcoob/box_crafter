import React from 'react'
import styles from './BoxStyles.module.css'
import boxImage from '../../assets/images/box.jpg'
import boxOpenImage from '../../assets/images/box-open.jpg'
import halfImage from '../../assets/images/half.jpg'
import halfOpenImage from '../../assets/images/half-open.jpg'
// import boxQImage from '../../assets/images/box-q.jpg'
import { useBoxStyle } from '../../context/BoxStyleContext'

interface Option {
  label: string
  fefcoCode: string
  image: string
  alt: string
}

interface Options {
  [key: string]: Option
}

const BoxStyles: React.FC = () => {
  const { boxStyle, setBoxStyle } = useBoxStyle() // Use the BoxStyle context

  const options: Options = {
    box: {
      label: 'Regular Slotted Box',
      fefcoCode: '0201',
      image: boxImage,
      alt: 'box image',
    },
    'box-open': {
      label: 'Half Slotted Box',
      fefcoCode: '0200',
      image: boxOpenImage,
      alt: 'box-open',
    },
    half: {
      label: 'Slotted Half',
      fefcoCode: '0201',
      image: halfImage,
      alt: 'half',
    },
    'half-open': {
      label: 'Half Slotted Half',
      fefcoCode: '0200',
      image: halfOpenImage,
      alt: 'half-open',
    },
  }

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setBoxStyle(event.target.value) // Update the box style in the context
  }

  const { label, fefcoCode, image, alt } = options[boxStyle]

  return (
    <div className={styles.boxStylesSection}>
      <h3 className={styles.heading}>Box Style</h3>

      <select
        value={boxStyle}
        onChange={handleOptionChange}
        className={styles.customSelect}
      >
        {Object.keys(options).map((key) => (
          <option key={key} value={key}>
            {key.replace('-', ' ')}
          </option>
        ))}
      </select>

      {boxStyle && (
        <div>
          <p>{label}</p>
          <p className={styles.paragraph}>
            <b>FEFCO Code:</b> {fefcoCode}
          </p>
          <img src={image} alt={alt} className={styles.img} />
        </div>
      )}
    </div>
  )
}

export default BoxStyles
