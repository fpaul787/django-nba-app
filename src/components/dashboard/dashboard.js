import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import Spinner from '../Spinner'
import GameTable from './GameTable'

const Dashboard = () => {
    const [userGames, setUserGames] = useState(null)

    // not needed since you can't access page w/o being logged in
    const { token } = useSelector((state) => state.authReducer)

    useEffect(() => {
        if (token) {
            const tokenString = String(token)
            const lastFive = tokenString.slice(tokenString.length - 5)

            axios.defaults.headers = {
                Authorization: token,
            }

            axios
                .get(`http://127.0.0.1:8000/api/`, {
                    params: {
                        q: lastFive,
                    },
                })
                .then((res) => {
                    setUserGames(res.data)
                })
                .catch((err) => {
                    console.log('Error in dashboard: ', err)
                })
        }
    }, [token])

    if (userGames === null) {
        return <Spinner />
    } else if (userGames.length !== 0) {
        return userGames.map((game) => {
            return (
                <GameTable
                    key={game.gameID}
                    gameDate={game.gameDate}
                    gameID={game.gameID}
                />
            )
        })
    } else {
        return <h1>Please add games to your dashboard</h1>
    }
}

export default Dashboard
