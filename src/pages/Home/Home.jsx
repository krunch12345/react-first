import React from 'react'
import { Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <Stack justifyContent='space-between' alignItems='center'>
            <Typography variant='h3' component='div' gutterBottom>
                Home
            </Typography>

            <Stack>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Sign Up</Link>
            </Stack>
        </Stack>
    )
}
