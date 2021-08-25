import React from 'react'
import Reply from './Reply'
import { useState } from 'react'

function PostCard({post, activeUser, deletePost}) {

    //console.log("in card:", post)
    const [showReplies, setShowReplies] = useState(false)
    const [showDelete, setShowDelete] = useState(false)
    //const [likeCount, setLikeCount] = useState(0)
    //const [likedStatus, setLikedStatus] = useState(false)

    const {id, community, content, created_at, headline, image_url, likes, replies, user, user_id} = post
    const { name } = community
    const { username } = user

    // console.log(post)

    const cardContainer = {
        width: '50%',
        backgroundColor: 'white',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '10px',
        marginBottom: '10px',
        textAlign: 'left',
        padding: '10px'
    }

    const postImgStyle = {
        width: '300px'
    }
    const spanStyle = {
        width: '60%',
        fontWeight: 'bold',
        float: 'left'
    }

    const likeStyle = {
        textAlign: 'right',
        float: 'left',
        width: '30%'
    }

    const replyDisplay = showReplies? null : {display: 'none'}

    let likeCount = likes.length

    function toggleReplies () {
        setShowReplies(!showReplies)
    }

    let displayTrash = (activeUser === user_id)


    let alreadyLiked = likes.filter(like => like.user_id === activeUser).length > 0
    // console.log(likes)
    //setLikedStatus(alreadyLiked)

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
            user_id: user_id,
            post_id: id
        }

        if(alreadyLiked){
            alert('You already liked this post')
        } else {

        //add logic if user has not already liked post

        fetch(`http://localhost:9292/likes`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(likeBody)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        // let newLikes = likeCount + 1
        // setLikeCount(newLikes)
    }
    }

    //  

    return (
        <div style={cardContainer}>
 
            <div style={spanStyle}>{name}</div>
            <div style={likeStyle} onClick={handleLike}>{likeCount} {alreadyLiked? "🖤" : "🤍"}</div>

            <br></br>

            <span>{username} | {created_at}</span>
            <br></br>
            <h4>{headline}</h4>
            {image_url? <img src={image_url} alt="image" style={postImgStyle}/> : null}
            <p>{content}</p>

            <button onClick={toggleReplies}>{showReplies? "🙈 hide replies" : "💬 see replies"}</button>
            {displayTrash? <button onClick={() => handleDelete(id)}>🗑️</button> : null}
            <div className="ReplyList" style={replyDisplay}>
                {replies.map(reply => {
                    return(
                        <Reply reply={reply} key={reply.id}/>
                    )
                })}
            </div>
        </div>
    )
}

export default PostCard
