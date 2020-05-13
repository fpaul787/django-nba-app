import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import * as actions from '../../store/actions/auth'
import { connect } from 'react-redux'
import Spinner from '../Spinner'

const Register = (props) => {
    // object with field values
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password1: '',
        password2: '',
    })

    const { username, email, password1, password2 } = formData

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        props.onAuthSignUp(username, email, password1, password2)

        //props.history.push('/') // redirect
        setFormData({
            username: '',
            email: '',
            password1: '',
            password2: '',
        })
    }

    let errorMessage = null
    if (props.error) {
        errorMessage = <p>{props.error.message}</p>
    }

    // Redirect if logged in
    if (props.auth.isAuthenticated) {
        return <Redirect to="/" />
    }
    return (
        <div>
            {errorMessage}
            {props.loading ? (
                <Spinner />
            ) : (
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '80vh',
                    }}
                >
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter email"
                                name="email"
                                onChange={(e) => onChange(e)}
                                value={email}
                            />
                        </div>
                        <div className="form-group">
                            <label>User Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="User Name"
                                name="username"
                                onChange={(e) => onChange(e)}
                                value={username}
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                name="password1"
                                onChange={(e) => onChange(e)}
                                value={password1}
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Confirm Password"
                                name="password2"
                                onChange={(e) => onChange(e)}
                                value={password2}
                            />
                        </div>

                        <button
                            style={{
                                marginLeft: '10px',
                                marginRight: '10px',
                                marginBottom: '10px',
                            }}
                            type="submit"
                            className="btn btn-primary"
                        >
                            Register
                        </button>

                        <div>
                            <small
                                style={{
                                    marginLeft: '10px',
                                    marginRight: '10px',
                                }}
                                className="form-text text-muted"
                            >
                                Already have an account?
                            </small>
                            <Link
                                className="btn btn-secondary"
                                style={{
                                    marginLeft: '10px',
                                    marginRight: '10px',
                                }}
                                to="/login"
                            >
                                Login
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
        onAuthSignUp: (username, email, password1, password2) =>
            dispatch(actions.authSignup(username, email, password1, password2)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Register)
