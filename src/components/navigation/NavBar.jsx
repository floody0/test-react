import React from 'react'
import cl from "./Navbar.module.css"
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className={cl.cl}>
        <Link to="/">Home</Link>
    </div>
  )
}

export default NavBar