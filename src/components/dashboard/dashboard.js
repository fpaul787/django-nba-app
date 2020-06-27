import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import Spinner from '../Spinner'
import DashboardGameTable from './DashboardGameTable'
import './dashboard.css'

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
                .get(`http://django-nba.frantzapps.xyz/api/`)
                .then((res) => {
                    // console.log(res.data)
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
            <div>
                <h1
                    style={{
                        textAlign: 'center',
                        marginTop: 20,
                        marginBottom: 20,
                    }}
                >
                    Your Games
                </h1>

                <div
                    style={{
                        overflowY: 'auto',
                        position: 'absolute',
                        left: '10%',
                    }}
                >
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
                                    id={game.id}
                                    gamedate={game.gamedate}
                                    gameid={game.gameid}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    } else {
        return (
            <div className="divCenter">
                <h1 style={{ dispaly: 'flex', textAlign: 'center' }}>
                    Please add games to your dashboard
                </h1>
            </div>
        )
    }
}

export default Dashboard
