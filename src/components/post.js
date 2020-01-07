import React from 'react'
import { withRouter } from 'react-router-dom'


function post(props) {
    return (
        <article onClick={()=>{props.history.push(`${props.location.pathname}/${props.id}`)}} style={props.style} className={props.className || 'post-article'}>
            <header className='post-header'><h1 className='post-h1'>{props.title}</h1></header>
            <blockquote className='post-blockquote'>{(props.limit && props.body.length>props.limit)?`${props.body.substring(0,props.limit)}...`:props.body}</blockquote>
        </article>
    )
}

export default withRouter(post)