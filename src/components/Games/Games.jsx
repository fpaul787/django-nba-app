import React, {Fragment, useState, useEffect} from 'react'
import Spinner from '../Spinner'

function parseDate(customDate, separator = '', reverse = false) {
    // if (customDate == null) {
    //     customDate = new Date()
    // }

    // let day = customDate.getDate()
    // let month = customDate.getMonth() + 1
    // let year = customDate.getFullYear()

    // if (reverse) {
    //     return `${month < 10 ? `0${month}` : `${month}`}${separator}${
    //         day < 10 ? `0${day}` : `${day}`
    //     }${separator}${year}`
    // }

    // return `${year}${separator}${
    //     month < 10 ? `0${month}` : `${month}`
    // }${separator}${day < 10 ? `0${day}` : `${day}`}`

    return '20200415'
}




const Games = () => {

    const [gamesData, setGamesData] = useState()
    const [gameData, setGameData] = useState()
    const [gameDate, setGameDate] = useState()

    async function requestGamesAsynchronously(date = '') {
        date = parseDate(date)
    
        const url = `http://127.0.0.1:8000/games/${date}`
        
        let response = await fetch(url)
    
        let responseJSON = await response.json()
    
        
        setGamesData(responseJSON)
    }

    // useEffect Hook is similar to
    // componentDidMunt, componentDidUpdate,
    // and componentWillUnmount
    // By using this Hook, you tell React that
    // your component needs to do something after render.
    useEffect(() => {
        requestGamesAsynchronously(gameDate)
        setGameDate(gameDate)
    }, [gameDate])

    if(gamesData == null){
        
        return <Spinner />
    }
    else{
        console.log(gamesData)
        return (
            <div>
                <h1>Games Component : Games Loaded</h1>
            </div>
        )
    }
    
}

export default Games
