import { TOGGLE_SHOW_PROFILE } from './action'

const initialState = {
    isShow: false,
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
    case TOGGLE_SHOW_PROFILE:
        return {
            isShow: !state.isShow
        }
    default:
        return state
    }
}