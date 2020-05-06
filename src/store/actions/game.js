import axios from 'axios'
import {GET_GAME} from './types'


export const getGame = (gameDate, gameID) => dispatch => {
   

    axios.get(`http://127.0.0.1:8000/games/${gameDate}/${gameID}`)
    .then(res => {
        dispatch({
            type: GET_GAME,
            payload: res.data
        })
    }).catch(err => {
        console.log(err)
    })
    
}