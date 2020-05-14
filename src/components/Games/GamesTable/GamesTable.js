import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
import Spinner from '../../Spinner'
import { ColorButton } from './ColorButton'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../../store/actions/game'
import * as alert_action from '../../../store/actions/alert'

const GamesTable = ({ gameData }) => {
    // need a isLoading variable in this reducer
    let boxscore = useSelector((state) => state.gameReducer.game)
    const dispatch = useDispatch()
    const { token } = useSelector((state) => state.authReducer)

    const clicked = (event) => {
        event.preventDefault()

        if (token) {
            let gameID = gameData.gameId
            let gameDate = gameData.startDateEastern

            axios.defaults.headers = {
                Authorization: `Token ${token}`,
            }

            axios
                .post('http://127.0.0.1:8000/api/create/', {
                    gameDate: gameDate,
                    gameID: gameID,
                })
                .catch((err) => console.log(err))
        } else {
            dispatch(
                alert_action.setAlert(
                    'You must have a profile to add games',
                    'danger'
                )
            )
        }
    }

    useEffect(() => {
        if (gameData !== null) {
            let gameID = gameData.gameId
            let gameDate = gameData.startDateEastern

            try {
                dispatch(actions.getGame(gameDate, gameID))
            } catch (error) {
                console.log(error)
            }
        }
    }, [gameData, dispatch])

    const classes = GamesTableStyles()

    if (gameData === null) {
        return (
            <Fragment>
                <TableContainer>
                    <Typography variant="h6" id="tableTitle">
                        Please choose a Game
                    </Typography>
                </TableContainer>
            </Fragment>
        )
    } else if (boxscore == null) {
        return <Spinner />
    } else if (boxscore != null && boxscore.stats == null) {
        return (
            <Fragment>
                <div>
                    <Typography
                        className={classes.title}
                        variant="h6"
                        id="tableTitle"
                    >
                        No stats available now. Check again when the game
                        starts.
                    </Typography>
                    <TableContainer className={classes.gameInfoTable}>
                        <Table
                            className={classes.gameInfotable}
                            aria-label="simple table"
                        >
                            <TableHead>
                                <TableRow>
                                    <TableCell>Game Start</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th">
                                        {
                                            boxscore.basicGameData
                                                .startTimeEastern
                                        }
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </Fragment>
        )
    } else {
        const visitingTeamStatsLeaders = boxscore.stats.vTeam.leaders
        const homeTeamStatsLeaders = boxscore.stats.hTeam.leaders

        return (
            <Fragment>
                <Grid item xs={12} sm={6} className={classes.gameInfotable}>
                    <TableContainer className={classes.table}>
                        <Typography
                            className={classes.title}
                            variant="h6"
                            id="tableTitle"
                        >
                            {boxscore.basicGameData.vTeam.triCode +
                                ' VS ' +
                                boxscore.basicGameData.hTeam.triCode}
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
                                        {boxscore.basicGameData.vTeam.triCode}
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
                                        {boxscore.basicGameData.hTeam.triCode}
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
                    <Link to="/track">
                        <ColorButton
                            className={classes.button}
                            onClick={clicked}
                        >
                            Add to my games
                        </ColorButton>
                    </Link>
                </Grid>
            </Fragment>
        )
    }
}

export default GamesTable
