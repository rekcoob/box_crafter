import React from 'react'
import styles from './NavBar.module.css'
import { useTheme } from '../../context/ThemeContext'

const NavBar: React.FC = () => {
  const { theme, toggleTheme } = useTheme() // Use the theme and toggle function

  return (
    <nav className='navbar'>
      <h1 className={styles.heading}>Box Crafter</h1>
      <button onClick={toggleTheme} className='theme-toggle-btn'>
        {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
      </button>
    </nav>
  )
}

export default NavBar
