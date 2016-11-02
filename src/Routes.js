import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import Actors from './components/Actors'
import App from './components/App'
import Directors from './components/Directors'
import Home from './components/Home'
import Movies from './components/Movies'

const Routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/actors" component={Actors} />
        <Route path="/directors" component={Directors} />
    </Route>
)


module.exports = Routes
