import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import Spinner from '../Spinner'

const Dashboard = () => {
    const [games, setGames] = useState(null)
    const { loading, token } = useSelector((state) => state.authReducer)

    useEffect(() => {
        // console.log(token)
        if (token) {
            axios.defaults.headers = {
                Authorization: token,
            }
            axios
                .get(`http://127.0.0.1:8000/api/`, {
                    params: {
                        q: '6bf1b',
                    },
                })
                .then((res) => {
                    setGames(res.data)
                    // console.log(res.data)
                })
                .catch((err) => {
                    console.log('Error in dashboard: ', err)
                })
        }

        // works
        // axios
        //     .post('http://127.0.0.1:8000/api/', {
        //         gameDate: 'test20',
        //         gameID: 'test20ID',
        //     })
        //     .then((res) => console.log(res))
        //     .catch((err) => console.log(err))
        // axios
        //     .delete('http://127.0.0.1:8000/api/4')
        //     .then((res) => console.log(res))
        //     .catch((err) => console.log(err))
        // axios
        //     .put('http://127.0.0.1:8000/api/3/', {
        //         gameDate: '2021',
        //         gameID: '324',
        //     })
        //     .then((res) => console.log(res))
        //     .catch((err) => console.log(err))
    }, [token])

    if (games == null || loading) {
        return <Spinner />
    } else {
        console.log(games)
        return <div>Games Loaded</div>
    }
}

export default Dashboard
