import React, { useState } from 'react'
import styles from './BoxStyles.module.css'
import boxImage from '../../assets/images/box.jpg'
import boxOpenImage from '../../assets/images/box-open.jpg'
import halfImage from '../../assets/images/half.jpg'
import halfOpenImage from '../../assets/images/half-open.jpg'
// import boxQImage from '../../assets/images/box-q.jpg'

interface Option {
  label: string
  fefcoCode: string
  image: string
  alt: string
}

interface Options {
  [key: string]: Option
}

interface Props {
  onOptionSelected: (option: string) => void
}

const BoxStyles: React.FC<Props> = ({ onOptionSelected }) => {
  const [selectedOption, setSelectedOption] = useState<string>('box')

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
    // 'box-q': {
    //   label: 'Testing Box-Q',
    //   fefcoCode: '0200',
    //   image: boxQImage,
    //   alt: 'box-q',
    // },
  }

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = event.target.value
    setSelectedOption(selected)
    onOptionSelected(selected)
  }

  const { label, fefcoCode, image, alt } = options[selectedOption]

  return (
    <div className={styles.boxStylesSection}>
      <h3 className={styles.heading}>Box Style</h3>

      <select
        value={selectedOption}
        onChange={handleOptionChange}
        className={styles.customSelect}
      >
        {Object.keys(options).map((key) => (
          <option key={key} value={key}>
            {key.replace('-', ' ')}
          </option>
        ))}
      </select>

      {selectedOption && (
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
