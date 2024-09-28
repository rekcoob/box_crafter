import React from 'react'
import './ThemeSwitcher.css' // Import your CSS styles
import { useTheme } from '../../context/ThemeContext'
import { useColorScheme } from '../../context/ColorSchemeContext'

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme()
  const { colorScheme, setColorScheme } = useColorScheme()

  return (
    <div>
      <h3>Theme</h3>
      <button onClick={toggleTheme}>
        {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
      </button>

      <h3>Color Scheme</h3>
      <div>
        <label className='radio-button'>
          <input
            type='radio'
            value='blue'
            checked={colorScheme === 'blue'}
            onChange={() => setColorScheme('blue')}
          />
          Blue
        </label>
        <label className='radio-button'>
          <input
            type='radio'
            value='green'
            checked={colorScheme === 'green'}
            onChange={() => setColorScheme('green')}
          />
          Green
        </label>
        <label className='radio-button'>
          <input
            type='radio'
            value='orange'
            checked={colorScheme === 'orange'}
            onChange={() => setColorScheme('orange')}
          />
          Orange
        </label>
      </div>
    </div>
  )
}

export default ThemeSwitcher
