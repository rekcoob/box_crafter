import styles from './MaterialButtons.module.css'
import { useThickness } from '../../context/ThicknessContext'
// import { useColor } from '../../context/ColorContext'

const MaterialButtons: React.FC = () => {
  const { thickness, setThickness } = useThickness()
  // const { setColor } = useColor()

  const materials = [
    { label: 'B', materialThickness: 3, color: 'orange' },
    { label: 'C', materialThickness: 4, color: 'green' },
    { label: 'BC', materialThickness: 5, color: '#0056b3' }, // Default blue
  ]

  const handleMaterialChange = (materialThickness: number, color: string) => {
    setThickness(materialThickness)
    // setColor(color) // Update the global primary color
    document.documentElement.style.setProperty('--primary-color', color)
  }

  return (
    <div className={`${styles.materialSection} flex-col center`}>
      <h3>Material</h3>
      <div>
        {materials.map(({ label, materialThickness, color }) => (
          <button
            data-testid={`btn ${materialThickness}`}
            key={materialThickness}
            className={`${styles.btnPrimary} ${
              thickness === materialThickness ? styles.active : ''
            }`}
            onClick={() => handleMaterialChange(materialThickness, color)}
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
