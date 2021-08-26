import React, { useState } from 'react'

function ReplyForm({ activeUser, postId, addReply }) {

    let activeUserId = activeUser.id

    const [replyData, setReplyData] = useState({
        user_id: activeUserId,
        post_id: postId,
        content: '',
    })

    const addReplyButton = {
        backgroundColor: '#539987',
        padding: '5px',
        borderRadius: '4px',
        borderStyle: 'none',
        fontFamily: 'Roboto',
        height: '50px',
        width: '10%',
        marginLeft: '20px',
        color: 'white',
        fontWeight: 'bold',
    }

    const replyformdiv={
        marginTop: '10px',
        fontFamily: 'Roboto',
    }

    const styleInput = {
        backgroundColor: '#E9ECEB',
        borderStyle: 'none',
        borderRadius: '4px',
        width: '80%',
        height: '40px',
        padding: '5px',
        paddingLeft: '20px',
    }

    function handleChange(e){
        setReplyData({...replyData, content: e.target.value})
    }

    function handleReplySubmit(e){
        e.preventDefault()

        if(replyData.content === '' || replyData.content === ' '){
            alert('Please add text to leave a reply!')
        } else{
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
                username: activeUser.username,
                avatar: activeUser.avatar
            }}
            addReply(newRep)
        })

        setReplyData({
            user_id: activeUserId,
            post_id: postId,
            content: '',
        })
    }
    }

    return (
        <div style={replyformdiv}>
            <form onSubmit={handleReplySubmit}>
                <br></br>
                <label>Add a reply</label>
                <br></br>
                <br></br>
                <input style={styleInput} type="text" name="replycontent" onChange={handleChange} value={replyData.content}></input>
                <button style={addReplyButton} type="submit">Add</button>
            </form>          
        </div>
    )
}

export default ReplyForm
