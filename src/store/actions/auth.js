import * as actionTypes from './types'
import axios from 'axios'
import {setAlert} from './alert'

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START,
    }
}

export const authSuccess = (token, username) => {
    
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        username: username
    }
}

export const authFail = (error) => {
    
    
    return {
        type: actionTypes.AUTH_FAIL,
        error: error,
    }
}

export const logout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('expirationDate');
    return{
        type: actionTypes.AUTH_LOGOUT
    }
}

export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            // once time has arrived
            dispatch(logout())
        }, expirationTime * 1000)
    }
}

export const authLogin = (username, password)  => {
    return dispatch => {
        dispatch(authStart())
        
        
        axios.post('http://localhost:8000/rest-auth/login/', {

        username: username,
        password: password
            
            
        }).then(res => {
            
            const token = res.data.key
            
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000)

            // store in local storage
            localStorage.setItem('token', token);
            localStorage.setItem('username', username)
            localStorage.setItem('expirationDate', expirationDate)
            dispatch(authSuccess(token ,username))
            dispatch(checkAuthTimeout(3600))
        })
        .catch(error => {

            const errorMessage = error.response.data.non_field_errors[0]
            dispatch(authFail(errorMessage))
            dispatch(setAlert(errorMessage, 'danger'))
            //console.log(error.response.data.non_field_errors[0])
        })
    }

}


export const authSignup = (username, email, password1, password2)  => {
    return dispatch => {
        dispatch(authStart())
        axios.post('http://127.0.0.1:8000/rest-auth/registration/', {
            username: username,
            email: email,
            password1: password1,
            password2: password2
        }).then(res => {
            const token = res.data.key
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000)

            // store in local storage
            localStorage.setItem('token', token);
            localStorage.setItem('expirationDate', expirationDate)
            dispatch(authSuccess(token))
            dispatch(checkAuthTimeout(3600))
        })
        .catch(error => {
            dispatch(authFail(error))
            console.log('Could not register', error)
        })
    }

}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token')
        const username = localStorage.getItem('username')
        if(token === undefined){
            dispatch(logout())
        }else{
            const expirationDate = new Date(localStorage.getItem('expirationDate'))
            if (expirationDate <= new Date()){
                dispatch(logout())
            }else{
                dispatch(authSuccess(token, username))
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) /1000))
            }
        }
    }
}
