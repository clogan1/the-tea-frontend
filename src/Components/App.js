import '../App.css'
import { Route, Switch } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Feed from './Feed'
import CreatePost from './CreatePost'
import Header from './Header'


function App() {
  const [posts, setPosts] = useState([])
  const [sort, setSort] = useState('new')
  const [community, setCommunity] = useState('')
  const [search, setSearch] = useState('')
  const [communitiesList, setCommunitiesList] = useState([])
  const [activeUser, setActiveUser] = useState({})


  useEffect(() => {
    fetch(`http://localhost:9292/posts`)
    .then(res => res.json())
    .then(setPosts)
  }, [])

  useEffect(() => {
    fetch(`http://localhost:9292/communities`)
    .then(res => res.json())
    .then(setCommunitiesList)
  }, [])

  useEffect(() => {
    //defaulting to user 1 - update logic in the future
    fetch(`http://localhost:9292/users/1`)
    .then(res => res.json())
    .then(setActiveUser)
  }, [])

  function addPost(post){
    setPosts([post, ...posts])
  }
 

  function deletePost(id){
    const updatedPosts = posts.filter(post => post.id !== id)
    setPosts(updatedPosts)
  }

  const displayPosts = posts.filter(post => {
    if(community !== ''){
      return post.community_id === community
    }else {return post}
  }).sort((post1, post2) => {
    if(sort === 'top'){
      if (post1.likes.length > post2.likes.length) return -1
    } else if (sort === 'new'){
      if (post1.created_at> post2.created_at) return -1
    }
  })

  return (
    <div className="App">
      <Header activeUser={activeUser}/>
      <div className="app-body-container">
        <Switch>
          <Route path='/newpost'>
            <CreatePost communities={communitiesList} activeUser={activeUser} addPost={addPost} setSort={setSort}/>
          </Route>

          <Route exact path="/">
            <Feed posts={displayPosts} activeUser={activeUser} deletePost={deletePost} setSort={setSort} search={search} setSearch={setSearch} community={community} setCommunity={setCommunity} communities={communitiesList}/>
          </Route>
        </Switch>

      </div>
    </div>
  );
}

export default App;
