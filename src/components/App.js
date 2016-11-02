import React from 'react'

import NavBar from './NavBar'

const App = (props) => {
    return (
        <div className="app">
            <NavBar />
            {props.children}
        </div>
    )
}

module.exports = App
