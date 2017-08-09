import React from 'react'
import ReactDOM from 'react-dom'

import routes from './routes'
import {Router, browserHistory, hashHistory, Route, IndexRedirect} from 'react-router'
import First from './components/first'
import Second from './components/second'
import App from './containers/App/App'


ReactDOM.render(
  <Router history={hashHistory}>
    {routes}
  </Router>
  ,document.getElementById('app'))