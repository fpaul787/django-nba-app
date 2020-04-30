import React, { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, Header, Games, Login, Register } from './components/exports'
import { connect} from 'react-redux'

import * as actions from './store/actions/auth'

function App(props) {

    useEffect(() => {
        
        props.onTryAutoSignup()
    })
    
    return (
        
        <Router>
            <Fragment>
                <Header auth={props}/>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/games" component={Games}/>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                </Switch>
            </Fragment>
        </Router>
        
        
    )
}

const mapStateToProps = state => {
    
    return {
        
        isAuthenticated: state.authReducer.token !== null,

    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch(actions.authCheckState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
