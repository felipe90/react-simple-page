import React from 'react'
import { Route, Switch } from 'react-router-dom'

import About from './components/About'
import Contact from './components/Contact'
import Blog from './components/Blog'
import Home from './components/Home'
import Page404 from './components/Page404'
import App from './components/App'


const AppRoutes = () => (
    <App>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route component={Page404} />
        </Switch>
    </App>
)

export default AppRoutes;

