import React from 'react'

export const Chat = () => {
    const [messageList, setMessageList] = React.useState([])
    const [textMessage, setTextMessage] = React.useState('')

    const sendMessage = React.useCallback(
        (author, message) => {
            const newMessage = {
                author,
                message,
            }

            const updatedMessageList = [...messageList]
            updatedMessageList.push(newMessage)

            setMessageList(updatedMessageList)
        },
        [messageList]
    )

    React.useEffect(
        () => {
            const lastMessage = messageList[messageList.length - 1]

            if (messageList.length !== 0 && lastMessage?.author !== 'bot') {
                const send = setTimeout(
                    () => sendMessage('bot', 'Я есть Грут!'),
                    1000,
                )
                return () => clearTimeout(send)
            }
        },
        [messageList, sendMessage],
    )

    const resetMessage = () => setTextMessage('')

    const onSubmitMessage = (e) => {
        e.preventDefault()

        sendMessage('user', textMessage)
        resetMessage()
    }

    const onChangeMessage = (e) => setTextMessage(e.target.value)

    return (
        <div>
            <form onSubmit={onSubmitMessage}>
                <input
                    type='text'
                    placeholder='Сообщени...'
                    value={textMessage}
                    onChange={onChangeMessage}
                />
                <button>
                    Отправить
                </button>
            </form>

            <ul>
                {messageList.map(
                    ({ author, message }, index) => (
                        <li key={index}>
                            {author}: {message}
                        </li>
                    )
                )}
            </ul>
        </div>
    )
}
