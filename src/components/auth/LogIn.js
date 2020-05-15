import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import './auth.css'
import { Spin } from 'antd'
import * as actions from '../../store/actions/auth'

const LogIn = (props) => {
    // object with field values
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    })

    const { username, password } = formData

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        props.onAuthLogin(username, password)
        //props.history.push('/login') // redirect
    }

    let errorMessage = null
    if (props.error) {
        errorMessage = <p>{props.error.message}</p>
    }

    // Redirect if logged in
    if (props.auth.isAuthenticated) {
        return <Redirect to="/dashboard" />
    }
    return (
        <div>
            {errorMessage}
            {props.loading ? (
                <Spin />
            ) : (
                <div className="form">
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="form-group">
                            <label>User Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter username"
                                name="username"
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                name="password"
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                        <button
                            type="submit"
                            className="login-form-button btn btn-primary"
                        >
                            Login
                        </button>
                        <div>
                            <small className="small-text form-text text-muted">
                                Need to sign up?
                            </small>
                            <Link
                                className="signup-form-button btn btn-secondary"
                                to="/register"
                            >
                                Sign Up
                            </Link>
                        </div>
                    </form>
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.authReducer,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAuthLogin: (username, password) =>
            dispatch(actions.authLogin(username, password)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LogIn)
