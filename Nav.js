import React from 'react'
import './Nav.css'

export default function Navbar({ getData }) {

    return (
        <nav className="navbar">
            <div className="max-width">
                <span className="logo">LETS GROW MORE</span>
                <button onClick={getData}>GET USER</button>
            </div>
        </nav>
    )
}