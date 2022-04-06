import React from 'react'

import { render, fireEvent, act } from '@testing-library/react'

import { describe, it, expect } from '@testing-library/react'

import { Login } from '../index'
import { LoginFormTestIds } from './Login'

import { firebaseApp } from '../../services/firebase'

describe(
    'Login',
    () => {
        it(
            'корректная авторизация',
            () => {
                const login = 'example@example.com'
                const password = '12345678'

                const component = render(<Login />)

                const loginField = component.queryByTestId(LoginFormTestIds.loginField)
                const passwordField = component.queryByTestId(LoginFormTestIds.passwordField)
                const submitButton = component.queryByTestId(LoginFormTestIds.submit)

                act(() => {
                    fireEvent.change(loginField, {
                        target: {
                            value: login,
                        }
                    })
                    fireEvent.change(passwordField, {
                        target: {
                            value: password,
                        }
                    })
                })

                act(() => {
                    fireEvent.click(submitButton)
                })

                expect((email, password) => firebaseApp.auth.signInWithEmailAndPassword(email, password)).toHaveBeenCalledWith(login, password)
            },
        )
    },
)