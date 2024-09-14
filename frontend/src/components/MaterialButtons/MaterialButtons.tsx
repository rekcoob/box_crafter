import React, { useState, useCallback } from 'react'
import styles from './MaterialButtons.module.css'

interface Props {
  onThicknChanged: (thickn: number) => void
}

const MaterialButtons: React.FC<Props> = ({ onThicknChanged }) => {
  // const [mat, setMat] = useState<number>(3) // Default material is 'BC'
  const [selectedThickness, setSelectedThickness] = useState<number>(5) // Default thickness is 5

  const materials = [
    { label: 'B', thickness: 3 },
    { label: 'C', thickness: 4 },
    { label: 'BC', thickness: 5 },
  ]

  const switchActive = useCallback(
    (newThickness: number) => {
      setSelectedThickness(newThickness)
      onThicknChanged(newThickness)
    },
    [onThicknChanged]
  )

  return (
    <div className={`${styles.materialSection} flex-col center`}>
      <h3>Material</h3>
      <div>
        {materials.map(({ label, thickness }) => (
          <button
            key={thickness}
            className={`${styles.btnPrimary} ${
              selectedThickness === thickness ? styles.active : ''
            }`}
            onClick={() => switchActive(thickness)}
          >
            {label}
          </button>
        ))}
      </div>
      <p>
        <b>Thickness:</b> {selectedThickness} mm
      </p>
    </div>
  )
}

export default MaterialButtons
