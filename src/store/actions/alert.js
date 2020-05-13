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
        const idList = []
        Object.keys(msg).forEach(function (key) {
            msg[key].forEach((msg) => {
                id = uuid()
                idList.push(id)
                dispatch({
                    type: SET_ALERT,
                    payload: { msg, alertType, id },
                })
                setTimeout(() => {
                    dispatch({ type: REMOVE_ALERT, payload: idList.pop() })
                }, timeout)
            })
        })
    }
}
