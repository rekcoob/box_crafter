import styles from './MaterialButtons.module.css'
import { useThickness } from '../../context/ThicknessContext'

const MaterialButtons: React.FC = () => {
  const { thickness, setThickness } = useThickness()

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
