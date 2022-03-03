import React from 'react'
import PropTypes from 'prop-types'
import { List, ListItem, ListItemButton, ListItemText, ListSubheader } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const ChatList = ({ chats = [], selectedChat }) => {
    const [selectedChatId, setSelectedChatId] = React.useState()

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

    return (
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
    )
}

ChatList.propTypes = {
    chats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        })
    ),
    selectedChat: PropTypes.string
}
