import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
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
                            to="/games"
                            className="btn btn-md btn-outline-secondary mx-2"
                        >
                            <strong>Track Games</strong>
                        </Link>
                    </div>
                </div>
                <div className="">
                    <div className="navbar-item">
                    <Link
                            to="/login"
                            className="btn btn-md btn-outline-secondary mx-2"
                        >
                            <strong>Login</strong>
                        </Link>
                        <Link
                            to="/register"
                            className="btn btn-md btn-outline-secondary mx-2"
                        >
                            <strong>Register</strong>
                        </Link>
                    </div>
                    
                </div>
            </nav>
        </div>
    )
}
