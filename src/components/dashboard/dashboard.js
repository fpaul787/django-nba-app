import React from 'react'
import { useSelector } from 'react-redux'
import Spinner from '../Spinner'

const Dashboard = () => {

    const {loading} = useSelector((state) => state.authReducer)
    return loading ? (
        <Spinner/>
    ) : (
        <div>Dashboard</div>
    )
}

export default Dashboard
