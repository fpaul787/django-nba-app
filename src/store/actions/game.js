import axios from 'axios'
import {GET_GAME} from './types'


export const getGame = (gameDate, gameID) => dispatch => {
   

    axios.get(`http://django-nba.frantzapps.xyz/games/${gameDate}/${gameID}`)
    .then(res => {
        dispatch({
            type: GET_GAME,
            payload: res.data
        })
    }).catch(err => {
        console.log(err)
    })
    
}