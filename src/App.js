import React from 'react'
import './utils/reset.sass'
import './utils/common.sass'
import { CssBaseline } from '@mui/material'

import { MainLayout } from './layout'
import { Messenger } from './pages'

export const App = () => {
    return (
        <>
            <CssBaseline />
            <MainLayout>
                <Messenger />
            </MainLayout>
        </>
    )
}
