import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import { Grid } from '@material-ui/core'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import GamesTableStyles from './GamesTableStyles'
import Spinner from '../Spinner'

const DashboardGamesTable = ({ gameDate, gameID }) => {
    const [gameData, setGameData] = useState(null)

    const call = (gameDate, gameID) => {
        axios
            .get(`http://127.0.0.1:8000/games/${gameDate}/${gameID}`)
            .then((res) => {
                setGameData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const handleClick = () => {
        // console.log(localStorage.getItem('token'))
        // token = localStorage.getItem('token')
        // axios.defaults.headers = {
        //     Authorization: `Token ${token}`,
        // }
        // axios
        //     .delete(`http://127.0.0.1:8000/api/`)
        //     .then((res) => {})
        //     .catch((err) => {
        //         console.log('Error in dashboard: ', err)
        //     })
    }

    useEffect(() => {
        call(gameDate, gameID)
    }, [gameDate, gameID])
    const classes = GamesTableStyles()

    if (gameData === null) {
        return <Spinner />
    } else {
        const visitingTeamStatsLeaders = gameData.stats.vTeam.leaders
        const homeTeamStatsLeaders = gameData.stats.hTeam.leaders

        return (
            <Fragment>
                <Grid item xs={12} sm={6} className={classes.gameInfotable}>
                    <TableContainer className={classes.table}>
                        <Typography
                            className={classes.title}
                            variant="h6"
                            id="tableTitle"
                        >
                            {gameData.basicGameData.vTeam.triCode +
                                ' VS ' +
                                gameData.basicGameData.hTeam.triCode}
                        </Typography>

                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Team</TableCell>
                                    <TableCell>Points</TableCell>
                                    <TableCell>Rebounds</TableCell>
                                    <TableCell>Assist</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th">
                                        {gameData.basicGameData.vTeam.triCode}
                                    </TableCell>
                                    <TableCell>
                                        {visitingTeamStatsLeaders.points
                                            .players[0].lastName +
                                            ': ' +
                                            visitingTeamStatsLeaders.points
                                                .value}
                                    </TableCell>
                                    <TableCell>
                                        {visitingTeamStatsLeaders.rebounds
                                            .players[0].lastName +
                                            ': ' +
                                            visitingTeamStatsLeaders.rebounds
                                                .value}
                                    </TableCell>
                                    <TableCell>
                                        {visitingTeamStatsLeaders.assists
                                            .players[0].lastName +
                                            ': ' +
                                            visitingTeamStatsLeaders.assists
                                                .value}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th">
                                        {gameData.basicGameData.hTeam.triCode}
                                    </TableCell>
                                    <TableCell>
                                        {homeTeamStatsLeaders.points.players[0]
                                            .lastName +
                                            ': ' +
                                            homeTeamStatsLeaders.points.value}
                                    </TableCell>
                                    <TableCell>
                                        {homeTeamStatsLeaders.rebounds
                                            .players[0].lastName +
                                            ': ' +
                                            homeTeamStatsLeaders.rebounds.value}
                                    </TableCell>
                                    <TableCell>
                                        {homeTeamStatsLeaders.assists.players[0]
                                            .lastName +
                                            ': ' +
                                            homeTeamStatsLeaders.assists.value}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <button
                        style={{ marginTop: 20 }}
                        className="btn btn-danger"
                        onClick={handleClick}
                    >
                        Remove Game
                    </button>
                </Grid>
            </Fragment>
        )
    }
}

export default DashboardGamesTable
