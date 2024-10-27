import React, { useEffect, useState } from 'react'
import styles from './BoxStyles.module.css'
import boxImageLight from '../../assets/images/box-light.jpg'
import boxOpenImageLight from '../../assets/images/box-open-light.jpg'
import halfImageLight from '../../assets/images/half-light.jpg'
import halfOpenImageLight from '../../assets/images/half-open-light.jpg'

import boxImageDark from '../../assets/images/box-dark.png'
import boxOpenImageDark from '../../assets/images/box-open-dark.png'
import halfImageDark from '../../assets/images/half-dark.png'
import halfOpenImageDark from '../../assets/images/half-open-dark.png'

import { useBoxStyle } from '../../context/BoxStyleContext'
import { useTheme } from '../../context/ThemeContext'
import { useTranslation } from 'react-i18next'

interface Option {
  label: string
  fefcoCode: string
  image: string
  alt: string
}

interface Options {
  [key: string]: Option
}

const BoxStyles: React.FC = () => {
  const { theme } = useTheme()
  const { boxStyle, setBoxStyle } = useBoxStyle()
  const { t } = useTranslation()

  // Define image sets based on theme
  const images =
    theme === 'light'
      ? {
          box: boxImageLight,
          'box-open': boxOpenImageLight,
          half: halfImageLight,
          'half-open': halfOpenImageLight,
        }
      : {
          box: boxImageDark,
          'box-open': boxOpenImageDark,
          half: halfImageDark,
          'half-open': halfOpenImageDark,
        }

  const options: Options = {
    box: {
      label: t('regularSlottedBox'),
      fefcoCode: '0201',
      image: images.box,
      alt: t('boxImageAlt'),
    },
    'box-open': {
      label: t('halfSlottedBox'),
      fefcoCode: '0200',
      image: images['box-open'],
      alt: t('boxOpenImageAlt'),
    },
    half: {
      label: t('slottedHalf'),
      fefcoCode: '0201',
      image: images.half,
      alt: t('halfImageAlt'),
    },
    'half-open': {
      label: t('halfSlottedHalf'),
      fefcoCode: '0200',
      image: images['half-open'],
      alt: t('halfOpenImageAlt'),
    },
  }

  // State for controlling the fade transition
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [currentImage, setCurrentImage] = useState(options[boxStyle].image)

  // Trigger transition only on theme change
  useEffect(() => {
    setIsTransitioning(true) // Start the fade-out

    const transitionTimeout = setTimeout(() => {
      setCurrentImage(options[boxStyle].image) // Update the image
      setIsTransitioning(false) // Fade-in with the new image
    }, 250) // Match this with the CSS transition time

    return () => clearTimeout(transitionTimeout)
  }, [theme]) // Only trigger transition when theme changes

  // Update the image immediately when boxStyle changes
  useEffect(() => {
    setCurrentImage(options[boxStyle].image)
  }, [boxStyle]) // No fade effect for boxStyle change

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setBoxStyle(event.target.value) // Update the box style in the context
  }

  const { label, fefcoCode, alt } = options[boxStyle]

  return (
    <div className={styles.boxStylesSection}>
      <h3 className={styles.heading}>{t('boxStyle')}</h3>

      <select
        value={boxStyle}
        onChange={handleOptionChange}
        className={styles.customSelect}
      >
        {Object.keys(options).map((key) => (
          <option key={key} value={key}>
            {/* {key.replace('-', ' ')} */}
            {t(key)}
          </option>
        ))}
      </select>

      {boxStyle && (
        <div>
          <p>{label}</p>
          <p className={styles.paragraph}>
            <b>{t('fefcoCode')}:</b> {fefcoCode}
          </p>
          <img
            src={currentImage}
            alt={alt}
            className={`${styles.img} ${
              isTransitioning ? styles['fade-out'] : ''
            }`}
          />
        </div>
      )}
    </div>
  )
}

export default BoxStyles
