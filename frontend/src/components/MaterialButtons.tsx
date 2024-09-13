import React, { useState } from 'react'

interface Props {
  onThicknChanged: (thickn: number) => void
}

const MaterialSection: React.FC<Props> = ({ onThicknChanged }) => {
  const [mat, setMat] = useState<number>(3) // Default material is 'BC'
  const [thickn, setThickn] = useState<number>(5) // Default thickness is 5

  const switchActive = (n: number) => {
    setMat(n)

    let newThickn
    switch (n) {
      case 1:
        newThickn = 3
        break
      case 2:
        newThickn = 4
        break
      default:
        newThickn = 5
    }
    setThickn(newThickn)
    onThicknChanged(newThickn) // Emit thickness change
  }

  return (
    <div className='material_section flex-col center border'>
      <h3>Material</h3>
      <div className='flex'>
        <button
          className={`btn-primary ${mat === 1 ? 'active' : ''}`}
          onClick={() => switchActive(1)}
        >
          B
        </button>
        <button
          className={`btn-primary ${mat === 2 ? 'active' : ''}`}
          onClick={() => switchActive(2)}
        >
          C
        </button>
        <button
          className={`btn-primary ${mat === 3 ? 'active' : ''}`}
          onClick={() => switchActive(3)}
        >
          BC
        </button>
      </div>
      <p>
        <b>Thickness:</b> {thickn} mm
      </p>
    </div>
  )
}

export default MaterialSection
