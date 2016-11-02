import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import Actors from './components/Actors'
import App from './components/App'
import Directors from './components/Directors'
import Home from './components/Home'
import Movies from './components/Movies'

const Routes = (
    <Route path="/" component={App}>
        {/* routes go here */}
    </Route>
)


module.exports = Routes
