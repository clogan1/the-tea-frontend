import React from 'react'
import Sorts from './Sorts'
import Search from './Search'
import PostContainer from './PostContainer'
import { useHistory } from "react-router-dom"

function Feed({ posts, activeUser, deletePost, setSort, sort, search, setSearch, community, setCommunity, communities, offset, setOffset, limit }) {
    let history = useHistory();

    // CSS
    const leftNavStyle = {
        float: 'left',
        width: '15%',
        minHeight: '100vh',
        minWidth: '300px',
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
        float: 'left',
    }

    const createButton = {
        backgroundColor: '#F2F4F3',
        borderColor: '#539987',
        borderStyle: 'solid',
        width: '250px',
        padding: '10px',
        color: '#539987',
        fontWeight: 'bold',
        borderRadius: '4px',
        fontSize: '16px',
        fontFamily: 'Roboto',
    }

    const btndiv = {
        marginBottom: '10px'
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

    const sortDiv = {
        width: '80%',
        margin: 'auto',
        padding: '10px',
    }
    const seeMoreBtn = {
        backgroundColor: '#539987',
        padding: '5px',
        borderRadius: '4px',
        borderStyle: 'none',
        fontFamily: 'Roboto',
        height: '50px',
        width: '20%',
        marginLeft: '20px',
        color: 'white',
        fontWeight: 'bold',
    }
    function handleClick (){
        history.push('/newpost')
    }

   // console.log(communities)
    function selectCommunity(e){
        setCommunity(parseInt(e.target.value))
        // setOffset(0)
    }

    function selectAll () {
        setCommunity('')
        // setOffset(0)
    }

    function handleSeeMore(){
        if(community === ''){
            setOffset((offset) => offset + limit)
        }
    }

    return (
        <div>
            <div className="leftNav" style={leftNavStyle}>
                <div style={btndiv}>
                    <button onClick={handleClick} style={createButton} className="buttonHover">+ Create Post</button>
                </div>
                <br></br>
                <br></br>
                <button style={commButton} onClick={selectAll} className={(community === '')? "selectedCommunityBtn" : "commButton"}>🏠 &nbsp; Home </button>
                {communities.map(comm => {
                    return(
                        <button className={(community === comm.id)? "selectedCommunityBtn" : "commButton"} onClick={selectCommunity} style={commButton} key={comm.id} value={comm.id}>{comm.emoji} &nbsp; {comm.name}</button>
                    )
                })}
             

            </div>
            <div className="feedContainer" style={feedContStyle}>
                <div style={sortDiv}>
                    <Search search={search} setSearch={setSearch}/>
                    <Sorts setSort={setSort} sort={sort}/>
                </div>
                <PostContainer posts={posts} activeUser={activeUser} deletePost={deletePost}/>
                <button onClick={handleSeeMore} style={seeMoreBtn}>See More Posts</button>
            </div>
        </div>
    )
}

export default Feed
