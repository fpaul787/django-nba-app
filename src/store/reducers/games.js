import {GET_GAMES} from '../actions/types'


// function that takes in an action
// and send down certain state 
// depending on action

const initialState = {
    games: null // what we're fetching from backend
}


export default function(state = initialState, action){
    switch(action.type){
        
        case GET_GAMES:
            return{
                ...state,                 
                games: action.payload
            }      
        default:
            return state
    }
}