import React from 'react'
import { Route, Switch } from 'react-router-dom'

import About from './About'
import Contact from './Contact'
import Home from './Home'
import Page404 from './Page404'


const AppRoutes = () => (
    <appRoutes>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={Page404} />
        </Switch>
    </appRoutes>
)


export default AppRoutes;

