import React, { Fragment, useEffect } from 'react'
import axios from 'axios'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom'
import {
    Home,
    Header,
    Track,
    Login,
    Register,
    NoMatch,
    PrivateRoute,
    Dashboard,
    Alert,
} from './components/exports'
import { connect } from 'react-redux'

import * as actions from './store/actions/auth'

function App(props) {
    useEffect(() => {
        // axios.defaults.headers = {
        //     'Content-Type': 'application/json',
        //     Authorization: 'props.token',
        // }
        // axios
        //     .get('http://127.0.0.1:8000/api/')
        //     .then((res) => {
        //         console.log(res.data)
        //     })
        //     .catch((err) => {
        //         console.log('Error in dashboard: ', err)
        //     })
        props.onTryAutoSignup()
    })

    return (
        <Router>
            <Fragment>
                <Header auth={props} />
                <div>
                    <Alert />
                </div>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/track" component={Track} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <PrivateRoute
                        exact
                        path="/dashboard"
                        component={Dashboard}
                        auth={props}
                    />
                    <Route component={NoMatch} />
                </Switch>
            </Fragment>
        </Router>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.authReducer.token !== null,
        username: state.authReducer.username,
        token: state.authReducer.token,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTryAutoSignup: () => dispatch(actions.authCheckState()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
