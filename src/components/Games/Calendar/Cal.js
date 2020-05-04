import React from 'react'
import Calender from 'react-calendar'
import './Calendar.css'
import { Grid } from '@material-ui/core'
import CalendarStyles from './CalenderStyles'


export default function calendar({ gamesDateProp, handleClick }) {
    const classes = CalendarStyles()

    return (
        <div>
            <Grid>
                <div>
                    <Calender
                        selected={gamesDateProp}
                        value={gamesDateProp}
                        onChange={(date) => {
                            handleClick(date)
                        }}
                        minDate={new Date(2015, 10, 6)}
                        maxDate={new Date(2020, 2, 10)}
                        className={classes.datePicker}
                    />
                </div>
            </Grid>
        </div>
    )
}
