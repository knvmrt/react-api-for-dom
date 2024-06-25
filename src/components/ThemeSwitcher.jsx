import React, { useContext } from 'react'

import ThemeContext from '../context/ThemeContext'

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)

    return <button onClick={toggleTheme}>{theme === 'dark' ? <span><i class="fa-solid fa-sun"></i></span> : <span><i class="fa-solid fa-moon"></i></span>}</button>
}

export default ThemeSwitcher