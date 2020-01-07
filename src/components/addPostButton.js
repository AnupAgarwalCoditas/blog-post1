import React from 'react'
import '../scss/buttonStyles.scss'

export default function AddPostButton(props) {
    return <button className='add-post-button' onClick={props.clicked}>+</button>
}
