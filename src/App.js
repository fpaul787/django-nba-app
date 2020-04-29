import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, Header, Games } from './components/exports'
import {Provider} from 'react-redux'
import store from './store'


function App() {
    return (
        <Provider store={store}>
        <Router>
            <Fragment>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/games" component={Games}/>
                </Switch>
            </Fragment>
        </Router>
        </Provider>
        
    )
}

export default App
