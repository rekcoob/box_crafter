// src/components/ThemeSwitcher/ThemeSwitcher.tsx
import React from 'react'
import styles from './ThemeSwitcher.module.css'
import { useTheme } from '../../context/ThemeContext'

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  // const setIsDarkMode = () => {
  //   setIsDarkMode(!isDarkMode)
  //   document.body.style.backgroundColor = isDarkMode ? '#f0f0f0' : '#333'
  // }

  return (
    <div
      className={`${styles.toggleContainer} ${
        theme === 'dark' ? styles.active : ''
      }`}
      onClick={toggleTheme}
    >
      <div className={styles.toggleBtn}></div>
      <span className={`${styles.icon} ${styles.iconSun}`}>☀️</span>
      <span className={`${styles.icon} ${styles.iconMoon}`}>🌙</span>
    </div>
  )
}

export default ThemeSwitcher
