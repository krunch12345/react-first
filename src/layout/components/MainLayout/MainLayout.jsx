import React from 'react'
import { Box, Paper } from '@mui/material'
import PropTypes from 'prop-types'

export const MainLayout = ({ children }) => {
    return (
        <Box sx={{ height: '100vh' }} p={2}>
            <Paper elevation={3} sx={{ height: '100%', display: 'flex' }}>
                {children}
            </Paper>
        </Box>
    )
}

MainLayout.propTypes = {
    children: PropTypes.element,
}
