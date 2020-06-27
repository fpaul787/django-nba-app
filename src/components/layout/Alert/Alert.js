import React from 'react'
import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Alert extends Component {

    render() {
        const { alerts } = this.props

        if (alerts.length < 1) {
            return (<div></div>)
        }
        else {
            return (
                <div>
                    {alerts.map((alert) => {
                        return (
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
                        )
                    })}
                </div>
            )
        }

    }
}

Alert.propTypes = {
    alerts: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => {
    return {
        alerts: state.alertReducer, // from reducer
    }
}
export default connect(mapStateToProps)(Alert)
