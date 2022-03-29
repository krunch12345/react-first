import React from 'react'
import { Button, List, ListItem, ListItemText, ListSubheader, Stack, TextField } from '@mui/material'
import { nanoid } from 'nanoid'
import { useParams } from 'react-router'
import { getMessageListByChat } from '../../store/messages/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { createMessageWithThunk } from '../../store/messages/actions'

export const Chat = () => {
    const [textMessage, setTextMessage] = React.useState('')

    const { chatId } = useParams()
    const messages = useSelector(getMessageListByChat(chatId))
    const dispatch = useDispatch()

    const chatMessages = React.useMemo(
        () => messages || [],
        [messages],
    )

    const messagesItems = React.useMemo(
        () => {
            return chatMessages.map(
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
        [chatMessages],
    )

    // React.useEffect(
    //     () => {
    //         const lastMessage = chatMessages[chatMessages.length - 1]
    //
    //         if (chatMessages.length !== 0 && lastMessage?.author !== 'bot') {
    //             const send = setTimeout(
    //                 () => {
    //                     dispatch(createMessage(chatId, {
    //                         id: nanoid(),
    //                         author: 'bot',
    //                         message: 'Я есть Грут!',
    //                     }))
    //                 },
    //                 1000,
    //             )
    //             return () => clearTimeout(send)
    //         }
    //     },
    //     [chatId, chatMessages, dispatch],
    // )

    const resetMessage = () => setTextMessage('')

    const handleCreateMessage = (e) => {
        e.preventDefault()

        dispatch(createMessageWithThunk(chatId, {
            id: nanoid(),
            author: 'user',
            message: textMessage,
        }))

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
                {chatMessages.length ? messagesItems : <ListItem>Send your first message</ListItem>}
            </List>

            <Stack
                component={'form'}
                onSubmit={handleCreateMessage}
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
