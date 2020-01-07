import React from 'react'
import '../scss/buttonStyles.scss'

export default function AddPostButton(props) {
    return <button className='addPostButton' onClick={props.clicked}>+</button>
}
