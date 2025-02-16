import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ReactGA from 'react-ga4'

import { useDimensions } from '../../context/DimensionsContext'
import { useThickness } from '../../context/ThicknessContext'
import { useFormValid } from '../../context/FormValidContext'
import { useBoxStyle } from '../../context/BoxStyleContext'

import { downloadFile } from '../../services/downloadFile'
import styles from './DownloadBtn.module.css'

export default function DownloadBtn() {
  const { thickness } = useThickness()
  const { boxStyle } = useBoxStyle()
  const { formValid } = useFormValid()
  const { dimensions } = useDimensions()
  const [errorMessage, setErrorMessage] = useState<string>('')
  const { t } = useTranslation()

  const handleDownload = async () => {
    if (!formValid) {
      setErrorMessage('Please fill all dimensions correctly!')
      return
    }
    // Google Analytics Event Tracking
    ReactGA.event({
      category: 'Box Crafter',
      action: 'Clicked Box_Download DXF Button',
      label: 'Download_DXF',
    })
    try {
      await downloadFile(dimensions, thickness, boxStyle)
    } catch (err) {
      setErrorMessage('Error downloading the file. Please try again later.')
      console.error('Download error:', err)
    }
  }

  return (
    <div className={styles.downloadSection}>
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
      <button
        className={`${styles.downloadButton} ${formValid ? styles.ready : ''}`}
        onClick={handleDownload}
        disabled={!formValid}
      >
        {t('download')}
      </button>
    </div>
  )
}
