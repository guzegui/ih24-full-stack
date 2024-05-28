import React, { useContext } from 'react'
import { ThemeContext } from './../context/theme.context'
import { Link } from 'react-router-dom'

function NavBar() {

    const { toggleTheme } = useContext(ThemeContext)

    return (
        <nav>
            <div className='left'>
                <Link to={`/login`}>Login</Link>
                <Link to={`/signup`}>Sign Up</Link>
            </div>
            <div className='right'>
                <button onClick={toggleTheme}>Toggle Theme</button>
            </div>
        </nav>
    )
}

export default NavBar