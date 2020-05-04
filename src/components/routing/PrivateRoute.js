import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import { useSelector } from 'react-redux'

function PrivateRoute (props) {

    const Component = props.component;
    //const isAuthenticated = useSelector((state) => state.authReducer.token !== null )
    const {isAuthenticated} = props.auth
    
    
    
    return (
        <Route 
        render={props =>
                !isAuthenticated  ? (
                    <Redirect to="/" />
                ) : (
                    <Component {...props} />
                )
            }       
        />
            
        
    )
}


export default PrivateRoute;


