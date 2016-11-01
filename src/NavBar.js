import React from 'react'
import { Link } from 'react-router'

const NavBar = () => {
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/directors">Directors</Link>
            <Link to="/actors">Actors</Link>
        </div>
    )

}

module.exports = NavBar
