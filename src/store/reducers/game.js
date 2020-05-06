import {GET_GAME} from '../actions/types'


const initialState = {
    game: null
}


export default function(state = initialState, action){

    
    switch(action.type){
        case GET_GAME:
            return{
                ...state,
                game: action.payload
            }
        default:
            return state;
    }
}