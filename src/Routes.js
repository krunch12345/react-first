import React from 'react'
import { firebaseApp } from './services/firebase'

import {
    Routes as Switch,
    Route,
} from 'react-router'

import {
    Home,
    Profile,
    Messenger,
    GistsList,
    Login,
    SignUp
} from './pages'
import { PrivateRoute } from './hocs/PrivateRoute'

export const Routes = () => {
    const [authed, setAuthed] = React.useState(false)

    React.useEffect(
        () => {
            firebaseApp.auth().onAuthStateChanged(
                (user) => {
                    if (user) {
                        setAuthed(true)
                    } else {
                        setAuthed(false)
                    }
                })
        },
        []
    )

    return (
        <Switch>
            <Route
                path='/'
                element={ <Home /> }
            />

            <Route
                path='/profile'
                element={
                    <PrivateRoute authenticated={authed}>
                        <Profile />
                    </PrivateRoute>
                }
            />

            <Route
                path='/chats'
                element={
                    <PrivateRoute authenticated={authed}>
                        <Messenger />
                    </PrivateRoute>
                }
            />

            <Route
                path='/chats/:chatId'
                element={
                    <PrivateRoute authenticated={authed}>
                        <Messenger />
                    </PrivateRoute>
                }
            />

            <Route
                path='/gists'
                element={<GistsList />}
            />

            <Route
                path='/login'
                element={<Login />}
            />

            <Route
                path='/signup'
                element={<SignUp />}
            />
        </Switch>
    )
}
