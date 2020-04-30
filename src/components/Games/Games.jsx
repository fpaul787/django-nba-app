import React, { Fragment, useState, useEffect } from 'react'
import { Grid, Paper, List ,ListItem, ListItemText} from '@material-ui/core'
import Spinner from '../Spinner'
import GamesStyles from './GamesStyles'
import GamesTable from './GamesTable/GamesTable'


import {CustomCalendar} from './Calendar'
import {parseDate} from '../utility/parseDate' // utility function to parse date from calendar choice


const Games = () => {
    const [gamesData, setGamesData] = useState(null)
    const [gameData, setGameData] = useState(null)
    const [gameDate, setGameDate] = useState(null)
    const classes = GamesStyles()


    async function requestGames(dateInput) {
        var date = parseDate(gameDate)

        let response = await fetch(`http://127.0.0.1:8000/games/${date}`)

        let responseJSON = await response.json()

        setGamesData(responseJSON)
    }

    function handleDateChange(date){
        setGameDate(date)
    }

    // useEffect Hook is similar to
    // componentDidMunt, componentDidUpdate,
    // and componentWillUnmount
    // By using this Hook, you tell React that
    // your component needs to do something after render.
    useEffect(() => {
        requestGames() // check
    
    }, [gameDate])

    if (gamesData == null) {
        return (<Spinner />)
    } else {

        // change this
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
                        <CustomCalendar gamesDate={new Date()} handleClick={handleDateChange}/>
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