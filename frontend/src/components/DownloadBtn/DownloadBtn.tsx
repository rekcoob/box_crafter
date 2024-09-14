import React, { useState } from 'react'
import styles from './DownloadBtn.module.css'
import { downloadFile as downloadFileService } from '../../services/downloadFile'

interface Props {
  results: {
    length: number
    width: number
    height: number
  }
  thickn: number
  boxStyle: string
  formValid: boolean
}

const DownloadBtn: React.FC<Props> = ({
  results,
  thickn,
  boxStyle,
  formValid,
}) => {
  const [errorMessage, setErrorMessage] = useState<string>('')

  const downloadFile = async () => {
    if (!formValid) {
      setErrorMessage('Please Fill All Dimensions!')
      return
    }
    try {
      await downloadFileService(results, thickn, boxStyle)
    } catch (err) {
      console.error('Error downloading file:', err)
    }
  }

  return (
    <div className={`${styles.downloadSection} flex-col`}>
      {/* Error message */}
      {!formValid && <p className='error-message'>{errorMessage}</p>}
      <button
        className={`${styles.btnPrimary} ${formValid ? styles.ready : ''}`}
        onClick={downloadFile}
      >
        Download
      </button>
    </div>
  )
}

export default DownloadBtn
