import React from 'react'
import { render } from 'react-dom'
import { Router, hashHistory } from 'react-router'

import Routes from './Routes'


render(
    <Router history={hashHistory} routes={Routes} />,
    document.getElementById('container')
)
