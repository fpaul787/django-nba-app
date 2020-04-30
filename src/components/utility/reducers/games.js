import {GET_GAMES} from '../../../store/actions/types'


// function that takes in an action
// and send down certain state 
// depending on action

const initialState = {
    games: [] // what we're fetching from backend
}

export default function(state = initialState, action){
    switch(action.type){
        
        case GET_GAMES:
            console.log(action.payload)
            
            return{
                ...state,                 
                games: Object.assign({}, state, {
                    games: action.payload
                })
            }
           
        default:
            return state
    }
}