import React from 'react'
import Calender from 'react-calendar'
import './Calendar.css'
import { Grid, Paper, List, ListItem, ListItemText } from '@material-ui/core'
import CalendarStyles from './CalenderStyles'

const onChange = (date) => {
    console.log(date)
}
export default function calendar({ gamesDate, handleClick }) {
    const classes = CalendarStyles()

    return (
        <div>
            <Grid>
                <div>
                    <Calender
                        selected={gamesDate}
                        value={gamesDate}
                        onChange={(date) => {
                            handleClick(date)
                        }}
                        minDate={new Date(2015, 10, 6)}
                        maxDate={new Date(2020, 3, 15)}
                        className={classes.datePicker}
                    />
                </div>
            </Grid>
        </div>
    )
}
