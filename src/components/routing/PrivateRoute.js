import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import { useSelector } from 'react-redux'

function PrivateRoute (props) {

    const Component = props.component;
    const {isAuthenticated, loading} = useSelector((state) => state.authReducer)
    
    console.log("Private isAuthenticated: ", isAuthenticated)
    console.log("Private loading:", loading)
    
    
    
    return (
        <Route 
        render={props =>
                !isAuthenticated && !loading  ? (
                    <Redirect to="/login" />
                ) : (
                    <Component {...props} />
                )
            }       
        />
            
        
    )
}


export default PrivateRoute;


