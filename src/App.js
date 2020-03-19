import React, { useEffect, useState } from 'react'
import './App.css';

import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts, deletePost, addPost, updatePost } from './redux/actions'

import UpdateForm from './components/UpdateForm'
import CreateForm from './components/CreateForm'

const App = () => {
  
  const dispatch = useDispatch()
  const posts = useSelector(state => state.postsReducer)

  const [id, setId] = useState()

  useEffect(()=> {
     dispatch(fetchPosts()) 
   }, [dispatch])
 
  return (
   <>
   { posts.length !== 0 ? posts.map( post => <><li onClick={()=>dispatch(deletePost(post.id))} key={ post.id } ><strong> ID: </strong>{ post.id } - { post.title } - {post.content}</li><button onClick={()=>setId(post.id)}>Update</button></>) : "no post added" }
   
    <CreateForm info={{dispatch, addPost}} />

    { id !== undefined ?
  
    <UpdateForm info={{dispatch, id, updatePost}} />
    : null }

    <h1>Click on li item to delete</h1>
   </>
  )
}

export default App