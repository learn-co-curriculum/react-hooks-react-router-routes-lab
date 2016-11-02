import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import Actors from './Actors'
import App from './App'
import Directors from './Directors'
import Home from './Home'
import Movies from './Movies'

const Routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/actors" component={Actors} />
        <Route path="/directors" component={Directors} />
    </Route>
)


module.exports = Routes
