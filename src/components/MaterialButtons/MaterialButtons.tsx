import styles from './MaterialButtons.module.css'
import { useThickness } from '../../context/ThicknessContext'
// import { useColor } from '../../context/ColorContext'

const MaterialButtons: React.FC = () => {
  const { thickness, setThickness } = useThickness()
  // const { setColor } = useColor()

  const materials = [
    { label: 'B', materialThickness: 3 },
    { label: 'C', materialThickness: 4 },
    { label: 'BC', materialThickness: 5 },
  ]

  return (
    <div className={`${styles.materialSection} flex-col center`}>
      <h3>Material</h3>
      <div>
        {materials.map(({ label, materialThickness }) => (
          <button
            data-testid={`btn ${materialThickness}`}
            key={materialThickness}
            className={`${styles.btnPrimary} ${
              thickness === materialThickness ? styles.active : ''
            }`}
            onClick={() => setThickness(materialThickness)}
          >
            {label}
          </button>
        ))}
      </div>
      <p>
        <b>Thickness:</b> {thickness} mm
      </p>
    </div>
  )
}

export default MaterialButtons
