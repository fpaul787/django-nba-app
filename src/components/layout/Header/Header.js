import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-light bg-dark">
                <Link className="navbar-brand" to="/">
                    Logo
                </Link>
                
                    <ul className="list-inline mr-auto ml-3">
                        <li className="list-inline-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="/">Home</Link>
                        </li>                       
                    </ul>
                
            </nav>
        </div>
    )
}
