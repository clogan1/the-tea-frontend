import React from 'react'
import PostCard from './PostCard'

function PostContainer({posts, activeUser, deletePost }) {

  // console.log("fromContainer:", activeUser)

  const containerStyle = {
    width: '80%',
    margin: 'auto',
    minHeight: '100vh',
    padding: '10px'
  }

    return (
        <div style={containerStyle}>
          {posts.map(post => {
            return(
              <PostCard post={post} key={post.id} activeUser={activeUser} deletePost={deletePost}/>
            )
          })}
        </div>
    )
}

export default PostContainer
