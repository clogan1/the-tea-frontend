import '../App.css'
import { Route, Switch } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Feed from './Feed'
import CreatePost from './CreatePost'


function App() {
  const [posts, setPosts] = useState([])
  const [sort, setSort] = useState('new')
  // const [community, setCommunity] = useState('')
  const [search, setSearch] = useState('')
  const [communitiesList, setCommunitiesList] = useState([])
  const [activeUser, setActiveUser] = useState(1)

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

  function addPost(post){
    setPosts([post, ...posts])
  }
  // console.log(posts)
  //console.log(communitiesList)

  function deletePost(id){
    const updatedPosts = posts.filter(post => post.id !== id)
    setPosts(updatedPosts)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>The Tea</h1>
      </header>
      <div className="app-body-container">
        <Switch>
          <Route path='/newpost'>
            <CreatePost communities={communitiesList} activeUser={activeUser} addPost={addPost}/>
          </Route>

          <Route exact path="/">
            <Feed posts={posts} activeUser={activeUser} deletePost={deletePost} setSort={setSort} search={search} setSearch={setSearch}/>
          </Route>
        </Switch>

      </div>
    </div>
  );
}

export default App;
