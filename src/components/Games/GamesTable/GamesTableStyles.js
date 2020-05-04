import { makeStyles } from '@material-ui/core/styles'

const GamesTableStyles = makeStyles({
    

    gameInfotable: {       
        background: '#343a40',
        minWidth: 600,        
        width: 'auto',
        height: 300,
        marginRight: 30,
        overflowX: 'scroll'
    },

    
    table: {
        minWidth: 500,      
        width: 'auto',
        'background': 'pink',
        
    },

    title: {
        flex: '1 1 100%',
        textAlign: 'center',
    },

    button: {
        width: 200,
        marginTop: 20
    }
    
})

export default GamesTableStyles
