import { CREATE_MESSAGE } from './actions'

const initialState = {
    messages: {},
}

export const messageReducer = (state = initialState, action) => {

    switch(action.type) {
    case(CREATE_MESSAGE): {
        const { chatId, message } = action.payload
        return {
            ...state,
            messages: {
                ...state.messages,
                [chatId]: [
                    ...(state.messages[chatId] || []),
                    message
                ]
            }
        }
    }

    default:
        return state
    }
}
