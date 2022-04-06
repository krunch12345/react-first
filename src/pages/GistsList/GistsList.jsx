import React from 'react'
import { CircularProgress } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { selectGists, selectGistsError, selectGistsLoading } from '../../store/gists/selectors'
import { getAllGists } from '../../store/gists/actions'

export const GistsList = () => {
    const gists = useSelector(selectGists)

    const error = useSelector(selectGistsError)

    const loading = useSelector(selectGistsLoading)

    const dispatch = useDispatch()

    const requestGists = () => {
        dispatch(
            getAllGists()
        )
    }

    React.useEffect(
        () => {
            requestGists()
        },
        []
    )

    if (loading) {
        return <CircularProgress />
    }

    if (error) {
        return (
            <>
                <h3>
                    Ошибка загрузки данных
                </h3>

                <button
                    onClick={requestGists}
                >
                    Повторить запрос
                </button>
            </>
        )
    }

    return (
        <>
            <h3>
                GISTS
            </h3>

            <ul>
                {gists?.map(
                    (gist) => (
                        <li key={gist.id}>
                            {gist.description}
                        </li>
                    )
                )}
            </ul>
        </>
    )
}
