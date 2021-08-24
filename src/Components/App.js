import '../App.css'
import { Route, Switch } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Feed from './Feed'
import CreatePost from './CreatePost'


function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch(`http://localhost:9292/posts`)
    .then(res => res.json())
    .then(setPosts)
  }, [])

  console.log(posts)


  return (
    <div className="App">
      <header className="App-header">
        <h1>The Tea</h1>
      </header>
      <div className="app-body-container">
        <Switch>
          <Route path='/newpost'>
            <CreatePost />
          </Route>

          <Route exact path="/">
            <Feed />
          </Route>
        </Switch>

      </div>
    </div>
  );
}

export default App;
