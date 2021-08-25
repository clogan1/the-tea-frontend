import React, { useState } from 'react'

function ReplyForm({ activeUser, postId, addReply }) {

    let activeUserId = activeUser.id

    const [replyData, setReplyData] = useState({
        user_id: activeUserId,
        post_id: postId,
        content: '',
    })

    // console.log("from reply form:", activeUserId)
    // console.log(replyData)

    function handleChange(e){
        setReplyData({...replyData, content: e.target.value})
    }

    function handleReplySubmit(e){
        e.preventDefault()

        let newReply = {...replyData, user_id: activeUserId}

        fetch(`http://localhost:9292/replies`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReply)
        })
        .then(res => res.json())
        .then(rep => {
            let newRep = {...rep, user: {
                username: activeUser.username
            }}
            addReply(newRep)
        })

        setReplyData({
            user_id: activeUserId,
            post_id: postId,
            content: '',
        })
    }

    return (
        <div>
            <form onSubmit={handleReplySubmit}>
                <label>Add a reply</label>
                <input type="text" name="replycontent" onChange={handleChange} value={replyData.content}></input>
                <button type="submit">Add</button>
            </form>          
        </div>
    )
}

export default ReplyForm
