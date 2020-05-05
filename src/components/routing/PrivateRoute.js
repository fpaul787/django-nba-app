import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import { useSelector } from 'react-redux'

function PrivateRoute (props) {

    const Component = props.component;
    const {isAuthenticated, loading} = useSelector((state) => state.authReducer)
    
    
    
    
    
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


