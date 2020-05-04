import { withStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import { pink } from '@material-ui/core/colors'
export const ColorButton = withStyles(() => ({
    root: {
        backgroundColor: 'pink',
        '&:hover': {
            backgroundColor: pink[700],
        },
    },
}))(Button)
