import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { TOGGLE_SHOW_PROFILE } from '../../store/profile/action'
import { Checkbox, Stack, Typography } from '@mui/material'
import { Favorite, FavoriteBorder } from '@mui/icons-material'

const label = {
    inputProps: {
        'aria-label': 'Like checkbox'
    }
}

export const Profile = () => {
    const dispatch = useDispatch()
    const isShow = useSelector(
        (state) => state.isShow
    )

    return (
        <Stack justifyContent='space-between' alignItems='center'>
            <Typography variant='h3' component='div' gutterBottom>
                Profile
            </Typography>

            <Checkbox
                {...label}
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                checked={isShow}
                onChange={() => {
                    dispatch({
                        type: TOGGLE_SHOW_PROFILE
                    })
                }}
            />
        </Stack>
    )
}
