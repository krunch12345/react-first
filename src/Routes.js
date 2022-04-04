import React from 'react'
import {
    Routes as Switch,
    Route,
} from 'react-router'

import {
    Home,
    Profile,
    Messenger,
    GistsList,
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

            <Route
                path='/gists'
                element={<GistsList />}
            />
        </Switch>
    )
}
