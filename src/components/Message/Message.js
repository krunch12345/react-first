import React from 'react'
import PropTypes from 'prop-types'
import styles from './message.module.sass'

export const Message = ({ text }) => {
    return (
        <div className={styles.container}>
            {text}
        </div>
    )
}

Message.propTypes = {
    text: PropTypes.string.isRequired
}
