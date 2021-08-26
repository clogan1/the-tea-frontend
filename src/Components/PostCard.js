import React from 'react'
import Reply from './Reply'
import ReplyForm from './ReplyForm'
import { useState, useEffect } from 'react'

function PostCard({post, activeUser, deletePost}) {

    const [showReplies, setShowReplies] = useState(false)
    const [alreadyLiked, setAlreadyLiked] = useState(false)
    const [likeCount, setLikeCount] = useState('')
    const [repliesArr, setRepliesArr] = useState([])

    const {id, community, content, created_at, headline, image_url, likes, replies, user, user_id} = post
    const { name, emoji } = community
    const { username, avatar } = user

    const date = new Date(created_at)
    const postDate = new Intl.DateTimeFormat('en-US', {dateStyle: 'medium'}).format(date)

    useEffect(()=> {
        setRepliesArr(replies)
    }, [])

    useEffect(() => {
        let likeStatus = (likes.filter(like => like.user_id === activeUser.id).length > 0)? true : false
        setAlreadyLiked(likeStatus)
    }, [activeUser])

    useEffect(()=> {
        setLikeCount(likes.length)
    }, [])

    const cardContainer = {
        width: '90%',
        backgroundColor: 'white',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '20px',
        marginBottom: '20px',
        textAlign: 'left',
        padding: '10px',
        minWidth: '600px',
        borderRadius: '4px',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px'
    }

    const postImgStyle = {
        width: '500px',
    }

    const postAvatar = {
        float: 'left',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        overflow: 'hidden',
        objectFit: 'cover',
        backgroundColor: 'white',
    }

    const dateStyle = {
        color: '#BDC7C3',
        float: 'left'
    }

    const userInfoStyle = {
        float: 'left',
        width: '60%',
        height: '60px',
    }

    const spanStyle = {
        float: 'left'
    }

    const communityTag ={
        backgroundColor: '#E9ECEB',
        padding: '5px 20px 5px',
        borderRadius: '16px',
        float: 'left',
        marginTop: '10px',
    }


    const postInfoStyle = {
        float: 'left',
        width: '40%',
        height: '60px'
    }

    const likeDiv = {
        backgroundColor: '#E9ECEB',
        padding: '5px 20px 5px',
        borderRadius: '16px',
        float: 'left',
        marginLeft: '30px',
        marginTop: '10px'
    }

    const cardBodyStyle = {
        padding: '10px',
        fontFamily: 'Source Serif Pro sans',
        marginTop: '60px'
    }

    const replyButton = {
        backgroundColor: 'Transparent',
        borderColor: '#E9ECEB',
        borderStyle: 'solid',
        width: '83%',
        padding: '5px',
        borderRadius: '4px',
        fontFamily: 'Roboto',
        wordSpacing: '5px'
    }

    const trashButton = {
        backgroundColor: 'Transparent',
        borderColor: '#E9ECEB',
        borderStyle: 'none',
        padding: '5px',
        marginLeft: '10px',
        borderRadius: '4px',
    }

    const hrStyle = {
        color: '#F2F4F3',
        backgroundColor: '#F2F4F3',
        border: 'none',
        height: '1px'
        
    }


    const replyDisplay = showReplies? null : {display: 'none'}

    function toggleReplies () {
        setShowReplies(!showReplies)
    }

    function addReply(reply){
        setRepliesArr([...repliesArr, reply])
    }

    let displayTrash = (activeUser.id === user_id)

    function handleDelete(id){
       // console.log(id)
       fetch(`http://localhost:9292/posts/${id}`, {
           method: 'DELETE',
           headers: { Accept: 'application/json' }
        //    headers: {'Content-Type': 'application/json'}
       })
       .then(res => res.json())
       .then(post => deletePost(post.id))
    }

    function handleLike(){

        const likeBody = {
            user_id: activeUser.id,
            post_id: id
        }

        if(alreadyLiked){
            alert('You already liked this post')
        } else {

        setAlreadyLiked(true)
        setLikeCount((likeCount) => likeCount + 1)

        fetch(`http://localhost:9292/likes`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(likeBody)
        })
        .then(res => res.json())
    }
    }

    function renderReplies(){
        return(
        <div className="ReplyList" style={replyDisplay}>
                    <br></br>
                     <hr style={hrStyle}></hr>
                    <ReplyForm activeUser={activeUser} postId={id} addReply={addReply}/>
                    {repliesArr.map(reply => {
                        return(
                            <Reply reply={reply} key={reply.id}/>
                        )
                    })}
                </div>
        )
    }

    return (
        <div style={cardContainer}>
            <div className="cardHeader">
                <div className="userInfo" style={userInfoStyle}>
                    <img src={avatar} alt={username} style={postAvatar}/>
                    <p style={spanStyle}><b>&nbsp;&nbsp;&nbsp;{username}   &nbsp;&nbsp;&nbsp;</b></p>
                    <p style={dateStyle}>{postDate}</p>
                </div>
                <div className="postInfo" style={postInfoStyle}>
                        <div style={communityTag}>{emoji}&nbsp;&nbsp; {name}</div>
                    <div  style={likeDiv} onClick={handleLike}> {likeCount} {alreadyLiked ? "🖤" : "🤍"}</div>
                </div>

            </div>

            <div className="cardBody" style={cardBodyStyle}>

                <h2>{headline}</h2>
                {image_url? <img src={image_url} alt={user_id} style={postImgStyle}/> : null}
                <p>{content}</p>
                    {showReplies? renderReplies() : null}
                <br></br>
                <button onClick={toggleReplies} style={replyButton}>{showReplies? `🙈 hide replies` : `💬 see replies`}</button>
                {displayTrash? <button style={trashButton} onClick={() => handleDelete(id)}>🗑️</button> : null}
            </div>
        </div>
    )
}

export default PostCard
