import React from 'react'
import { Button, List, ListItem, ListItemText, ListSubheader, Stack, TextField } from '@mui/material'
import { nanoid } from 'nanoid'

export const Chat = () => {
    const [messageList, setMessageList] = React.useState([])
    const [textMessage, setTextMessage] = React.useState('')

    const sendMessage = React.useCallback(
        (author, message) => {
            const newMessage = {
                id: nanoid(),
                author,
                message,
            }

            setMessageList(
                (messageList) => (
                    [
                        ...messageList,
                        newMessage,
                    ]
                )
            )
        },
        [],
    )

    const messagesItems = React.useMemo(
        () => {
            return messageList.map(
                ({ id, author, message }) => (
                    <ListItem
                        key={id}
                        sx={{
                            display: 'flex',
                            alignContent: 'stretch',
                            alignItems: 'flex-end',
                            backgroundColor: author === 'bot' ? 'whitesmoke' : ''
                        }}
                    >
                        <ListItemText
                            primary={`${author}: ${message}`}
                        />
                    </ListItem>
                )
            )
        },
        [messageList],
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
        <Stack
            flex={1}
            justifyContent='space-between'
        >
            <List
                sx={{ width: '100%', overflowY: 'auto', overflowX: 'hidden' }}
                component='nav'
                subheader={
                    <ListSubheader component='div'>
                        Chat
                    </ListSubheader>
                }
                dense
            >
                {messageList.length ? messagesItems : <ListItem>Send your first message</ListItem>}
            </List>

            <Stack
                component={'form'}
                onSubmit={onSubmitMessage}
                flexDirection='row'
            >
                <TextField
                    autoFocus
                    margin='dense'
                    type='text'
                    placeholder='Enter your message'
                    required
                    fullWidth
                    value={textMessage}
                    onChange={onChangeMessage}
                />

                <Button type='submit' variant='contained'>
                    Send
                </Button>
            </Stack>
        </Stack>
    )
}
