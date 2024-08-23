import React from 'react'
import Navbar from './Navbar'


const Header = () => {
  return (
    <header>
      <div className="header-inner">
        <div className="logo">
            <img src="./src/assets/logo.svg" alt="Logo" />
        </div>
        <Navbar/>
      </div>
    </header>
  )
}

export default Header