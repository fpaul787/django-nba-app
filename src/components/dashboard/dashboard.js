import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import Spinner from '../Spinner'
import DashboardGameTable from './DashboardGameTable'

const Dashboard = () => {
    const [userGames, setUserGames] = useState(null)

    // not needed since you can't access page w/o being logged in
    const { token } = useSelector((state) => state.authReducer)

    useEffect(() => {
        if (token) {
            axios.defaults.headers = {
                Authorization: `Token ${token}`,
            }

            axios
                .get(`http://127.0.0.1:8000/api/`)
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
        return (
            <div
                style={{
                    width: '200',
                    height: '50',
                    textAlign: 'center',
                    marginTop: 20,
                }}
            >
                <h1> Your Games</h1>
                {userGames.map((game) => {
                    return (
                        <div
                            key={game.id}
                            style={{
                                marginTop: 50,
                                marginLeft: 500,
                                marginRight: 'auto',
                                width: '50%',
                                padding: 'auto',
                            }}
                        >
                            <DashboardGameTable
                                key={game.gameID}
                                gameDate={game.gameDate}
                                gameID={game.gameID}
                            />
                        </div>
                    )
                })}
            </div>
        )
    } else {
        return <h1>Please add games to your dashboard</h1>
    }
}

export default Dashboard
