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
  switch(action.type){
    case 'LOGIN':
      return {
        ...state,
        token: action.token
      }
    case 'ADD_POSTS':
      return {
        ...state,
        posts : action.posts
      }
    case 'ADD_POST':
      const newPost = {
        id: state.posts.length+1,
        title: action.title,
        body: action.body,
        userId: state.posts.length+1
      }
      return {
        ...state,
        posts : [...state.posts,newPost]
      }
    default:
      return state;
  }
})