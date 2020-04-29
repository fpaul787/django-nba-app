import React, { Fragment, useState, useEffect } from 'react'
import Spinner from '../Spinner'
import { Grid, Paper, List } from '@material-ui/core'
import GamesStyles from './GamesStyles'
import { ListItem, ListItemText } from '@material-ui/core'
import GamesTable from './components/GamesTable'
import Calender from 'react-calendar'
import './Calendar.css'

import {connect} from 'react-redux'
import Proptypes from 'prop-types'
import {getGames} from '../../actions/games'

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

const Games = ({getGames, gamesProp}) => {

   
    const [gamesData, setGamesData] = useState(false)
    const [gameData, setGameData] = useState(false)
    const [gameDate, setGameDate] = useState()

    const classes = GamesStyles()
   

    // useEffect Hook is similar to
    // componentDidMunt, componentDidUpdate,
    // and componentWillUnmount
    // By using this Hook, you tell React that
    // your component needs to do something after render.
    useEffect(() => {
        function requestGamesAsynchronously() {
            var date = parseDate(gameDate)
    
            getGames(date)
    
            
            if(gamesProp.length !== 0){
                setGamesData(gamesProp.games)
            }
            
        }
        requestGamesAsynchronously()
        
    }, [gameDate])

    

    if (!gamesData) {
        //console.log(gamesProp)
        return (
            <div>
            <Grid className={classes.datePickerGrid} item xs={3} >
                    <h4>Please choose a date </h4>
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
            </div>
            )
    } else {
        const games = gamesData
        
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
                <h2>Game Table</h2>
                <GamesTable gameData={gameData} />
                </Grid>
                
            </Grid>
        )
    }
}

Games.propTypes ={
    gamesProp: Proptypes.object
}

// state of redu
const mapStateToProps = state => ({
    gamesProp: state.gamesReducer.games
})
export default connect(mapStateToProps, {getGames}) (Games)
