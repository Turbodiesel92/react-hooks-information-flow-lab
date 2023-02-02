import React from 'react'

function Header({ isDarkMode, onDarkModeClick }) {
    return (
        <header>
            <h2>Shopster</h2>
            <button onClick={onDarkModeClick}>
                {isDarkMode ? "Dark" : "light"} Mode
            </button>
        </header>
    )
}

export default Header


