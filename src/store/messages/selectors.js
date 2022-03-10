export const getMessagesFromState = (state) => state.message

export const getMessages = (state) => getMessagesFromState(state).messages

export const getMessageListByChat = (chatId) => (state) => getMessages(state)[chatId]
