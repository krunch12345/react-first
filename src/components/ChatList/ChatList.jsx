import React from 'react'
import PropTypes from 'prop-types'
import { Button, List, ListItem, ListItemButton, ListItemText, ListSubheader, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getChatList } from '../../store/chats/selectors'
import { createChat } from '../../store/chats/actions'
import { nanoid } from 'nanoid'

export const ChatList = ({ selectedChat }) => {
    const [selectedChatId, setSelectedChatId] = React.useState()

    const chats = useSelector(getChatList)
    const dispatch = useDispatch()

    React.useEffect(
        () => setSelectedChatId(selectedChat),
        [selectedChat],
    )

    const navigate = useNavigate()

    const chatsItems = React.useMemo(
        () => {
            return chats.map(
                ({ id, name }) => (
                    <ListItem
                        key={id}
                        divider
                        disablePadding
                        sx={{ display: 'flex', alignContent: 'stretch', alignItems: 'stretch' }}
                    >
                        <ListItemButton
                            onClick={() => {
                                setSelectedChatId(id)
                                navigate(`/chats/${id}`)
                            }}
                            dense
                            selected={id === selectedChatId}
                            sx={{ flexDirection: 'column', alignItems: 'flex-start' }}
                        >
                            <ListItemText
                                primary={name}
                            />
                        </ListItemButton>
                    </ListItem>
                )
            )
        },
        [chats, navigate, selectedChatId],
    )

    const handleCreateChat = () => {
        const name = Date.now()
        dispatch(createChat({
            id: nanoid(),
            name: `Chat_${name}`,
        }))
    }

    return (
        <Stack direction='column' flex={1} justifyContent='space-between' alignItems='center' spacing={1} pb={2}>
            <List
                sx={{ width: '100%', overflowY: 'auto', overflowX: 'hidden' }}
                component='nav'
                subheader={
                    <ListSubheader component='div'>
                        Chats
                    </ListSubheader>
                }
                dense
            >
                {chats.length ? chatsItems : <ListItem>No chats</ListItem>}
            </List>

            <Button onClick={handleCreateChat}>
                Добавить чат
            </Button>
        </Stack>
    )
}

ChatList.propTypes = {
    selectedChat: PropTypes.string
}
