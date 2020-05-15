import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import * as actions from '../../../store/actions/auth'
import { connect } from 'react-redux'
import logo from './trackerlogo.png'
import './header.css'
function Header(props) {
    const authLinks = (
        <div className="row">
            <div style={{ marginTop: 5, marginRight: 15, color: 'pink' }}>
                <h5>Hello {props.auth.username}</h5>
            </div>
            <div className="navbar-item">
                <Link
                    className="btn btn-md btn-outline-secondary mx-2"
                    to="/dashboard"
                >
                    <strong className="text">Dashboard</strong>
                </Link>
                <Link
                    className="btn btn-md btn-outline-secondary mx-2"
                    onClick={props.logout}
                    to="/"
                >
                    <strong className="text">Logout</strong>
                </Link>
            </div>
        </div>
    )

    const guestLinks = (
        <div>
            <Link to="/login" className="btn btn-md btn-outline-secondary mx-2">
                <strong className="text">Login</strong>
            </Link>
            <Link
                to="/register"
                className="btn btn-md btn-outline-secondary mx-2"
            >
                <strong className="text">Register</strong>
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
                    <Link to="/">
                        <img src={logo} className="header-logo" alt="logo" />
                        <h5 className="header-text">Game Tracker</h5>
                    </Link>
                </div>

                <div className="mr-auto ml-auto">
                    <div className="navbar-item">
                        <Link
                            to="/track"
                            className="btn btn-md btn-outline-secondary mx-2"
                        >
                            <h5 className="text">Track Games</h5>
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
