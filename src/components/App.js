import React from 'react'

import NavBar from './NavBar'

const App = (props) => {
    return (
        <div className="app">
            <NavBar />
            <div>
                {props.children}
            </div>
        </div>
    )
}

module.exports = App
