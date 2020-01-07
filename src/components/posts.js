import React from 'react'
import Post from './post'

export default function posts(props) {
    // console.log('props', props)
    return (
        <div style={props.style} className={props.className}>
            {props.posts.map((post,index)=>{
                return <Post className='post' 
                    id={post.id}
                    key={index} 
                    title={post.title} 
                    body={post.body} 
                    limit={80}
                    />
            })}
        </div>
    )
}