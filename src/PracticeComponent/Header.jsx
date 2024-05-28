import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <header className="p-16">
            <nav>
                <ul className="flex gap-16">
                <li><NavLink to="/" className={({isActive})=>(isActive? "font-bold underline text-amber-600 ": `${null} hover:underline hover:text-amber-600`)}>Home</NavLink></li>
                <li><NavLink to="/Host" className={({isActive})=>(isActive? "font-bold underline text-amber-600 ": `${null} hover:underline hover:text-amber-600`)}>Host</NavLink></li>
                <li><NavLink to="/AboutPage" className={({isActive})=>(isActive? "font-bold underline text-amber-600 ": `${null} hover:underline hover:text-amber-600`)}>About</NavLink></li>
                <li><NavLink to="/VansPage" className={({isActive})=>(isActive? "font-bold underline text-amber-600 ": `${null} hover:underline hover:text-amber-600`)}>Van</NavLink></li>
                </ul>
            </nav>
        </header>
    </>
  )
}

export default Header