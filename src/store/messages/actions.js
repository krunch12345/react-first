import { nanoid } from 'nanoid'

export const CREATE_MESSAGE = 'CREATE_MESSAGE'

export const createMessage = (chatId, message) => ({
    type: CREATE_MESSAGE,
    payload: {
        chatId,
        message
    }
})

export const createMessageWithThunk = (chatId, message) => (dispatch) => {
    dispatch(createMessage(chatId, message))
    if (message.author !== 'bot') {
        const botMessage = {
            id: nanoid(),
            author: 'bot',
            message: 'Я есть Грут!',
        }
        setTimeout(
            () => dispatch(
                createMessage(chatId, botMessage)
            ),
            2000
        )
    }
}
