// meeting place for all other reducers
import {combineReducers} from 'redux'
import games from './games'
import auth from './auth'

export default combineReducers({
    gamesReducer: games,
    authReducer: auth
})