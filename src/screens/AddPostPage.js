import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import '../scss/addPostPage.scss'

function AddPostPage(props) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    let inputHandler = (func,event) => func(event.target.value)
    let addPostHandler = ()=>{
        props.addPost({title,body:content})
        props.history.push('/Posts')
    }
    let onCancelHandler = ()=>props.history.push('/Posts')

    if(!props.token)return <Redirect to="/"/>
    return (
        <form onSubmit={e=>e.preventDefault()} className='addPost'>
            <div className='formHeading'>
                <h1>Add Post</h1>
            </div>
            <div className='formBody'>
                <input type='text' value={title} placeholder='Title...' onChange={e=>inputHandler(setTitle,e)}></input>
                <textarea rows='32' value={content}  placeholder='Content...' onChange={e=>inputHandler(setContent,e)}></textarea>
                <div className='formButtons'>
                    <button className='addButton' onClick={addPostHandler}>Add Post</button>
                    <button className='cancelButton' onClick={onCancelHandler}>Cancel</button>
                </div>
            </div>                
        </form>
    )
}

let mapStateToProps = state => {
    return { token : state.token }
}

let mapDispatchToProps = dispatch => {
    return { addPost : (post) => dispatch({type: 'addPost', ...post }) }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddPostPage);