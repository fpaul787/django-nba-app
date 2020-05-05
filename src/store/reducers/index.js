// meeting place for all other reducers
import {combineReducers} from 'redux'
import games from './games'
import auth from './auth'
import alert from './alert'

export default combineReducers({
    gamesReducer: games,
    authReducer: auth,
    alertReducer: alert
})