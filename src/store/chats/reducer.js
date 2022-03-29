import { CREATE_CHAT } from './actions'

const initialState = {
    list: [],
}

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
    case(CREATE_CHAT): {
        return {
            ...state,
            list: [
                ...state.list,
                action.payload,
            ]
        }
    }
    default: {
        return state
    }
    }
}
