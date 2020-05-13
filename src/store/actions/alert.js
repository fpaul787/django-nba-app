import { v4 as uuid } from 'uuid'
import { SET_ALERT, REMOVE_ALERT } from './types'

export const setAlert = (
    msg,
    alertType,
    registrationError = false,
    timeout = 5000
) => (dispatch) => {
    var id

    if (!registrationError) {
        id = uuid()
        dispatch({
            type: SET_ALERT,
            payload: { msg, alertType, id },
        })

        setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout)
    } else {
        Object.keys(msg).forEach(function (key) {
            id = uuid()
            msg[key].forEach((msg) => {
                console.log(id)
                dispatch({
                    type: SET_ALERT,
                    payload: { msg, alertType, id },
                })
            })
            setTimeout(
                () => dispatch({ type: REMOVE_ALERT, payload: id }),
                timeout
            )
        })
    }
}
