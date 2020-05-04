import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import { useSelector } from 'react-redux'

function PrivateRoute (props) {

    const Component = props.component;
    const {isAuthenticated} = useSelector((state) => state.authReducer)
    
    console.log(isAuthenticated)
    
    return (
        <Route 
        render={props =>
                !isAuthenticated  ? (
                    <Redirect to="/login" />
                ) : (
                    <Component {...props} />
                )
            }       
        />
            
        
    )
}


export default PrivateRoute;


