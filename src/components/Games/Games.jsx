import React, { Fragment, useState, useEffect } from 'react'
import { Grid, Paper, List, ListItem, ListItemText } from '@material-ui/core'
import Spinner from '../Spinner'
import GamesStyles from './GameStyles'
import GamesTable from './GamesTable/GamesTable'
import { CustomCalendar } from './Calendar'
import { useDispatch, useSelector } from 'react-redux'

// utility function to parse date from calendar choice
import { parseDate } from '../utility/parseDate'

import * as actions from '../../store/actions/games'

const Games = (props) => {
    const gamesData = useSelector((state) => state.gamesReducer.games)
    const dispatch = useDispatch()


    // may not need local state
    const [gameData, setGameData] = useState(null);
    const [gameDate, setGameDate] = useState(new Date(2020, 2, 10))
    const classes = GamesStyles()


    useEffect(() => {
        const date = parseDate(gameDate)
        try {
            dispatch(actions.getGames(`${date}`))
            
        } catch (error) {
            console.log(error)
        }
    }, [gameDate, dispatch])

    // data has not been loaded yet
    if (gamesData == null) {
        return (
            <div>
                <Spinner />
            </div>
        )
    } else {
        // change this
        const games = gamesData.games

        return (
            <Grid
                container
                direction="row"
                alignItems="flex-start"
                spacing={1}
                className={classes.root}
            >
                <Grid className={classes.datePickerGrid} item xs={2}>
                    <h4>Pick a date </h4>
                    <CustomCalendar
                        gamesDateProp={new Date()}
                        handleClick={setGameDate}
                    />
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
                <Grid
                    container
                    item
                    xs={4}
                    spacing={3}
                    className={classes.gameTableGrid}
                >
                    <h4>Game Track</h4>
                    <GamesTable gameData={gameData} />
                </Grid>
            </Grid>
        )
    }
}

export default Games
