import React from 'react'
import {
    Routes as Switch,
    Route,
} from 'react-router'

import {
    Home,
    Profile,
    Messenger
} from './pages'

export const Routes = () => {
    return (
        <Switch>
            <Route
                path='/'
                element={ <Home /> }
            />

            <Route
                path='/profile'
                element={ <Profile /> }
            />

            <Route
                path='/chats'
                element={ <Messenger /> }
            />

            <Route
                path='/chats/:chatId'
                element={ <Messenger /> }
            />
        </Switch>
    )
}
