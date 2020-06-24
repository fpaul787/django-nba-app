import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Alert = ({ alerts }) =>
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map((alert) => (
        <div
            key={alert.id}
            style={{
                textAlign: 'center',
                marginTop: '15px',
                marginLeft: '25%',
                marginRight: '25%',
            }}
            className={`alert alert-${alert.alertType} center-block`}
            role="alert"
        >
            {alert.msg}
        </div>
    ))

Alert.propTypes = {
    alerts: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => {
    return {
        alerts: state.alertReducer, // from reducer
    }
}
export default connect(mapStateToProps)(Alert)
