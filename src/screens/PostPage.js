import React, { useEffect, useState } from 'react'
import Post from '../components/post'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import '../scss/postPage.scss'

function PostPage(props) {
    const [post, setPost] = useState(null)
    useEffect(() => {
        if(!post)
            setPost(props.posts[props.match.params['id']-1])
    })

    if(!props.token)return <Redirect to="/"/>
    if(!post)
        return <p>Loading...............</p>

    return (
        <div className='postPage'>
            <Post title={post.title} body={post.body}></Post>
        </div>
    )
}

export default connect(state => {return {token : state.token, posts: state.posts}})(PostPage)