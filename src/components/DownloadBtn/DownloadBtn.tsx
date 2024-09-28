import React, { useState } from 'react'
import styles from './DownloadBtn.module.css'
import { useDimensions } from '../..//context/DimensionsContext'
import { useThickness } from '../../context/ThicknessContext'
import { useFormValid } from '../../context/FormValidContext'
import { useBoxStyle } from '../../context/BoxStyleContext'
import { downloadFile } from '../../services/downloadFile'

const DownloadBtn: React.FC = () => {
  const { thickness } = useThickness()
  const { boxStyle } = useBoxStyle()
  const { formValid } = useFormValid()
  const { dimensions } = useDimensions() // Use dimensions context
  const [errorMessage, setErrorMessage] = useState<string>('')

  const handleDownload = async () => {
    if (!formValid) {
      setErrorMessage('Please fill all dimensions correctly!')
      return
    }

    try {
      await downloadFile(dimensions, thickness, boxStyle)
    } catch (err) {
      setErrorMessage('Error downloading the file. Please try again later.')
      console.error('Download error:', err)
    }
  }

  return (
    <div className={`${styles.downloadSection} flex-col`}>
      {errorMessage && <p className='error-message'>{errorMessage}</p>}
      <button
        className={`${styles.btnPrimary} ${formValid ? styles.ready : ''}`}
        onClick={handleDownload}
        disabled={!formValid} // Disable the button if form is not valid
      >
        Download
      </button>
    </div>
  )
}

export default DownloadBtn
