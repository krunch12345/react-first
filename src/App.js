import React from 'react'
import './utils/reset.sass'
import './utils/common.sass'
import { Message } from './components'

const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, tenetur.'

export const App = () => {
    return (
        <Message text={text} />
    )
}
