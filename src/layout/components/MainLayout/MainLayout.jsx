import React from 'react'
import { Paper, Stack } from '@mui/material'
import PropTypes from 'prop-types'
import { Header } from '../../../components'

export const MainLayout = ({ children }) => {
    return (
        <Stack
            sx={{ height: '100vh', display: 'flex', flex: 1 }}
        >
            <Header />

            <Paper
                elevation={3}
                sx={{ height: '100%', alignContent: 'stretch', alignItems: 'stretch', margin: 2 }}
            >
                {children}
            </Paper>
        </Stack>
    )
}

MainLayout.propTypes = {
    children: PropTypes.element,
}
