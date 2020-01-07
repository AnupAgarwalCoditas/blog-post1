import React,{useEffect, useState} from 'react'
import {Redirect} from 'react-router-dom'
import Axios from 'axios'
import Posts from '../components/posts'
import {connect} from 'react-redux'
import AddPostButton from '../components/addPostButton'
import '../scss/postsPage.scss'

function PostsPage(props) {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        if(props.posts.length===0)
        {
            Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res=>props.addPosts(res.data))
            .catch(console.log)
        }
        else if(posts.length===0)
            setPosts(props.posts)
    })
    
    if(!props.token)return <Redirect to="/"/>
    if(posts.length===0)return <p>Loading...</p>
    return(
        <div className='posts-page'>
            <header className='header'>
                <h2 className='h2'>All Blog Posts</h2>
            </header>
            <Posts className='posts' posts={posts}/>
            <AddPostButton clicked={()=>{props.history.push('/AddPost')}}/>
        </div>
    )
}

let mapStateToProps = state => {
    return {
        token : state.token,
        posts : state.posts
    }
}

let mapDispatchToProps = dispatch => {
    return {
        addPosts : (posts) => dispatch({type: 'ADD_POSTS', posts })
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostsPage);