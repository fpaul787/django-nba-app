import axios from 'axios'
import {GET_GAMES} from './types'


// all our request go here

// GET GAMES
export const getGames = (date) => dispatch => {
    
    //console.log('Date', date)
    axios.get(`http://127.0.0.1:8000/games/${date}`)
    .then(res => {
        
        dispatch({            
            type: GET_GAMES,
            payload: res.data
        })
    }).catch(err => console.log(err))

}