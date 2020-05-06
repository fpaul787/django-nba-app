import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import * as actions from '../../../store/actions/auth'
import { connect } from 'react-redux'

function Header(props) {
    const authLinks = (
        <div className="row">
            <div style={{marginRight: 50, color: 'pink'}}>
                <h3>Hello {props.auth.username}</h3>
            </div>
            <div className="navbar-item">
                <Link
                    className="btn btn-md btn-outline-secondary mx-2"
                    to="/dashboard"
                >
                    <strong>Dashboard</strong>
                </Link>
                <Link
                    className="btn btn-md btn-outline-secondary mx-2"
                    onClick={props.logout}
                    to="/"
                >
                    <strong>Logout</strong>
                </Link>
            </div>
        </div>
    )

    const guestLinks = (
        <div>
            <Link to="/login" className="btn btn-md btn-outline-secondary mx-2">
                <strong>Login</strong>
            </Link>
            <Link
                to="/register"
                className="btn btn-md btn-outline-secondary mx-2"
            >
                <strong>Register</strong>
            </Link>
        </div>
    )

    return (
        <div>
            <nav
                className="navbar navbar-light bg-dark"
                role="navigation"
                aria-label="main navigation"
            >
                <div>
                    <Link className="navbar-brand" to="/">
                        Logo
                    </Link>
                </div>

                <div className="mr-auto ml-auto">
                    <div className="navbar-item">
                        <Link
                            to="/track"
                            className="btn btn-md btn-outline-secondary mx-2"
                        >
                            <strong>Track Games</strong>
                        </Link>
                    </div>
                </div>

                {props.auth.isAuthenticated ? authLinks : guestLinks}
            </nav>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(actions.logout()),
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Header))
