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
        width: '15%',
        minHeight: '100vh',
        // backgroundColor: '#E4F1EE',
        textAlign: 'left',
        padding: '10px',
    }

    const feedContStyle = {
        padding: '10px',
        width: '70%',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
    }

    const createButton = {
        backgroundColor: 'Transparent',
        borderColor: '#539987',
        borderStyle: 'solid',
        width: '250px',
        padding: '10px',
        color: '#539987',
        fontWeight: 'bold',
        borderRadius: '4px',
        fontSize: '16px',
        fontFamily: 'Roboto'
    }

    const commButton = {
        backgroundColor: 'Transparent',
        borderColor: 'none',
        borderStyle: 'none',
        width: '250px',
        padding: '10px',
        color: 'black',
        borderRadius: '4px',
        textAlign: 'left',
        fontSize: '16px',
        fontFamily: 'Roboto'
    }

    function handleClick (){
        history.push('/newpost')
    }

   // console.log(communities)
    function selectCommunity(e){
        setCommunity(parseInt(e.target.value))
    }

    function selectAll () {
        setCommunity('')
    }

    return (
        <div>
            <div className="leftNav" style={leftNavStyle}>
                <button onClick={handleClick} style={createButton}>+ Create Post</button>
                <br></br>
                <br></br>
                <button style={commButton} onClick={selectAll} className={(community === '')? "selectedCommunityBtn" : ""}>🏠 &nbsp; Home </button>
                {communities.map(comm => {
                    return(
                        <button className={(community === comm.id)? "selectedCommunityBtn" : ""} onClick={selectCommunity} style={commButton} key={comm.id} value={comm.id}>{comm.emoji} &nbsp; {comm.name}</button>
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
