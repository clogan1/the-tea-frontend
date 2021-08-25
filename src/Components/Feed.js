import React from 'react'
import Sorts from './Sorts'
import Search from './Search'
import PostContainer from './PostContainer'
import { useHistory } from "react-router-dom"

function Feed({ posts, activeUser, deletePost, setSort, search, setSearch, community, setCommunity, communities }) {
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

   // console.log(communities)
    function selectCommunity(e){
        setCommunity(parseInt(e.target.value))
    }

    return (
        <div>
            <div className="leftNav" style={leftNavStyle}>
                <button onClick={handleClick}>Create a Post</button>
                <h3>Communities:</h3>
                {communities.map(community => {
                    return(
                        <button onClick={selectCommunity} key={community.id} value={community.id}>{community.emoji} {community.name}</button>
                    )
                })}
             

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
