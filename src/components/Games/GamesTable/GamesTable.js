import React, { Fragment, useState, useEffect } from 'react'
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

const GamesTable = ({ gameData }) => {

    const [boxscore, setBoxscore] = useState()

    async function requestBoxscoreAsynchronously() {
        if (gameData === null) {
            setBoxscore(null)
        } else {
            
            let gameID = gameData.gameId
            let gameDate = gameData.startDateEastern

            const url = `http://127.0.0.1:8000/games/${gameDate}/${gameID}`
            let response = await fetch(url)
            let responseJSON = await response.json()
            setBoxscore(responseJSON)
        }
    }

    useEffect(() => {
        requestBoxscoreAsynchronously()
    }, [gameData])

    const classes = GamesTableStyles()

    if (gameData === null) {
        return (
            <Fragment>
                
                    <TableContainer >
                        <Typography
                           
                            variant="h6"
                            id="tableTitle"
                        >
                            Please choose a Game
                        </Typography>
                    </TableContainer>
                
            </Fragment>
        )
    } else if (boxscore == null) {
        return (<Spinner />)
    } else if (boxscore != null && boxscore.stats == null) {
        return (
            <Fragment>
                <div  >
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
        console.log(boxscore)
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

                        <Table
                            
                            aria-label="simple table"
                            
                        >
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
                </Grid>
            </Fragment>
        )
    }
}

export default GamesTable
