import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'

import Routes from './Routes'


render(
    <Router history={browserHistory} routes={Routes} />,
    document.getElementById('container')
)
