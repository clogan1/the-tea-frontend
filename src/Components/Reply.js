import React from 'react'

function Reply({ reply }) {
    
    const { content, created_at, user } = reply


    const replyStyle = {
        border: '1px solid',
        padding: '10px',
        marginTop: '5px',
        marginBottom: '5px'
    }

    const replyAvatar ={
        maxWidth: '25px',
        borderRadius: '50%',
        overflow: 'hidden',
        objectFit: 'cover',
        backgroundColor: 'white',
    }

    const date = new Date(created_at)
    const replyDate = new Intl.DateTimeFormat('en-US', {dateStyle: 'medium'}).format(date)
    
    return (
        <div style={replyStyle} >
            <img src={user.avatar} alt={user.username} style={replyAvatar}/>
            <span> {user.username} | {replyDate}</span>
            <p>{content}</p>
        </div>
    )
}

export default Reply
