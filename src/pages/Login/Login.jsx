import React from 'react'
import { firebaseApp } from '../../services/firebase'
import { Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export const Login = () => {
    const [email, setEmail] = React.useState('')

    const [password, setPassword] = React.useState('')

    const [error, setError] = React.useState('')

    const handlePassChange = (e) => {
        setPassword(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        setError('')
        try {
            await firebaseApp.auth().signInWithEmailAndPassword(email, password)
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <Stack justifyContent='space-between' alignItems='center'>
            <Typography variant='h3' component='div' gutterBottom>
                Login
            </Typography>

            <form onSubmit={handleSubmit}>
                <p>Fill in the form below to login to your account.</p>
                <div>
                    <input
                        placeholder='Email'
                        name='email'
                        type='email'
                        onChange={handleEmailChange}
                        value={email}
                    />
                </div>
                <div>
                    <input
                        placeholder='Password'
                        name='password'
                        onChange={handlePassChange}
                        value={password}
                        type='password'
                    />
                </div>
                <div>
                    {error && <p>{error}</p>}
                    <button type='submit'>Login</button>
                </div>
                <hr />
                <p>
                    Don't have an account? <Link to='/signup'>Sign up</Link>
                </p>
            </form>
        </Stack>
    )
}
