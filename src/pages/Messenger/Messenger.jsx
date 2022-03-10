import React from 'react'
import { Divider, Grid, Stack } from '@mui/material'
import { Chat, ChatList } from '../../components'
import { useParams } from 'react-router'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getChatList } from '../../store/chats/selectors'

export const Messenger = () => {
    const { chatId } = useParams()

    const chats = useSelector(getChatList)

    if (chatId && !chats.find((chat) => chat.id === chatId)) {
        return <Navigate replace to='/chats' />
    }

    return (
        <Stack
            direction='row'
            divider={<Divider orientation='vertical' flexItem />}
            flex={1}
            height='100%'
        >
            <Grid item xs={3} display='flex' flex={1}>
                <ChatList
                    selectedChat={chatId}
                />
            </Grid>

            <Grid item xs={9} display='flex' flex={1}>
                {chatId ? <Chat /> : 'Select chat!'}
            </Grid>
        </Stack>
    )
}
