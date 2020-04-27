import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, Header } from './components/exports'


function App() {
    return (
        <Router>
            <Fragment>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                </Switch>
            </Fragment>
        </Router>
    )
}

export default App
