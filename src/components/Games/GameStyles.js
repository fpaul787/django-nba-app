import { makeStyles } from '@material-ui/core/styles'

const GamesStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    gamesPaper: {
        paddingRight: 50,
        paddingLeft: 50,

        marginBottom: 30,
        zIndex: 4,
        height: 500,
        width: 300,
        overflowY: 'auto',
        background: '#343a40',
    },
    showGamesItem: {
        marginLeft: -50,
        width: 'auto',
        height: 'auto',

        '& p': {
            textAlign: 'center',
            color: 'black',
            marginTop: 30,
        },
    },

    gameInfoItem: {
        background: 'white',
        minWidth: 300,

        width: 'auto',
        height: 300,
    },

    ListItem: {
        background: 'pink',
        textAlign: 'center',
        marginTop: 30,
        marginBottom: 30,
        zIndex: 'inherit',
    },

    datePickerGrid: {
        marginLeft: 70,
        marginTop: 50,
    },

    gamesDisplayGrid: {
        marginLeft: 40,
        marginTop: 50,
    },

    gameTableGrid: {
        marginLeft: 70,
        marginTop: 50,
    },
})

export default GamesStyles
