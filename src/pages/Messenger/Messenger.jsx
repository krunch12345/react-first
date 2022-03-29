import React from 'react'
import { Divider, Grid, Stack } from '@mui/material'
import { Chat, ChatList } from '../../components'
import { chatsAll } from '../../constants/chatsAll'
import { useParams } from 'react-router'
import { Navigate } from 'react-router-dom'

export const Messenger = () => {
    const { chatId } = useParams()

    if (chatId && !chatsAll.find((chat) => chat.id === chatId)) {
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
                    chats={chatsAll}
                    selectedChat={chatId}
                />
            </Grid>

            <Grid item xs={9} display='flex' flex={1}>
                {chatId ? <Chat /> : 'Select chat!'}
            </Grid>
        </Stack>
    )
}
