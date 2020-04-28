import React, { Fragment, useState, useEffect } from 'react'
import Spinner from '../Spinner'
import { Grid, Paper, List } from '@material-ui/core'
import GamesStyles from './GamesStyles'
import { ListItem, ListItemText } from '@material-ui/core'
import GamesTable from './components/GamesTable'
import Calender from 'react-calendar'
import './Calendar.css'

function parseDate(customDate, separator = '', reverse = false) {
    if (customDate == null) {
        customDate = new Date(2020, 3, 15)
    }

    let day = customDate.getDate()
    let month = customDate.getMonth() + 1
    let year = customDate.getFullYear()

    if (reverse) {
        return `${month < 10 ? `0${month}` : `${month}`}${separator}${
            day < 10 ? `0${day}` : `${day}`
        }${separator}${year}`
    }

    return `${year}${separator}${
        month < 10 ? `0${month}` : `${month}`
    }${separator}${day < 10 ? `0${day}` : `${day}`}`
}

const Games = () => {
    const [gamesData, setGamesData] = useState()
    const [gameData, setGameData] = useState()
    const [gameDate, setGameDate] = useState()

    const classes = GamesStyles()
    async function requestGamesAsynchronously(dateInput) {
        var date = parseDate(dateInput)

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

    if (gamesData == null) {
        return <Spinner />
    } else {
        const games = gamesData.games
        return (
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                spacing={2}
                className={classes.root}
            >
                <Grid className={classes.datePickerGrid} item xs={3} >
                    <h4>Pick a date </h4>
                    <div>
                        <Calender
                            selected={gameDate}
                            value={gameDate}
                            onChange={setGameDate}
                            minDate={new Date(2015, 10, 6)}
                            maxDate={new Date(2020, 3, 15)}
                            className={classes.datePicker}
                        />
                    </div>
                </Grid>

                <Grid className={classes.gamesDisplayGrid} item xs={3}>
                    <h4>Games on {parseDate(gameDate, '/', true)}:</h4>
                    <Paper className={classes.gamesPaper}>
                        <Fragment>
                            <List>
                                {games.map((game) => {
                                    return (
                                        <ListItem
                                            key={game.gameId}
                                            button
                                            className={classes.ListItem}
                                            onClick={() => {
                                                setGameData(game)
                                            }}
                                        >
                                            <ListItemText
                                                primary={
                                                    game.vTeam.triCode +
                                                    ' VS ' +
                                                    game.hTeam.triCode
                                                }
                                            />
                                        </ListItem>
                                    )
                                })}
                            </List>
                        </Fragment>
                    </Paper>
                </Grid>
                <Grid container item xs={3} spacing={3} className={classes.gameTableGrid}>
                <h2>Grid</h2>
                <GamesTable gameData={gameData} />
                </Grid>
                
            </Grid>
        )
    }
}

export default Games
