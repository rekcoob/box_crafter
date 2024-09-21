import React from 'react'
import styles from './NavBar.module.css'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'

const NavBar: React.FC = () => {
  return (
    <nav className='navbar'>
      <h1 data-testid='cypress-tittle' className={styles.heading}>
        Box Crafter
      </h1>
      <ThemeSwitcher />
    </nav>
  )
}

export default NavBar
