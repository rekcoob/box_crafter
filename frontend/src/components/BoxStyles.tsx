import React, { useState } from 'react'
import boxImage from '../assets/images/box.jpg'
import boxOpenImage from '../assets/images/box-open.jpg'
import halfImage from '../assets/images/half.jpg'
import halfOpenImage from '../assets/images/half-open.jpg'
import boxQImage from '../assets/images/box-q.jpg'

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
    'box-q': {
      label: 'Testing Box-Q',
      fefcoCode: '0200',
      image: boxQImage,
      alt: 'box-q',
    },
  }

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = event.target.value
    setSelectedOption(selected)
    onOptionSelected(selected)
  }

  return (
    <div className='boxstyles_section border'>
      <h3>Box Style</h3>

      <select
        value={selectedOption}
        onChange={handleOptionChange}
        className='custom-select'
      >
        <option value='box'>box</option>
        <option value='box-open'>box open</option>
        <option value='half'>half</option>
        <option value='half-open'>half open</option>
        {/* <option value="box-q">test</option> */}
      </select>

      {selectedOption && (
        <div>
          <p>{options[selectedOption].label}</p>
          <p>
            <b>FEFCO Code:</b> {options[selectedOption].fefcoCode}
          </p>
          <img
            src={options[selectedOption].image}
            alt={options[selectedOption].alt}
            style={{ width: '500px', height: 'auto' }}
          />
        </div>
      )}
    </div>
  )
}

export default BoxStyles
