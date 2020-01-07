import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LoginPage from './screens/LoginPage'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import PostsPage from './screens/PostsPage';
import AddPostPage from './screens/AddPostPage';
import PostPage from './screens/PostPage';
import pageNotFoundPage from './screens/PageNotFoundPage';
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/' exact component={LoginPage} />
          <Route path='/Posts/:id' component={PostPage} />
          <Route path='/Posts' component={PostsPage} />
          <Route path='/AddPost' component={AddPostPage} />
          <Route component={pageNotFoundPage} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;

const initialState = {
  token: null,
  posts: []
}

const store = createStore((state=initialState,action)=>{
  // console.log(action);
  switch(action.type){
    case 'login':
      return {
        ...state,
        token: action.token
      }
    case 'addPosts':
      return {
        ...state,
        posts : action.posts
      }
    case 'addPost':
      const newPost = {
        id: state.posts.length+1,
        title: action.title,
        body: action.body,
        userId: state.posts.length+1
      }
      const newPosts = [...state.posts]
      newPosts.push(newPost)
      return {
        ...state,
        posts : newPosts
      }
    default:
      return state;
  }
})