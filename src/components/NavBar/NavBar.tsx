import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from './NavBar.module.css'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'

import logo from '../../assets/box.svg'

const NavBar: React.FC = () => {
  // const [language, setLanguage] = useState('EN')
  const { i18n } = useTranslation()

  // const toggleLanguage = () => {
  //   setLanguage((prevLang) => (prevLang === 'EN' ? 'SK' : 'EN'))
  // }

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'sk' : 'en'
    i18n.changeLanguage(newLang)
  }
  return (
    <nav className={styles.navbarSection}>
      <div className='flex center'>
        <img src={logo} alt='Box Crafter Logo' className={styles.logo} />
        <h1 data-testid='cypress-tittle' className={styles.heading}>
          Box Crafter
        </h1>
      </div>
      <div className='flex center'>
        <button onClick={toggleLanguage} className={styles.languageSwitcher}>
          {i18n.language.toUpperCase()}
        </button>
        <ThemeSwitcher />
      </div>
    </nav>
  )
}

export default NavBar
