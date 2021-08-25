import React from 'react'
import Sorts from './Sorts'
import Search from './Search'
import PostContainer from './PostContainer'
import { useHistory } from "react-router-dom"

function Feed({ posts, activeUser, deletePost, setSort, search, setSearch }) {
    let history = useHistory();

    // CSS
    const leftNavStyle = {
        float: 'left',
        width: '10%',
        minHeight: '100vh',
        // backgroundColor: '#E4F1EE',
        textAlign: 'left',
        padding: '10px',
    }

    const feedContStyle = {
        padding: '10px',
        width: '80%',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
    }

    function handleClick (){
        history.push('/newpost')
    }

    return (
        <div>
            <div className="leftNav" style={leftNavStyle}>
                <button onClick={handleClick}>Create a Post</button>
                <h3>Communities:</h3>
                <p>🌹  Bachelor Nation</p>
                <p>🍸  Bravo</p>
                <p>🌴  Love Island</p>
                <p>🌎  90 Day Fiance</p>

            </div>
            <div className="feedContainer" style={feedContStyle}>
                <Search search={search} setSearch={setSearch}/>
                <Sorts setSort={setSort} />
                <PostContainer posts={posts} activeUser={activeUser} deletePost={deletePost}/>
            </div>
        </div>
    )
}

export default Feed
