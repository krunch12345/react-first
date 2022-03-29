import React from 'react'
import { Divider, Grid, Stack } from '@mui/material'
import { ChatList, Chat } from '../../components'
import { chatsAll } from '../../constants/chatsAll'

export const Messenger = () => {
    return (
        <Stack
            direction='row'
            divider={<Divider orientation='vertical' flexItem />}
            flex={1}
        >
            <Grid item xs={3} display='flex' flex={1}>
                <ChatList chats={chatsAll} />
            </Grid>

            <Grid item xs={9} display='flex' flex={1}>
                <Chat />
            </Grid>
        </Stack>
    )
}
