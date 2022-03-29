import React from 'react'
import './utils/reset.sass'
import './utils/common.sass'
import { CssBaseline } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from './Routes'

import { MainLayout } from './layout'

export const App = () => {
    return (
        <BrowserRouter>
            <CssBaseline />
            <MainLayout>
                <Routes />
            </MainLayout>
        </BrowserRouter>
    )
}
