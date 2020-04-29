// meeting place for all other reducers
import {combineReducers} from 'redux'
import games from './games'

export default combineReducers({
    gamesReducer: games
})