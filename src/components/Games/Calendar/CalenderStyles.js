import { makeStyles } from '@material-ui/core/styles'

const CalendarStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    gamesPaper: {
        paddingRight: 50,
        paddingLeft: 50,
        
        marginBottom: 30,
        
        
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
    },
    table: {
        minWidth: 300,
        width: 'auto',
    },

    title: {
        flex: '1 1 100%',
        textAlign: 'center',
    },

    datePickerGrid: {
        marginLeft: 100,
        marginTop: 50    
    },

    gamesDisplayGrid: {
        marginLeft: 100,
        marginTop: 50
    },

    datePicker: {
        backgroundColor: '#D3D3D3',
        width: 280,
        fontSize: 'large',
        textAlign: 'center',
        
        
    },

    gameTableGrid:{
        marginLeft: 100,
        marginTop: 50,
        backgroundColor: 'red'    
    }

    
})

export default CalendarStyles
