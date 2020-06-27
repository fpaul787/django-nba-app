import axios from 'axios'
import {GET_GAMES} from './types'


// all our request go here

// GET GAMES
export const getGames = (date) => dispatch => {
    
    //console.log('Date', date)
    axios.get(`http://django-nba.frantzapps.xyz/games/${date}`)
    .then(res => {
        
        dispatch({            
            type: GET_GAMES,
            payload: res.data
        })
    }).catch(err => console.log(err))

}

