import React from 'react'
import { Route, Switch } from 'react-router-dom'

import App from './components/App'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Page404 from './components/Page404'


const AppRoutes = () => (
    <appRoutes>
    <App>
    </App>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={Page404} />
    </Switch>
    </appRoutes>
)

export default AppRoutes;

