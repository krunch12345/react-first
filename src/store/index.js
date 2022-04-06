import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { profileReducer } from './profile/reducer'
import { chatsReducer } from './chats/reducer'
import { messageReducer } from './messages/reducer'
import { gistsReducer } from './gists/reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    combineReducers({
        profile: profileReducer,
        chat: chatsReducer,
        message: messageReducer,
        gists: gistsReducer,
    }),
    composeEnhancers(
        applyMiddleware(thunk)
    )
)