import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, Header, Games } from './components/exports'


function App() {
    return (
        <Router>
            <Fragment>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/games" component={Games}/>
                </Switch>
            </Fragment>
        </Router>
    )
}

export default App
