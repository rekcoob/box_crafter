import styles from './MaterialButtons.module.css'
import { useThickness } from '../../context/ThicknessContext'
import { useTranslation } from 'react-i18next'

const MaterialButtons: React.FC = () => {
  const { thickness, setThickness } = useThickness()
  const { t } = useTranslation()

  const materials = [
    { label: 'B', materialThickness: 3 },
    { label: 'C', materialThickness: 4 },
    { label: 'BC', materialThickness: 5 },
    { label: 'AAC', materialThickness: 10 },
  ]

  return (
    <div className={`${styles.materialSection} flex-col center`}>
      <h3 className={styles.heading}>{t('material')}</h3>
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
        {/* <b>Thickness:</b> {thickness} mm */}
        <b>{t('thickness')}:</b> {thickness} mm
      </p>
    </div>
  )
}

export default MaterialButtons
