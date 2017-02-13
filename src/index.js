import React from 'react'
import { render } from 'react-dom'

import { Router, browserHistory } from 'react-router'
import Actors from './components/Actors'
import App from './components/App'
import Directors from './components/Directors'
import Home from './components/Home'
import Movies from './components/Movies'


render(
    (<Router history={browserHistory} >
      <Route path="/" component={App} />
      <Route path="/movies" component={Movies} />
      <Route path="/actors" component={Actors} />
      <Route path="/directors" component={Directors} />
    </Router>),
    document.getElementById('container')
)
