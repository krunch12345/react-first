import React from 'react'
import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({ authenticated, children }) => {
    return authenticated ? children : <Navigate to='/login' />
}

PrivateRoute.propTypes = {
    authenticated: PropTypes.bool.isRequired,
    children: PropTypes.element.isRequired
}
