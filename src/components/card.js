import React from 'react'
import '../scss/card.scss'

export default function card(props) {
    return (
        <div style={props.style} className={props.className}>
            {props.children}
        </div>
    )
}
