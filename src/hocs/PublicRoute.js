import React from 'react'
import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'

export const PublicRoute = ({ authenticated, children }) => {
    return !authenticated ? children : <Navigate to='/chats' />
}

PublicRoute.propTypes = {
    authenticated: PropTypes.bool.isRequired,
    children: PropTypes.element.isRequired
}
