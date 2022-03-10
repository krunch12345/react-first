export const getChatsFromState = (state) => state.chat

export const getChatList = (state) => getChatsFromState(state)?.list
