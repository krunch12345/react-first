import React from 'react'
import './utils/reset.sass'
import './utils/common.sass'
import { CssBaseline } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from './Routes'
import { Provider } from 'react-redux'
import { store } from './store'

import { MainLayout } from './layout'

export const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <CssBaseline />
                <MainLayout>
                    <Routes />
                </MainLayout>
            </BrowserRouter>
        </Provider>
    )
}
