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
    const { name } = community
    const { username } = user



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
        .then(data => console.log(data))
    }
    }

    //  

    return (
        <div style={cardContainer}>
 
            <div style={spanStyle}>{name}</div>
            <div style={likeStyle} onClick={handleLike}> {likeCount} {alreadyLiked ? "🖤" : "🤍"}</div>

            <br></br>

            <span>{username} | {created_at}</span>
            <br></br>
            <h4>{headline}</h4>
            {image_url? <img src={image_url} alt={user_id} style={postImgStyle}/> : null}
            <p>{content}</p>

            <button onClick={toggleReplies}>{showReplies? "🙈 hide replies" : "💬 see replies"}</button>
            {displayTrash? <button onClick={() => handleDelete(id)}>🗑️</button> : null}
            <div className="ReplyList" style={replyDisplay}>
                <ReplyForm activeUser={activeUser} postId={id} addReply={addReply}/>
                {repliesArr.map(reply => {
                    return(
                        <Reply reply={reply} key={reply.id}/>
                    )
                })}
            </div>
        </div>
    )
}

export default PostCard
