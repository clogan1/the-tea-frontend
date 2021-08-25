import React from 'react'
import PostCard from './PostCard'

function PostContainer({posts, activeUser, deletePost }) {

  // console.log("fromContainer:", posts)

  const containerStyle = {
    backgroundColor: '#E4F1EE',
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
